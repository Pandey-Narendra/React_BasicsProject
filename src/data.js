import image1 from "./assets/components.png";
import image2 from "./assets/config.png";
import image3 from "./assets/jsx-ui.png";
import image4 from "./assets/state-mgmt.png";

export const arr = [
    // array elements / objects inside the array
    {
        image: image1,
        title: 'Components',
        description: 'The core UI building block - compose the user interface by combining multiple components.',
    },
    {
        image: image2,
        title: 'JSX',
        description:  'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    },
    {
        image: image3,
        title: 'Props',
        description:'Make components configurable (and therefore reusable) by passing input data to them.',
    },
    {
        image: image4,
        title: 'State',
        description: 'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    }
];
