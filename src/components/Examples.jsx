import TabExamples from "./TabExamples";
import Tabs from "./Tabs";
import { useState } from "react";
import { EXAMPLES } from "../data";

// // custom element component
import Section from "./Section";

export default function Examples() {

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

    return( 
        <>
            <section id="examples">

                <h2>Examples</h2>

                <menu>
                    {/* this is attribute props -> when pass parameters to the components like this, use props.label or {label} */}
                    {/* <TabExamples label="Componets"/> */}  

                    {/* this is children props -> where whole content between component is passed as a value */}
                    {/* passing function as a value to the props which will execute it on click event inside that component*/}
                    
                    {/* <TabExamples isSelected={selectedTopic === "Components"} onSelect={() => handleSelect('Components')}>Component</TabExamples> */}

                    {/* forwarding props to inner element */}
                    {/* whole onclick props is passed to the inner element */}
                    <TabExamples isSelected={selectedTopic === "Components"} onClick={() => handleSelect('Components')}>Component</TabExamples>
                    <TabExamples isSelected={selectedTopic === "JSX"} onClick={() => handleSelect('JSX')}>JSX</TabExamples>
                    <TabExamples isSelected={selectedTopic === "Props"} onClick={() => handleSelect('Props')}>Props</TabExamples>
                    <TabExamples isSelected={selectedTopic === "State"} onClick={() => handleSelect('State')}>State</TabExamples>

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

            <hr />
            {/* custom element component */}
            {/* props are not directly forwarded inside the inner element and setting multiple slots */}
            <Section title="Testing Examples" id="examples">
                {/* setting dynamically element/component type */}
                <Tabs 
                    elementType = "menu"
                    buttons={
                        <>
                            <TabExamples isSelected={selectedTopic === "Components"} onClick={() => handleSelect('Components')}>Component</TabExamples>
                            <TabExamples isSelected={selectedTopic === "JSX"} onClick={() => handleSelect('JSX')}>JSX</TabExamples>
                            <TabExamples isSelected={selectedTopic === "Props"} onClick={() => handleSelect('Props')}>Props</TabExamples>
                            <TabExamples isSelected={selectedTopic === "State"} onClick={() => handleSelect('State')}>State</TabExamples>
                        </>
                    }
                >
                    {tabContent}
                </Tabs>
            </Section>
        </>
    );
}
