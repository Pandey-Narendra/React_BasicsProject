export default function Tabs({children, buttons, elementType}){
    // if name starts with the small letter then it is built in element else
    //  if name starts with the Capital letter then it is custom element/component
    const Element= elementType;
    return(
        <>
            <Element>{buttons}</Element>
            {children}
        </>
    );
}