import { useState } from "react";

const ToggleClass = () => {
const [toggle, setToggle] = useState(false);
const toggleTF = () => {
    setToggle(!toggle)
}
    return (
        <div>
            Toggle
        </div>
    )
}

export default ToggleClass;