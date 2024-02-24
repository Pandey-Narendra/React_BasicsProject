// {children} is object de-structuring to get children prop 

// ...otherParam groups all the other props to single object 
export default function TabExamples({children,isSelected,...otherParam}) {
    return(
        <li>
            {/* this willthe execute the function when this line of code runs  */}
            {/* <button onClick={handleClick()}>{children}</button> */}
            {/* onSelect is the reffernce of the function which will run on click event    */} 

            {/* <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>  */}

            <button className={isSelected ? 'active' : ''} {...otherParam}>{children}</button>
        </li>
    );
}