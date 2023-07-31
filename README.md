# React

## Fragment

```jsx
import { Fragment } from 'react';
// 2. key 사용 해야 할 때
.
.
export default function About() {
  return (
    <>
      <Snb />
      // 1. Fragment 축약형 (key 사용 불가) : import 필요 없음
      <div className="snb-wrap mt-20 text-lg/loose font-thin">
        {posts.map((post) => (
          <Fragment key={post.id}>
            {/* 2. key 사용해야 할 때 : import 추가*/}
            <h2 id={post.id} className="text-2xl text-red-400 font-bold">
              {post.id}
            </h2>
            <p>{post.context}</p>
          </Fragment>
        ))}
      </div>
    </>
  );
}
```

## HOOK ( useRef, useEffect )

```jsx
export default function About() {
  const circleRef = useRef(null);
  /**
   * `useRef(null)`는 `circleRef`를 `null`로 초기화하여 초기에 특정 요소를 참조하지 않음을 나타냄
   * 선택기 문자열(`'#thirdCircle'`) 대신 `circleRef.current`를 사용하면 `circleRef`가 참조하는 실제 DOM 요소에 대한 작업 또는 애니메이션을 수행할 수 있다.
   */

  useEffect(() => {
    gsap.to(circleRef.current, {
      x: 100,
      duration: 2,
      ease: 'bounce',
      delay: 1,
      scrollTrigger: {
        trigger: circleRef.current,
      },
    });
    // 구성 요소가 마운트 해제될 때 모든 ScrollTrigger를 제거.
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
```

### useRef

> `useRef` 후크는 기능 구성요소의 재렌더링 전체에서 값을 유지할 수 있게 해주는 기본 제공 React 후크

> `circleRef`는 DOM 요소에 대한 가변 참조를 생성하는 `useRef` 후크, `ref` 속성이 있는 HTML 요소를 참조하는 데 사용

### useEffect

> 컴포넌트가 랜더링 될 때마다 특정 작업(side effect)를 실행

1. 컴포넌트 mount(나타남) : `useEffect(() => {...}, [])`

   > 효과가 끝나면 반환, 구성 요소가 마운트 해제될 때 애니메이션과 ScrollTrigger가 제대로 정리

   > 구성요소 마운트 시 애니메이션을 한 번만 트리거하는 빈 종속성 배열(애니메이션과 ScrollTrigger가 한 번만 설정되고 다시 렌더링할 때마다 반복되지 않음.)

2. 컴포넌트 업데이터(props, state 업뎃) : `useEffect(() => {...}, [deps])`

   > deps : 배열 형태로, 함수를 실행시킬 조건으로 특정 값을 넣으면 '컴포넌트가 mount 될 때' 또는 '특정 값이 업데이트 될 때' useEffect를 실행한다.

3. Cleanup function: `useEffect(() => {... return () => {...}}, [])`

- Component가 Unmount 되었을 때(사라질 때) & Update 되기 직전에 이벤트 처리 삭제.
- 모든 리소스/구독을 **정리**하는데 좋은 방법이며 앱의 **성능을 최적화** 하는데 도움된다.
- Unmount 될 때만 cleanup 함수를 실행시키고 싶다면 deps에 빈 배열,
  특정 값이 업데이트되기 직전에 cleanup 함수를 실행시키고 싶다면 deps에 해당 값을 넣어주면 됨.

# Green Sock

