import { useState } from "react";

function ListItem(props)
{
    const [nonEditable , setEditable] = useState(true);
    const [type , setType] = useState("EDIT");
    const [task , setTask] = useState(props.task);
    function handleClickEdit()
    {
        if(!nonEditable)
        {
            setEditable(true);
            setType("EDIT");
            props.onSave(task,props.index);
        }
        else
        {
            setEditable(false);
            setType("SAVE");
        }
        // props.onEdit(props.id);
    }
    function handleClickDelete()
    {
        props.onDelete(props.id);
    }
    function handleChange(event)
    {
        setTask(event.target.value);
    }
    return (
        <div className="ListItem" >
            <input disabled={nonEditable} className="ListTask" value={task} onChange={handleChange} />
            <button onClick={handleClickEdit}>{type}</button>
            <button onClick={handleClickDelete}>DELETE</button>
        </div>
    );
}
export {ListItem};