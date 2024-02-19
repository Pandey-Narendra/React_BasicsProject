import "./Header.css";
import logo from "../../assets/react-core-concepts.png";

const dynamic = ['Fundamental', 'Core', 'Crucial'];

// create random no
function RandomNumber(maxsize){
  return Math.floor(Math.random() * (maxsize+1));
}


export default function Header(){

  const data = dynamic[RandomNumber(2)]; 

  return(
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* output dynamic content / javascript expression */}
       {data} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}