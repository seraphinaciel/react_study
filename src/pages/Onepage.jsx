// all Components
import tab from '../components/Tab';
import split from '../components/Split';
import Moving from '../components/Moving';
import Three from '../components/Three';
import hscroll from '../components/Hscroll';
import hsnap from '../components/Hsnap';
import Gallery from '../components/Gallery';
import Simple from '../components/Simple';
import reveal from '../components/Reveal';
import text from '../components/Text';

import '../App.css';

function Tab() {
  const posts = [
    {
      id: 'section1',
      context: `As human beings, we often find ourselves feeling out of place in the
            world around us. We sense that something is not quite right, that
            the reality we experience is not necessarily the truth. And yet, we
            are bound by the beliefs and illusions that have been ingrained in
            us since childhood. It can be a difficult and confusing journey to
            try and unravel these beliefs, to see beyond the layers of deception
            that cloud our vision. We may feel as though we need to make an
            effort, to strive for enlightenment, to grasp at something just
            beyond our reach. But what if the answer is not found in effort, but
            in surrender? What if we simply allow ourselves to be carried by the
            flow of existence, to trust in the natural rhythm of life itself?`,
    },
    {
      id: 'section2',
      context: `As human beings, we often find ourselves feeling out of place in the
            world around us. We sense that something is not quite right, that
            the reality we experience is not necessarily the truth. And yet, we
            are bound by the beliefs and illusions that have been ingrained in
            us since childhood. It can be a difficult and confusing journey to
            try and unravel these beliefs, to see beyond the layers of deception
            that cloud our vision.`,
    },
    {
      id: 'section3',
      context: `It can be a difficult and confusing journey to
            try and unravel these beliefs, to see beyond the layers of deception
            that cloud our vision. We may feel as though we need to make an
            effort, to strive for enlightenment, to grasp at something just
            beyond our reach. But what if the answer is not found in effort, but
            in surrender?`,
    },
    {
      id: 'section4',
      context: `And yet, we
            are bound by the beliefs and illusions that have been ingrained in
            us since childhood. It can be a difficult and confusing journey to
            try and unravel these beliefs, to see beyond the layers of deception
            that cloud our vision. We may feel as though we need to make an
            effort, to strive for enlightenment, to grasp at something just
            beyond our reach. But what if the answer is not found in effort, but
            in surrender? What if we simply allow ourselves to be carried by the
            flow of existence, to trust in the natural rhythm of life itself?`,
    },
  ];
  tab();

  return (
    <section className="snb">
      <ul className="snb-button">
        {posts.map((post) => (
          <li key={post.id}>
            <button id={`${post.id}btn`}>{post.id}</button>
          </li>
        ))}
      </ul>
      <div className="snb-wrap">
        {posts.map((post) => (
          <div key={post.id}>
            <h2 id={post.id}>{post.id}</h2>
            <p>{post.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Split() {
  split();
  return (
    <>
      <div className="mt-12 text-md sm:text-7xl text-stone-500 dark:text-gray-200">
        Lorem ipsum dolor sit amet,{' '}
        <strong
          className="inline-block text-green-300"
          data-effect-movingtext=""
        >
          Ta-da Ta-da Ta-da
        </strong>
        &nbsp;consectetur adipisicing elit. Consectetur eum modi eos tempora,
        labore ut consequuntur. Voluptas ipsa nemo ea officia reprehenderit non
        quo ullam adipisci iste? Nulla, hic vel? Rem ab a quas aliquam qui
        omnis, saepe fugiat expedita et quae iusto eveniet molestiae obcaecati
      </div>

      <article className="border">
        <h1>split text, scroll trigger</h1>
        <div className="max-w-3xl mx-auto p-8 pt-16">
          <div className="quote" data-splitting="" data-effect-reveal="">
            <p>Design is intelligence made&nbsp;visible.</p>
          </div>
        </div>

        <div
          className="text-5xl/loose bg-slate-100 dark:bg-transparent dark:text-white p-8"
          data-splitting=""
          data-effect-typing=""
        >
          <p>
            As human beings, we often find ourselves feeling out of place in the
            world around us. We sense that something is not quite right, that
            the reality we experience is not necessarily the truth.
          </p>
        </div>
      </article>
    </>
  );
}

function Hscroll() {
  hscroll();
  const HscrollItems = [
    {
      index: 1,
      con: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.`,
    },
    {
      index: 2,
      con: `Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
              ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
              dignissimos sunt ipsum repellendus totam optio distinctio. Laborum
              suscipit quia aperiam.`,
    },
    {
      index: 3,
      con: `Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla
              impedit, dolores ullam hic commodi nobis nam. Dolorem expedita
              laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a
              quibusdam inventore!`,
    },
    {
      index: 4,
      con: `Labore, unde amet! Alias delectus hic laboriosam et dolorum?
              Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
              nostrum, tempore modi quo praesentium aspernatur vero dolor, ipsa
              unde perspiciatis minima.`,
    },
    {
      index: 5,
      con: `Quaerat error dolorem aspernatur magni dicta ut consequuntur
              maxime tempore. Animi odio eos quod culpa nulla consectetur?
              Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
              voluptate laboriosam, officiis at ea!`,
    },
    {
      index: 6,
      con: `Rem nobis facere provident magni minima iste commodi aliquam
              harum? Facere error quos cumque perspiciatis voluptatibus deserunt
              maiores, fugiat sunt sit ab inventore natus saepe, eveniet alias
              ipsam placeat voluptas!`,
    },
    {
      index: 7,
      con: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.`,
    },
    {
      index: 8,
      con: `Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
              sed dicta reiciendis, excepturi nisi perferendis, accusantium est
              suscipit tempora dolorum praesentium cupiditate doloribus non?
              Sint numquam recusandae dolore quis esse ea?`,
    },
    {
      index: 9,
      con: `Temporibus cum dolor minima consequatur esse veritatis enim nemo
              cupiditate laborum doloribus reiciendis perferendis, quas fugit
              earum rerum, at beatae alias amet aspernatur dolorem dolore error
              commodi. Perspiciatis, reiciendis amet!`,
    },
    {
      index: 10,
      con: `Vitae, tenetur beatae error corrupti odit expedita quisquam
              commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
              similique maiores praesentium quam! Optio tenetur saepe unde
              voluptatem minus tempora maxime temporibus ducimus ullam!`,
    },
  ];
  const HscrollItems2 = [
    {
      index: 1,
      con: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.`,
    },
    {
      index: 2,
      con: `Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
              ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
              dignissimos sunt ipsum repellendus totam optio distinctio. Laborum
              suscipit quia aperiam.`,
    },
    {
      index: 3,
      con: `Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla
              impedit, dolores ullam hic commodi nobis nam. Dolorem expedita
              laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a
              quibusdam inventore!`,
    },
    {
      index: 4,
      con: `Labore, unde amet! Alias delectus hic laboriosam et dolorum?
              Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
              nostrum, tempore modi quo praesentium aspernatur vero dolor, ipsa
              unde perspiciatis minima.`,
    },
    {
      index: 5,
      con: `Quaerat error dolorem aspernatur magni dicta ut consequuntur
              maxime tempore. Animi odio eos quod culpa nulla consectetur?
              Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
              voluptate laboriosam, officiis at ea!`,
    },
    {
      index: 6,
      con: `Rem nobis facere provident magni minima iste commodi aliquam
              harum? Facere error quos cumque perspiciatis voluptatibus deserunt
              maiores, fugiat sunt sit ab inventore natus saepe, eveniet alias
              ipsam placeat voluptas!`,
    },
    {
      index: 7,
      con: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.`,
    },
    {
      index: 8,
      con: `Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
              sed dicta reiciendis, excepturi nisi perferendis, accusantium est
              suscipit tempora dolorum praesentium cupiditate doloribus non?
              Sint numquam recusandae dolore quis esse ea?`,
    },
    {
      index: 9,
      con: `Temporibus cum dolor minima consequatur esse veritatis enim nemo
              cupiditate laborum doloribus reiciendis perferendis, quas fugit
              earum rerum, at beatae alias amet aspernatur dolorem dolore error
              commodi. Perspiciatis, reiciendis amet!`,
    },
    {
      index: 10,
      con: `Vitae, tenetur beatae error corrupti odit expedita quisquam
              commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
              similique maiores praesentium quam! Optio tenetur saepe unde
              voluptatem minus tempora maxime temporibus ducimus ullam!`,
    },
  ];
  return (
    <>
      <section className="horizontal ">
        <div className="pin-wrap">
          <div className="to-right">
            {HscrollItems.map(({ index, con }) => (
              <div className="item" key={index}>
                {con + index}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="horizontal ">
        <div className="pin-wrap">
          <div className="to-left">
            {HscrollItems2.map(({ index, con }) => (
              <div className="item" key={index}>
                {con + index}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Hsnap() {
  hsnap();
  const colorBox = [
    {
      txt: 'ONE',
      name: 'Comet',
      rgb: `#5C5980`,
    },
    {
      txt: 'TWO',
      name: 'East Side',
      rgb: `#BB97CA`,
    },
    {
      txt: 'THREE',
      name: 'Martinique',
      rgb: `#403650`,
    },
    {
      txt: 'FOUR',
      name: 'Silver Tree',
      rgb: `#73B08B`,
    },
    {
      txt: 'FIVE',
      name: 'Moon Raker',
      rgb: `#D7CDF5`,
    },
  ];

  return (
    <>
      <div className="overflow-hidden">
        <div className="ccon">
          {colorBox.map(({ txt, name, rgb }) => (
            <section
              className="panel"
              key={txt}
              style={{ backgroundColor: `${rgb}` }}
            >
              {txt} {name}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

function Reveal() {
  reveal();
  const features = [
    {
      imageSrc: '/images/img-07.jpg',
      heading: 'Create amazing SVG animations',
      description:
        "DrawSVGPlugin allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. MorphSVGPlugin to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. MotionPathPlugin allows you to easily move any object along a path.",
      revealClass: 'gs_reveal_fromLeft',
    },
    {
      imageSrc: '/images/img-04.jpg',
      heading: 'Supercharge immersive WebGL experiences',
      description:
        'GreenSock is used in some of the most popular Three.js powered WebGL projects. Animate any object in a scene. PixiPlugin makes animating Pixi.js objects with GSAP a breeze. Animate position, scale, color effects and more with all the power and control of GSAP and the rendering speed of Pixi.js.',
      revealClass: 'gs_reveal_fromRight',
    },
    {
      imageSrc: '/images/img-05.jpg',
      heading: 'Control performant Canvas animations',
      description:
        "GSAP makes animating with Canvas even easier by providing an easier way to look and sequence animations. GSAP works great with Adobe Animate and EaseJS through GSAP's EaselJSPlugin.",
      revealClass: 'gs_reveal_fromLeft',
    },
    {
      imageSrc: '/images/img-06.jpg',
      heading: 'Award winning websites',
      description:
        'GSAP is used on over 8,500,000 sites and over 1,000 sites featured on Awwwards. For some of our favorites, check out our showcase.',
      revealClass: 'gs_reveal_fromRight',
    },
  ];

  return (
    <>
      <blockquote>
        <h2>version 1</h2>
      </blockquote>
      <div className="revealCon">
        {features.map((feature, index) => (
          <div
            className={`feature gs_reveal ${feature.revealClass}`}
            key={index}
          >
            <div className="imgBox">
              <div className="card">
                <img src={feature.imageSrc} alt="" />
              </div>
            </div>

            <div className="txtBox">
              <h3>{feature.heading}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <blockquote>
        <h2>version 2</h2>
      </blockquote>
      <div className="revealCon ver2">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className={`imgBox gs_reveal ${feature.revealClass}`}>
              <div className="card">
                <img src={feature.imageSrc} alt="" />
              </div>
            </div>

            <div className="txtBox">
              <h3 className="gs_reveal">{feature.heading}</h3>
              <p className="gs_reveal">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Text() {
  const textParagraph = [
    {
      no: 'bad',
      txt: 'bad good hello happy puppy',
    },
  ];
  text(textParagraph);
  return (
    <>
      {textParagraph.map((item) => (
        <div className="demo" id={item.no} key={item.no}></div>
      ))}
    </>
  );
}

export default function Onepage() {
  return (
    <div className="dark">
      <Text />
      <section className="basic-width">
        <h1>간단한 시차 애니메이션 효과</h1>
        <Simple />
        <hr />
        <Reveal />

        <hr />

        <Moving />
        <Split />
        <Three />
        {/* three.js로 만들어진 J 모션 */}
        <h1>Anchor Scroll</h1>
        <blockquote>
          <h2>ScrollToPlugin</h2>
          스크롤되는 탭
        </blockquote>
        <Tab />
      </section>
      <hr />
      <section>
        <h1>Horizontal scroll</h1>
        <blockquote>
          <h2>수평 스냅 섹션</h2>
          속도에 따라 동적으로 스냅되며 스냅은 모멘텀이 적용된 후 자연스러운
          종료 위치를 기준으로 발생.
        </blockquote>

        <Hsnap />

        <blockquote>
          <h2>수평 전환</h2>
          스크롤을 따라 컨텐츠가 양쪽으로 나옴
        </blockquote>

        <Gallery />

        <blockquote>
          <h2>양방향</h2>
          양쪽으로 스크롤 이동, css에서 counter(item) 조절해야 함
        </blockquote>

        <Hscroll />
      </section>
    </div>
  );
}