[more](https://greensock.com/react-basics)

```jsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

# Splitting

[more](https://splitting.js.org/)

`npm i splitting -s`

```jsx
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';

Splitting();
```

# Plugin

- icon :
  @heroicons/react
  [git](https://github.com/tailwindlabs/heroicons)
  [site](https://heroicons.com/)
  `npm install @heroicons/react`

- aspect-ratio : [aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

`npm install -D @tailwindcss/aspect-ratio`

- UI conponent : [headlessui](https://headlessui.com/)

`npm install @headlessui/react`

- react Router : [more](https://reactrouter.com/)

# TailWind CSS

#### vscode extensions

Tailwind CSS IntelliSense

#### vscode error

> @apply unknown at rule tailwind

1. 플러그인 - PostCSS Language Support 를 설치
2. postcss 확장자 사용 : index.css -> index.pcss
3. VSCode Custom Data 사용

`/.vscode/css_custom_data.json`

> VSCode 설정 변경(settings.json)

```
{
  "css.customData": [".vscode/css_custom_data.json"]
  ...
}
{
  "atDirectives": [
    {
      "name": "@tailwind",
      "description": "Use the @tailwind directive to insert Tailwind’s `base`, `components`, `utilities`, and `screens` styles into your CSS.",
      "references": [
        {
          "name": "Tailwind’s “Functions & Directives” documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives/#tailwind"
        }
      ]
    }
  ]
}
```

> CSS에서 사용했던 @screen 디렉티브 처럼 사용할 수 있게 하기 위해 atDirectives 속성에 위와 같은 객체를 넣어준다. 참고 할만한 사이트의 URL도 집어넣을 수 있다. 그 외 가상 클래스, 가상 엘리먼트를 추가해서 넣을 수도 있다. 각각 pseudoClasses 속성과 pseudoElements 속성에 위와 같은 객체를 넣어주면 된다.

> 또, 엘리먼트의 속성을 확장할 수도 있다. properties라는 속성에 객체를 넣어주면 된다.

> 그 외, tailwind에서 사용하는 @apply 디렉티브나 다양한 기능들을 확장해서 경고 문구를 안뜨게 할 수 있다.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: 'Roboto', system-ui, sans-serif;
  }
}

@layer components {
  /* 단축어(?) */
  .is-fixed {
    @apply fixed inset-x-0 top-0;
  }
}
@layer utilities {
}
```

## keyframe & animate

`tailwind.config.js`

```javascript
export default {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
};
```

```html
<div className="animate-wiggle">...</div>
```

## more tailwindcss doc

name : https://tailwindcss.com/docs/{name}

ex) font size : [https://tailwindcss.com/docs/font-size](https://tailwindcss.com/docs/font-size)

## setting

### dark mode

`tailwind.config`

```js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  .
  .
  .
}
```

## basic

- `hover:{className}`
- responsible : `{breakpoint}: {name}`
  - size(min-width) - xs, sm(640px), md(768px), lg(1024px), xl(1280px)
- `{side}` - bottom, center, left, left-bottom, left-top, right, right-bottom, right-top, top

## Typography

### font

#### font-size & line-height

1. `text-{name}` : xs, sm, base, lg, xl, 2 ~ 9xl
2. `leading-{number|string}` : 3 ~ 10, none, tight, snug, normal, relaxed, loose
3. {font-size}/{line-height}
   `text-xl/8` : font-size:1.25rem, line-height:2rem
   `text-xl/[17px]` : font-size:1.25rem, line-height:17px

#### font weight

`font-{number}` : thin, extralight, light, normal, medium, semibold, bold, extrabold, black

### 정렬

1. text align : `text-{name}` - left, center, right, justify, start, end
2. Vertical Align : `align-{name}` - baseline, top, middle, bottom, text-top, text-bottom, sub, super

### text transform

`{name}` : uppercase, lowercase, capitalize, normal-case

### text color

1. `text-{color}-{number}`
   color
2. opacity
   `text-{color}-{number}/{opacity}`
   ex) text-blue-600/[0.6]

### Text Decoration

1. basic : `{name}` - underline, overline, line-through, no-underline
2. color : `decoration-{color}-{number}/{opacity}`
3. style : `decoration-{name}` - solid, double, dotted, dashed, wavy
4. Thickness : `decoration-{name}` - auto, from-font, 0 ~ 8
5. Offset : `underline-offset-{number}` - auto, 0 ~ 8

ex) `<a class="underline decoration-2 decoration-sky-500/30 hover:decoration-wavy ">My Company, Inc</a>.`

#### letter spacing

`tracking-{name}` : tighter, tight, normal, wide, wider, widest,

#### Word Break

`break-{name}` - normal, words, all, keep

#### Line Clamp

`line-clamp-{number}` : none, 1 ~ 6

### 가상 클래스 [more](https://tailwindcss.com/docs/hover-focus-and-other-states)

