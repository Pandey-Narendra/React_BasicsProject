// custom component

// function PropsComponent(props){
//   return(
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

//object de-structuring {  }, names should be same in passing and accessing data
export default function PropsComponent({image,title,description}){
    return(
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
}
  