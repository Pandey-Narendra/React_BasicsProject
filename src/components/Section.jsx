// custom element component
// export default function Section({title,children,id}) {
//     return(
//         <section id={id}>
//             <h2>{title}</h2>
//             {children}
//         </section>
//     );
// }

// forwarding props to inner element
export default function Section({title,children,...otherParam}) {
    return(
        <section {...otherParam}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}