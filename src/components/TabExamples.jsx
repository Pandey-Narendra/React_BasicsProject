// {children} is object de-structuring to get children prop 
export default function TabExamples({children,onSelect,isSelected}) {
//    function handleClick(){
//         console.log("hello");
//     }

    return(
        <li>
            {/* this willthe execute the function when this line of code runs  */}
            {/* <button onClick={handleClick()}>{children}</button> */}
            {/* onSelect is the reffernce of the function which will run on click event    */}
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}