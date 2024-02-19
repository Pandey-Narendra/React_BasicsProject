import Header from "./components/Header/Header";
import PropsComponent from "./components/PropsComponent";
import { arr } from "./data";

function App() {
  return (
    <div>

      <Header />

      {/* reuse the custom component with different data */}
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <PropsComponent title={arr[0].title} description={arr[0].description} image={arr[0].image} />
          {/* short cut using spread operator with same names in passing and accessing data */}
          <PropsComponent {...arr[1]} />
          <PropsComponent  {...arr[2]} />
          <PropsComponent  {...arr[3]} />
        </ul>
      </section>

      <main>
        <h2>Time to get started!</h2>
      </main>

    </div>
  );
}

export default App;
