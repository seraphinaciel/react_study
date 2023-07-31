# Green Sock

[react](https://greensock.com/react-basics)
[tutorial](https://greensock.com/get-started/)

```jsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

## tween

> 모든 애니메이션 작업을 수행, 고성능 속성 설정자

```jsx
gsap.to();
gsap.from();
gsap.fromTo();

// "녹색" 클래스의 요소를 대상으로 지정 - 회전하고 1초 동안 왼쪽으로 100px까지 이동합니다.
gsap.to('.green', { rotation: 360, x: 100, duration: 1 });

// "보라색" 클래스의 요소를 대상으로 지정 - 1초 동안 100px에서 왼쪽으로 회전하고 이동합니다.
gsap.from('.purple', { rotation: -360, x: -100, duration: 1 });

// "파란색" 클래스의 요소를 대상으로 지정 - 1초에 걸쳐 왼쪽으로 100px, 오른쪽으로 100px 회전 및 이동합니다.course of 1 second.
gsap.fromTo('.blue', { x: -100 }, { rotation: 360, x: 100, duration: 1 });
```

## timeline

> tween의 컨테이너. 애니메이션을 원하는 시간에 배치 후 메서드를 사용하여 전체 시퀀스를 제어하는 시퀀싱 도구.

```jsx
// 1. 타임라인 만들기
const tl = gasp.timeline();

// 2. 메서드를 사용하여 tween 추가
tl.to('.box1', { duration: 2, x: 100 }) //notice that there's no semicolon!
  .to('.box2', { duration: 1, y: 200 })
  .to('.box3', { duration: 3, rotation: 360 });
```

## ScrollTrigger

[more](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

> 스크롤 기반 애니메이션 만들기.
> 스크롤과 관련된 모든 항목을 트리거 함
> ScrollTrigger를 애니메이션에 직접 넣을 필요는 없습니다(아마도 가장 일반적인 사용 사례일 것입니다). 무엇이든 콜백을 사용하십시오.

```jsx
// 1
gsap.fromTo(
  w,
  { x },
  {
    scrollTrigger: {
      trigger: [클래스, 아이디, 태그],
      pinSpacing: true,
      markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
      toggleClass: 'active',
      scrub: 0.5,
    },
  }
);
// 2
let tl = gsap.timeline({
  // 전체 타임라인에 추가!
  scrollTrigger: {
    trigger: '.container',
    pin: true, // 활성 상태 동안 트리거 요소 고정
    start: 'top top', // 트리거 상단이 뷰포트의 상단에 닿을 때
    end: '+=500', // 시작 부분에서 500px 스크롤 후 종료
    scrub: 1, // 부드러운 스크러빙, 스크롤바를 "따라잡는 데" 1초 소요

    snap: {
      snapTo: 'labels', // 타임라인에서 가장 가까운 레이블에 스냅
      duration: { min: 0.2, max: 3 }, // 스냅 애니메이션은 0.2초 이상이어야 하지만 3초를 넘지 않아야 합니다(속도로 결정).
      delay: 0.2, // 스냅을 수행하기 전에 마지막 스크롤 이벤트에서 0.2초 대기
      ease: 'power1.inOut', // 스냅 애니메이션의 ease(기본 "power3")
    },
  },
});

// 타임라인에 애니메이션과 레이블을 추가
tl.addLabel('start')
  .from('.box p', { scale: 0.3, rotation: 45, autoAlpha: 0 })
  .addLabel('color')
  .from('.box', { backgroundColor: '#28a92b' })
  .addLabel('spin')
  .to('.box', { rotation: 360 })
  .addLabel('end');

// 3
ScrollTrigger.create({
  trigger: '#id',
  start: 'top top',
  endTrigger: '#otherID',
  end: 'bottom 50%+=100px',
  onToggle: (self) => console.log('toggled, isActive:', self.isActive),
  onUpdate: (self) => {
    console.log(
      'progress:',
      self.progress.toFixed(3),
      'direction:',
      self.direction,
      'velocity',
      self.getVelocity()
    );
  },
});
```

- `pinSpacing` : 특정 스크롤 위치 사이에 요소를 고정. 다른 요소를 아래로 밀어서 요소가 고정 해제될 때 따라잡는다. 동일한 요소를 서로 다른 지점에 여러번 고정 가능
- `markers` : 개발 중 시작/종료/트리거 지점을 표시.
- `scrub` : 애니메이션에 대한 작업(재생, 일시 중지, 재개, 재시작, 역방향, 완료, 재설정) 수행
- `getVelocity()` : 속도를 기준으로 애니메이션의 특정 지점으로 스냅
- `toggleClass` : css 클래스를 추가/삭제

## Scroll to Plugin

> 스크롤 위치에 애니메이션 적용

[more](https://greensock.com/docs/v3/Plugins/ScrollToPlugin)

# Splitting

[more](https://splitting.js.org/)

`npm i splitting -s`

```jsx
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';

Splitting();
```

### SVG

https://css-tricks.com/scroll-drawing/
https://jakearchibald.com/2013/animated-line-drawing-svg/
