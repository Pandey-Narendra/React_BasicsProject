import { useState } from "react";
import Header from "./components/Header/Header";
import PropsComponent from "./components/PropsComponent";
import TabExamples from "./components/TabExamples";
import { arr,EXAMPLES } from "./data";

function App() {
  //array de-structuring, re-renders the whole component when the setSeletedTopics Updates everytime
  // react scheudles this setSelectedTopic
  const [selectedTopic,setSeletedTopic] = useState();

  // this function will run when in the TabExamples component click event is ocurred
  // this function  is passes as a value(reference) to the props to TabExamples component  
  function handleSelect(buttonSelected){
    setSeletedTopic(buttonSelected)
    // console.log(buttonSelected,EXAMPLES[selectedTopic].title);
  }

  let tabContent = <p>Please Selected A Topic</p>;
  if(selectedTopic){
    tabContent = (
      <div className="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  return (  
    <div>

      <Header />

      {/* reuse the custom component with different data */}
      <section id="core-concepts">
        <h2>Core Concepts</h2>

        <ul>
          {arr.map( (item) => <PropsComponent key={item.title} {...item} /> )}
        </ul>

        {/* <ul>
          <PropsComponent title={arr[0].title} description={arr[0].description} image={arr[0].image} />
          <PropsComponent {...arr[1]} />
          <PropsComponent  {...arr[2]} />
          <PropsComponent  {...arr[3]} />
        </ul> */}
         {/* short cut using spread operator with same names in passing and accessing data */}
      </section>

      {/*  */}
      <section id="examples">

        <h2>Examples</h2>

        <menu>
          {/* this is attribute props -> when pass parameters to the components like this, use props.label or {label} */}
          {/* <TabExamples label="Componets"/> */}  

          {/* this is children props -> where whole content between component is passed as a value */}
          {/* passing function as a value to the props which will execute it on click event inside that component*/}
          <TabExamples isSelected={selectedTopic === "Components"} onSelect={() => handleSelect('Components')}>Component</TabExamples>
          <TabExamples isSelected={selectedTopic === "JSX"} onSelect={() => handleSelect('JSX')}>JSX</TabExamples>
          <TabExamples isSelected={selectedTopic === "Props"} onSelect={() => handleSelect('Props')}>Props</TabExamples>
          <TabExamples isSelected={selectedTopic === "State"} onSelect={() => handleSelect('State')}>State</TabExamples>
          {/* here only the anonamus arrow function will run  when this line of code runs not handleSelect() */}
        </menu>
        
        {/* {!selectedTopic ? <p>Please Selected A Topic</p> :
          <div className="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        } */}

        {tabContent}

      </section>

      <main>
        <h2>Time to get started!</h2>
      </main>

    </div>
  );
}

export default App;