[간단하게 보기](https://tailwindcss.com/docs/hover-focus-and-other-states#quick-reference)
`content-{value}`

```html
<!-- :before, :after, ::before, ::after  -->
<a class="after:content-['_↗'] ..." href="...">Pro Display XDR</a>

<!-- attr() -->
<div before="Hello World" class="before:content-[attr(before)]">
  <!-- ... -->
</div>

<!-- 공백 표현 : _ -->
<div class="before:content-['Hello_World']">
  <!-- ... -->
</div>

<!-- _ 표현 : \_ -->
<div class="before:content-['Hello\_World']">
  <!-- ... -->
</div>

<div class="before:content-['Not_Hovering'] hover:before:content-['Hovering']">
  <!-- ... -->
</div>
```

## layout

Flex [more](https://tailwindcss.com/docs/flex-basis)
Grid [more](https://tailwindcss.com/docs/grid-template-columns)

### Container

`container {align} {vertical align}`

- center : `mx-auto`
- vertical align : `px-4`

### Width

`w-{number | auto | px}`
`w-{fraction}` w-6/12 → width: 50%
`w-{full | screen | min | max | fit}`
`min-w-{width}`
`max-w-{size}` size : xs, sm, md, lg, xl, 2 ~ 7xl, full, min, max, fit, prose,
`max-w-screen-{breakpoint}`

### Height

`h-{number | auto | px}`
`h-{fraction}` w-6/12 → width: 50%
`h-{full | screen | min | max | fit}`
`min-h-{width}`
`max-h-{size}` size : xs, sm, md, lg, xl, 2 ~ 7xl, full, min, max, fit, prose,
`max-w-screen-{breakpoint}`

### Columns

`columns-{auto | count | width}`

- 열 수에 따라 (count) : 1 ~ 12
- 열 너비 기준 (width) : 3xs ~ 7xl

### 간격

- `gap-{number}` : 열 간격
- `p{x|y|t|r|b|l}-{size}` : padding(가로, 세로, 상우하좌)
- `m{x|y|t|r|b|l}-{size}` : margin(가로, 세로, 상우하좌)
- `space-x-{amount}` : 자식 요소 사이 간격(margin)

### 인쇄 시 페이지 분리

- `break-after-{values}` [more](https://runebook.dev/ko/docs/css/break-after)
- `break-before-{values}` [more](https://runebook.dev/ko/docs/css/break-before)
- `break-inside-{values}` [more](https://runebook.dev/ko/docs/css/break-inside)

#### Box Decoration Break

`box-decoration-{value}` : clone, slice

#### Box Sizing

`box-{value}` - border, content

#### display

`{value}` : block, inline-block, inline, flex, inline-flex, table, inline-table, table-caption, table-cell, table-column, table-column-group, table-footer-group, table-header-group, table-row-group, table-row, flow-root, grid, inline-grid, contents, list-item, hidden

float : `float-{value}` - right, left, none
clear : `clear-{value}` - left, right, both, none

- Overflow : `overflow-{value}` - auto, hidden, clip, visible, scroll, x-auto , y-auto, x-hidden
- Overscroll Behavior(scroll chaining) : `overscroll-{value}` - auto, contain, none, y-auto, y-contain, y-none, x-auto, x-contain, x-none
  [more](https://salgum1114.github.io/css/2019-04-30-overscroll-behavior-contain/)

#### Position

1. `{value}` - static, fixed, absolute, relative, sticky
2. `{top|right|bottom|left|inset|start|end}-{size}`
   [more](https://tailwindcss.com/docs/top-right-bottom-left)

#### Z-Index

`z-{index}`

### Images

- Aspect Ratio : `aspect-{name}` - auto, square, video
- Object Fit : `object-{value}` - contain, cover, fill, none, scale-down
- Object Position : `object-{side}` - bottom, center, left, left-bottom, left-top, right, right-bottom, right-top, top
- Background Attachment : `bg-{value}` - fixed, local, scroll
- Background Position : `bg-{side}` - bottom, center, left, left-bottom, left-top, right, right-bottom, right-top, top
- Background Repeat : `bg-{no-repeat | repeat-{side}}` - x, y, round, space
- Background Size : `bg-{value}` - auto, cover, contain
- Background Clip : `bg-clip-{keyword}` - border, padding, content, text
- Background Color : `bg-{color}` [more]()
  - `bg-{color}/{opacity}` : bg-sky-500/75
- Background Image :
  - gradient : `bg-gradient-to-{direction}` - t, tr, r, br, b, bl, l, tl
    - `from-{color} via-{color} to-{color}`

### Border

#### radius

- basic `rounded{-side}` : none, md, lg, full
- 한 면만(측면) `rounded-{t|r|b|l}{-side}` : md, lg, xl2xl, 3xl
- 모서리 `rounded-{tl|tr|bl|br}{-side}` : md, lg, xl2xl, 3xl
- 논리적 속성 `rounded-{s|e|ss|se|es|ee}{-size?}` : LTR / RTL에 따라 모서리 매핑

#### border

- width : `border-{size}`
  - `border-{side}{-width}`
  - `border-{x|y}{-width}`
  - 논리적 속성 `border-{s|e|ss|se|es|ee}{-size?}` : LTR / RTL에 따라 모서리 매핑
- color: `border-{color}`
- style: `border-{style}` - solid, double, dotted, dashed, hidden, none

#### divide

- `divide-{x|y}-{width}` [more](https://tailwindcss.com/docs/divide-width)
- `divide-{color}` [more](https://tailwindcss.com/docs/divide-color)
- `divide-{style}` - solid, double, dotted, dashed, none

#### outline

- width: `outline-{width}`
