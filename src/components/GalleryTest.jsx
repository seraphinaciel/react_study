import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const gImg = [
  { no: 'img1', url: '/images/img-01.jpg', alt: 'hello' },
  { no: 'img2', url: '/images/img-02.jpg', alt: 'hello' },
  { no: 'img3', url: '/images/img-03.jpg', alt: 'hello' },
  { no: 'img4', url: '/images/img-04.jpg', alt: 'hello' },
  { no: 'img5', url: '/images/img-05.jpg', alt: 'centerBlock' },
  { no: 'img6', url: '/images/img-06.jpg', alt: 'hello' },
  { no: 'img7', url: '/images/img-07.jpg', alt: 'hello' },
  { no: 'img8', url: '/images/img-08.jpg', alt: 'hello' },
  { no: 'img9', url: '/images/img-09.jpg', alt: 'hello' },
];

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  useEffect(() => {
    let iteration = 0; // 끝까지 스크롤하거나 시작할 때 반복됩니다. 재생 헤드 스크러빙을 올바른 방향으로 원활하게 계속할 수 있습니다.

    // set initial state of items
    gsap.set('.gBox li', { xPercent: 400, opacity: 0, scale: 0 });

    const spacing = 0.1, // 카드 간격(스태거)
      snapTime = gsap.utils.snap(spacing), // 이를 사용하여 seamlessLoop의 재생 헤드를 snapTime합니다.
      cards = gsap.utils.toArray('.gBox li'),
      // 이 함수는 buildSeamlessLoop() 함수의 각 요소에 대해 호출되며 마스터 타임라인에 삽입될 애니메이션을 반환하기만 하면 됩니다.
      animateFunc = (element) => {
        const tl = gsap.timeline();
        tl.fromTo(
          element,
          { scale: 0, opacity: 1 },
          {
            scale: 1,
            opacity: 1,
            zIndex: 100,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: 'power1.in',
            immediateRender: false,
          }
        ).fromTo(
          element,
          { xPercent: 200 },
          { xPercent: -200, duration: 1, ease: 'none', immediateRender: false },
          0
        );
        return tl;
      },
      seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc),
      playhead = { offset: 0 }, // 재생 헤드 위치를 시뮬레이트하는 데 사용하는 프록시 개체이지만 어느 방향으로든 무한히 이동할 수 있으며 onUpdate를 사용하여 seamlessLoop 타임라인에서 해당 시간으로 변환합니다.
      wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()), // 오프셋(시간)을 입력하면 해당 래핑된 시간(0과 seamlessLoop의 지속 시간 사이의 안전한 값)을 반환합니다.
      scrub = gsap.to(playhead, {
        // 이 트윈을 재사용하여 seamlessLoop에서 재생 헤드를 부드럽게 스크럽합니다.
        offset: 0,
        onUpdate() {
          seamlessLoop.time(wrapTime(playhead.offset)); // seamlessLoop 타임라인에서 오프셋을 "안전한" 해당 시간으로 변환
        },
        duration: 0.5,
        ease: 'power3',
        paused: true,
      }),
      trigger = ScrollTrigger.create({
        start: 0,
        onUpdate(self) {
          let scroll = self.scroll();

          if (scroll > self.end - 1) {
            wrap(1, 2);
          } else if (scroll < 1 && self.direction < 0) {
            wrap(-1, self.end - 2);
          } else {
            scrub.vars.offset =
              (iteration + self.progress) * seamlessLoop.duration();
            console.log(iteration);
            scrub.invalidate().restart(); // 성능을 향상시키기 위해 동일한 트윈을 무효화하고 다시 시작하기만 하면 됩니다. 업데이트할 때마다 덮어쓰거나 새 트윈을 만들 필요가 없습니다.
          }
        },
        end: '+=3000',
        markers: true,
        pin: '.gContainer',
      }),
      // 진행률 값(0-1이지만 래핑할 때 해당 범위를 벗어날 수 있음)을 시작 또는 끝에서 최소 1 떨어진 "안전한" 스크롤 값으로 변환합니다. 아래로, 감싸다.
      progressToScroll = (progress) =>
        gsap.utils.clamp(
          1,
          trigger.end - 1,
          gsap.utils.wrap(0, 1, progress) * trigger.end
        ),
      wrap = (iterationDelta, scrollTo) => {
        iteration += iterationDelta;
        trigger.scroll(scrollTo);
        trigger.update(); // 기본적으로 trigger.scroll()은 update()까지 1틱을 기다립니다.
      };

    // 사용자가 스크롤을 멈추면 가장 가까운 항목으로 스냅합니다.
    ScrollTrigger.addEventListener('scrollEnd', () =>
      scrollToOffset(scrub.vars.offset)
    );

    // 오프셋을 입력하고(seamlessLoop 타임라인의 시간과 비슷하지만 어느 방향으로든 0과 duration()을 초과할 수 있습니다. 래핑됩니다) 그에 따라 스크롤 위치를 설정합니다. 변경 사항이 있으면 트리거에서 onUpdate()를 호출합니다.
    function scrollToOffset(offset) {
      //seamlessLoop의 totalTime 값에 해당하는 위치로 스크롤 재생 헤드를 이동하고 필요한 경우 래핑합니다.
      let snappedTime = snapTime(offset),
        progress =
          (snappedTime - seamlessLoop.duration() * iteration) /
          seamlessLoop.duration(),
        scroll = progressToScroll(progress);
      if (progress >= 1 || progress < 0) {
        return wrap(Math.floor(progress), scroll);
      }
      trigger.scroll(scroll);
    }

    function buildSeamlessLoop(items, spacing, animateFunc) {
      let overlap = Math.ceil(1 / spacing), // 매끄러운 루핑을 수용하기 위해 시작/끝의 양쪽에 EXTRA 애니메이션 수
        startTime = items.length * spacing + 0.5,
        // 원활한 루프를 시작할 rawSequence의 시간
        loopTime = (items.length + overlap) * spacing + 1, // startTime으로 되돌아가는 마지막 지점
        rawSequence = gsap.timeline({ paused: true }), // 모든 "진짜" 애니메이션이 있는 곳입니다.
        seamlessLoop = gsap.timeline({
          // 이는 단순히 rawSequence의 재생 헤드를 문질러 매끄럽게 반복되는 것처럼 보이도록 할 뿐입니다.
          paused: true,
          repeat: 0, // 무한 스크롤/루핑 수용
          onRepeat() {
            // GSAP 3.6.1에서 수정된 매우 희귀한 엣지 케이스 버그를 해결합니다.
            this._time === this._dur && (this._tTime += this._dur - 0.01);
          },
        }),
        l = items.length + overlap * 2,
        time,
        i,
        index;

      // 이제 시차를 두고 모든 애니메이션을 반복하고 생성합니다. 끊김 없는 루핑을 수용하려면 마지막에 EXTRA 애니메이션을 만들어야 합니다.
      for (i = 0; i < l; i++) {
        index = i % items.length;
        time = i * spacing;
        rawSequence.add(animateFunc(items[index]), time);
        i <= items.length && seamlessLoop.add('label' + i, time); // 실제로 필요하지는 않지만 레이블을 사용하여 주요 지점으로 이동하려면 여기를 클릭하십시오.
      }

      // 재생 헤드가 매끄럽게 보이도록 스크러빙을 설정하는 곳입니다.
      rawSequence.time(startTime);
      seamlessLoop
        .to(rawSequence, {
          time: loopTime,
          duration: loopTime - startTime,
          ease: 'none',
        })
        .fromTo(
          rawSequence,
          { time: overlap * spacing + 1 },
          {
            time: startTime,
            duration: startTime - (overlap * spacing + 1),
            immediateRender: false,
            ease: 'none',
          }
        );
      return seamlessLoop;
    }
  }, []);
  return (
    <>
      <h1 className="header-section">
        Scroll down to see a photo gallery being revealed
      </h1>

      <div className="gContainer">
        <ul className="gBox">
          {gImg.map(({ no, url }) => (
            <li key={no} style={{ backgroundImage: `url(${url})` }}></li>
          ))}
        </ul>
      </div>
    </>
  );
}
