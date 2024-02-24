import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
 
function App() {
  return (  
    // react fragment to wrap the component without using any other div(wraping attribute) 
    <>
		<Header />
		<CoreConcepts/>
		<Examples />

		<main>
			<h2>Time to get started!</h2>
		</main>
    </>
  );
}

export default App;
