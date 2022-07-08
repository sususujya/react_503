import { useState } from "react";

const ToggleClass = () => {
    const [toggle, setToggle] = useState(false);
    const toggleTF = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div className={toggle ? 'on' : ''}>TG</div>
            <div onClick={toggleTF}>Toggle</div>
        </>

    )
}

export default ToggleClass; 