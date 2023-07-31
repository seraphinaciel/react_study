// all Components
import Tab from '../components/Tab';
import Split from '../components/Split';
import Moving from '../components/Moving';
import Three from '../components/Three';
import Hscroll from '../components/Hscroll';
import '../App.css';

export default function Onepage() {
  return (
    <>
      <div className="basic-width dark">
        <Moving />
        <div className="mt-12 text-md text-7xl text-stone-500 dark:text-gray-200">
          Lorem ipsum dolor sit amet,{' '}
          <strong
            className="inline-block text-green-300"
            data-effect-movingtext=""
          >
            Ta-da Ta-da Ta-da
          </strong>
          &nbsp;consectetur adipisicing elit. Consectetur eum modi eos tempora,
          labore ut consequuntur. Voluptas ipsa nemo ea officia reprehenderit
          non quo ullam adipisci iste? Nulla, hic vel? Rem ab a quas aliquam qui
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
              As human beings, we often find ourselves feeling out of place in
              the world around us. We sense that something is not quite right,
              that the reality we experience is not necessarily the truth.
            </p>
          </div>
        </article>
        <Three />
        <Tab />

        <Split />
        <Hscroll />
      </div>
    </>
  );
}
