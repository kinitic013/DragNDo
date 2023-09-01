import { useState } from "react";

function InputItem(props)
{
    const [value,setValue] = useState("");
    function handleChange(event)
    {
        setValue(event.target.value);
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        props.onAdd(value);
        setValue("");
    }
    return (
        <form>
            <input type="text" value={value} onChange={handleChange}/> 
            <button type="submit" onClick={handleSubmit}>+</button> 
        </form>
    )
}

export {InputItem}