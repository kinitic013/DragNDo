import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useDrag} from 'react-dnd'
import {edit , erase } from "../services/actions/action"
import { useDispatch, useSelector } from "react-redux";
import { update } from "../services/constants";
function ListItem(props)
{
    const dispatch=useDispatch();// dispatch or action caller
    /////////////////////////////////////////////////////
    const [nonEditable , setEditable] = useState(true);
    const [type , setType] = useState("EDIT");
    const [task , setTask] = useState(props.task);

    function handleClickEdit()
    {
        if(!nonEditable)
        {
            setEditable(true);
            setType("EDIT");
            dispatch(edit(props.id , task));
        }
        else
        {
            setEditable(false);
            setType("SAVE");
        }

    }
    function handleClickDelete()
    {
        dispatch(erase(props.id))
    }
    function handleChange(event)
    {
        setTask(event.target.value);
    }
    /////////////////////////////////////////////////////
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "TASK",
        item : { task : props.task , id : props.id , type : props.type  , key : props.id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
    //////////////////////////////////////////////////////////////
    // useEffect(() => console.log("DRAGGED" , props.value), [isDragging]);     
    //////////////////////////////////////////////////////////////
    return (
        <Card  ref={drag} opacity={isDragging ? 0.5 : 1}  backgroundColor ={isDragging ? "red" : "" } className="ListItem" >
            <CardHeader>
            <input disabled={nonEditable} className="ListTask" value={task} onChange={handleChange} />
            </CardHeader>
            <CardBody >
                <input disabled={nonEditable} className="ListTask" value={task} onChange={handleChange} />
            </CardBody>
            <CardFooter>
                <button onClick={handleClickEdit}>{type}</button>
                <button onClick={handleClickDelete}>DELETE</button>
            </CardFooter>
        </Card>
    );
}
export {ListItem};