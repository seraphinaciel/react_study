import styles from './Study.module.css';
// 텍스트가 흐르는 효과
import TextBanner from './study/TextBanner';
// 부드럽게 텍스트가 나타나는 효과
import TextSplit from './study/TextSplit';
// 스크롤 시 양방향으로 움직이는 텍스트
import TextReveal from './study/TextReveal';
// 스크롤링 할 때마다 타이핑처럼 텍스트 나옴
import TextTyping from './study/TextTyping';
import BoxContainer from './study/BoxContainer';
import CircleBox from './study/CircleBox';

// import ImgSplit from './study/ImgSplit';
import TextLR from './study/TextLR';

import SvgLine from './study/SvgLine';
import SvgIcons from './study/SvgIcons';

export default function Study() {
  return (
    <>
      <div className="h-screen"></div>
      <div className={`${styles.transition} ${styles.appleBox}`}>
        <TextReveal content="my favorite fruit is apple" />
        <TextReveal content="my favorite fruit is apple" />
        <SvgLine id="sStar" duration={20} delay={50} />
      </div>
      <div className="h-screen"></div>
      <SvgLine id="sStar" duration={50} />
      <SvgLine id="sStar" duration={50} />
      <SvgLine id="sArrow" duration={50} />
      <SvgLine id="sHand" duration={10} />
      <SvgIcons />
      {/* <ImgSplit /> */}
      <div className="h-screen"></div>
      <TextLR id="out" conLeft="GET ON THE" conRight="ELEVATOR" />
      <TextLR id="in" conLeft="Apple is" conRight="expensive" />
      <BoxContainer
        id="bigger"
        imgSrc="/images/img-01.jpg"
        alt="bigger image"
      />
      <BoxContainer
        id="smaller"
        imgSrc="/images/img-02.jpg"
        alt="smaller image"
      />
      <div className="h-screen"></div>
      <div className={styles.transition}>
        <TextReveal content="my favorite fruit is apple" />
        <TextReveal content="my favorite fruit is apple" />
      </div>
      <div className={styles.banner}>
        <TextBanner content="my favorite fruit is apple" />
        <TextBanner content="a little bit of love" />
        <TextBanner content="good chioce" />
        <TextBanner content="I love tomato" />
        <TextBanner content="one two three" />
        <TextBanner content="깊은 밤, 길을 잃어도 차라리 날아올라" />
      </div>
      <div className={styles.text_reveal}>
        <div className={styles.quote2} data-effect-reveal="">
          <TextSplit content="Design is" delay={0} />
          <TextSplit content="intelligence" delay={0} />
          <TextSplit content="made visible." delay={0} />
          <TextSplit content="Design is" delay={0.5} />
          <TextSplit content="intelligence" delay={0.7} />
          <TextSplit content="made visible." delay={0.2} />
        </div>
      </div>
      <TextTyping
        content="As human beings, we often find ourselves feeling out of place in the
          world around us. We sense that something is not quite right, that the
          reality we experience is not necessarily the truth."
      />
      <TextTyping
        content="As human beings, we often find ourselves feeling out of place in the
          world around us. We sense that something is not quite right, that the
          reality we experience is not necessarily the truth."
      />
      <CircleBox imgSrc="/images/vite.svg" />
      <div className="h-screen"></div>
      <div className="cursor"></div>
    </>
  );
}
