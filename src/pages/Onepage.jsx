// all Components
import tab from '../components/Tab';
import split from '../components/Split';
import Moving from '../components/Moving';
import Three from '../components/Three';
import hscroll from '../components/Hscroll';
// import Gallery from '../components/Gallery';
import Gallery2 from '../components/Gallery2';
import Simple from '../components/Simple';

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
    <article className="basic-width">
      <h1 className="underline underline-offset-4 decoration-red-700 text-red-700 text-5xl">
        anchor scroll
      </h1>
      <section className="snb bg-sky-100 p-8">
        <ul className="snb-button flex justify-center gap-2 sticky top-20 w-full">
          {posts.map((post) => (
            <li key={post.id}>
              <button
                id={`${post.id}btn`}
                className="bg-teal-900 text-white font-bold text-xs md:text-base rounded-md p-2 px-4"
              >
                {post.id}
              </button>
            </li>
          ))}
        </ul>
        <div className="snb-wrap mt-20 text-lg/loose font-thin">
          {posts.map((post) => (
            <div key={post.id}>
              <h2 id={post.id} className="text-2xl text-red-400 font-bold">
                {post.id}
              </h2>
              <p>{post.context}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
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

      <h1>split text, scroll trigger</h1>

      <article className="border">
        <div className="max-w-3xl mx-auto p-8 pt-16">
          <div className="quote" data-splitting="" data-effect-reveal="">
            <p>Design is intelligence made&nbsp;visible.</p>
          </div>
        </div>

        <div
          className="text-3xl/loose bg-slate-100 dark:bg-transparent dark:text-white p-8"
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
      <section className="basic-width bg-stone-700">
        <h2>ScrollTrigger Bi-Directional Fake Horizontal Scroll</h2>
        <p>...</p>
      </section>

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

      <section className="basic-width bg-stone-700">
        <h2>Nothing to see here...</h2>
        <p>...</p>
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

export default function Onepage() {
  return (
    <>
      <section className="dark" id="wrap">
        {/* 어두울 때 .dark */}
        <div className="basic-width">
          <Moving />
          <Split />
          <Simple />
          <Three />
          <Tab />
        </div>
        <Gallery2 />
        <Hscroll />
      </section>
    </>
  );
}
