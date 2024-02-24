import PropsComponent from "./PropsComponent";
import { arr } from "../data";
import Section from "./Section";

export default function CoreConcepts() {
    return(
        <>
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

            <hr />
            {/* custom element component */}
            {/* props are not directly forwarded inside the inner element  */}
            <Section title="Testing Core Concepts" id="core-concepts">
                <ul>
                    {arr.map( (item) => <PropsComponent key={item.title} {...item} /> )}
                </ul>
            </Section>
        </>
    );
}