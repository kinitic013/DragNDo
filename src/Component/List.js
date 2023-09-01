import {ListItem} from "./ListItem"
import {List1} from "../Data/List1"
import { useState } from "react";
import { InputItem } from "./InputItem";

function List(props)
{

    const [List , setList] = useState(List1);

    function handleAdd(newElement)
    {
        const newArray = [...List];
        newArray.push({task : newElement , id : newElement , key : newElement});
        setList(newArray);
        console.log("New Task Added ");
        console.log(List);
    }
    function handleDelete(id)
    {
        console.log(id);
        console.log("Delete got Clicked");
        setList((prev)=>
        {
            return prev.filter((value)=>
            {
                if(value.key!== id)
                {
                    return value;
                }
            })
        })
    }
    function handleEdit(id)
    {
        console.log("edit got Clicked");
    }
    function handleSave(newElement , index)
    {
        const newArray = [...List];
        newArray[index] = {task : newElement , id : newElement , key : newElement};
        console.log(newArray);
        setList(newArray);
        console.log("Updated Task");
        console.log(List);
    }
    
    return (
        <div className="List">
            <div className="ListTitle">
                <h1>{props.title}</h1>
            </div>
            <div className="ListItemList">
                {List.map((value,index)=>
                {
                    return <ListItem item={value} index={index} task={value.task} onDelete={handleDelete} onEdit={handleEdit} onSave={handleSave} id={value.id} key={value.key} />;
                })}
            </div>
            <div>
                <InputItem onAdd={handleAdd} />
            </div>
        </div>

    )
}
export {List};