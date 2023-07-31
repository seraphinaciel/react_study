import { useEffect, useRef } from 'react';
import Splitting from 'splitting';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

export default function About() {
  const circleRef = useRef(null);
  /**
   *  `useRef` 후크는 기능 구성요소의 재렌더링 전체에서 값을 유지할 수 있게 해주는 기본 제공 React 후크
   *   `circleRef`는 DOM 요소에 대한 가변 참조를 생성하는 `useRef` 후크, `ref` 속성이 있는 HTML 요소를 참조하는 데 사용
   *
   * `useRef(null)`는 `circleRef`를 `null`로 초기화하여 초기에 특정 요소를 참조하지 않음을 나타냄
   * 선택기 문자열(`'#thirdCircle'`) 대신 `circleRef.current`를 사용하면 `circleRef`가 참조하는 실제 DOM 요소에 대한 작업 또는 애니메이션을 수행할 수 있다.
   */

  useEffect(() => {
    // useEffect : 효과가 끝나면 반환, 구성 요소가 마운트 해제될 때 애니메이션과 ScrollTrigger가 제대로 정리
    gsap.to(circleRef.current, {
      x: 100,
      duration: 2,
      ease: 'bounce',
      delay: 1,
      scrollTrigger: {
        trigger: circleRef.current,
      },
    });
  }, []); // 구성요소 마운트 시 애니메이션을 한 번만 트리거하는 빈 종속성 배열(애니메이션과 ScrollTrigger가 한 번만 설정되고 다시 렌더링할 때마다 반복되지 않음.)

  useEffect(() => {
    Splitting();
    // Rest of the code
    gsap.registerPlugin(ScrollTrigger);

    const splitContent = document.querySelectorAll(
      '[data-splitting][data-effect-fadeInOut]'
    );
    const movingContent = document.querySelectorAll('[data-effect-movingText]');

    movingContent.forEach((m) => {
      gsap.fromTo(
        m,
        { translate: '0' },
        {
          ease: 'none',
          translate: '0 150%',
          scrollTrigger: {
            trigger: m,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });
    const animateTitleRotation = (title) => {
      gsap.fromTo(
        title,
        {
          transformOrigin: '0% 70%',
        },
        {
          ease: 'none',
          translate: '0% 0%',
          scrollTrigger: {
            trigger: title,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    };
    const animateWordOpacity = (title) => {
      gsap.fromTo(
        title.querySelectorAll('.word'),
        {
          'will-change': 'opacity',
          opacity: 0,
          y: '40%',
        },
        {
          ease: 'power1',
          opacity: 1,
          y: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: title,
            start: 'top bottom',
            end: 'bottom top',
            // scrub: true,
          },
        }
      );
    };

    splitContent.forEach((title) => {
      animateTitleRotation(title);
      animateWordOpacity(title);
    });

    // Cleanup function : 구성 요소가 마운트 해제될 때 모든 ScrollTrigger를 제거.
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div id="firstCircle"></div>
      <div id="secondCircle"></div>
      <div ref={circleRef} id="thirdCircle"></div>

      <div
        className="content__title content__title--left text-3xl/loose min-h-screen"
        data-splitting=""
        data-effect-fadeInOut=""
      >
        <p>
          As human beings, we often find ourselves feeling out of place in the
          world around us. We sense that something is not quite right, that the
          reality we experience is not necessarily the truth. And yet, we are
          bound by the beliefs and illusions that have been ingrained in us
          since childhood. It can be a difficult and confusing journey to try
          and unravel these beliefs, to see beyond the layers of deception that
          cloud our vision. We may feel as though we need to make an effort, to
          strive for enlightenment, to grasp at something just beyond our reach.
          But what if the answer is not found in effort, but in surrender? What
          if we simply allow ourselves to be carried by the flow of existence,
          to trust in the natural rhythm of life itself?
        </p>
      </div>
      <div
        className="content__title content__title--left text-3xl/loose min-h-screen"
        data-splitting=""
        data-effect-fadeInOut=""
      >
        <p>
          As human beings, we often find ourselves feeling out of place in the
          world around us. We sense that something is not quite right, that the
          reality we experience is not necessarily the truth. And yet, we are
          bound by the beliefs and illusions that have been ingrained in us
          since childhood. It can be a difficult and confusing journey to try
          and unravel these beliefs, to see beyond the layers of deception that
          cloud our vision. We may feel as though we need to make an effort, to
          strive for enlightenment, to grasp at something just beyond our reach.
          But what if the answer is not found in effort, but in surrender? What
          if we simply allow ourselves to be carried by the flow of existence,
          to trust in the natural rhythm of life itself?
        </p>
      </div>
      <div className="text-7xl text-center bg-stone-500">
        <strong className="block text-green-300" data-effect-movingText="">
          Ta-da
        </strong>
        <br />
        <strong className="block text-green-400" data-effect-movingText="">
          Ta-da
        </strong>
        <br />
        <strong className="block text-green-500" data-effect-movingText="">
          Ta-da
        </strong>
        <br />
        <strong className="block text-green-600" data-effect-movingText="">
          Ta-da
        </strong>
        <br />
        <strong className="block text-green-700" data-effect-movingText="">
          Ta-da
        </strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        eum modi eos tempora, labore ut consequuntur. Voluptas ipsa nemo ea
        officia reprehenderit non quo ullam adipisci iste? Nulla, hic vel? Rem
        ab a quas aliquam qui omnis, saepe fugiat expedita et quae iusto eveniet
        molestiae obcaecati veniam non voluptas maiores mollitia ad,
        reprehenderit consectetur laudantium? Sit, qui reiciendis. Magni, fugit!
        Quaerat repellat totam reiciendis praesentium architecto molestias.
        Magnam saepe ipsa, expedita mollitia quasi ipsam numquam sed cumque rem
        odit optio quas, possimus animi quia quis distinctio eligendi, sint
        nihil deleniti. Sed possimus quidem laudantium libero cum. Ab quas
        maxime ex veniam blanditiis id accusantium sapiente. Eveniet perferendis
        quidem sunt exercitationem qui vitae. Eligendi, asperiores laboriosam.
        Nostrum natus facere iusto facilis? Earum laboriosam unde vero, porro
        quibusdam, dignissimos necessitatibus magnam voluptatum expedita
        assumenda eligendi minus tempora? Cumque ipsa rem eaque, veritatis optio
        mollitia in cum ducimus, laboriosam vero obcaecati tenetur accusantium!
      </div>
    </div>
  );
}
