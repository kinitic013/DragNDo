import { useState } from "react";
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Card,CardBody} from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid';
import {Pending , InProgress} from "../constants"
import { useDispatch, useSelector } from "react-redux";
import {create} from "../services/actions/action";

function InputItem(props)
{

  const dispatch=useDispatch();// dispatch or action caller
    //////////////////////////////////////////////////
    const [value,setValue] = useState("");
    function handleChange(event)
    {
        setValue(event.target.value);
    }
    function handleSubmit(event) {
      const newId = uuidv4();
      event.preventDefault();
      const newTask = {
        task: value,
        type: props.type,
        id: newId,
        key: newId,
      };
      dispatch(create(newTask));
      // props.onAdd( uuidv4() , value , props.type);
      setValue("");
    }
    /////////////////////////////////////////////////////

    return (
      <Card id={props.id}>
        <CardBody >
          <form>
            <Input placeholder='New Task???' type="text" value={value} onChange={handleChange} size='md' />
            <Button type="submit" onClick={handleSubmit} colorScheme='purple' variant='outline'>
              +
            </Button>
          </form>
        </CardBody>
      </Card>

    )
}

export {InputItem}