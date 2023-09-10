import { useEffect, useState } from "react";
import { Flex} from '@chakra-ui/react'
import {List1} from "../Data/List1"
import {ChildList} from "./ChildList"
import {Pending , InProgress} from "../constants"
import { useDispatch, useSelector } from "react-redux";

function ParentList(props)
{
    // const List = useSelector(store=>store.blog.bloglist);
    // const dispatch=useDispatch();// dispatch or action caller
    // const [List , setList] = useState(List1);
    // function handleAdd(id ,newElement , type)
    // {
    //     console.log("Reached HandleAdd");
    //     setList((prev)=>
    //     {
    //         return [...prev , {task : newElement , type : type , id : id , key : id }];
    //     })
    // }
    // function handleDelete(id)
    // {
    //     console.log("Delete got Clicked");
    //     setList((prev)=>
    //     {
    //         return prev.filter(value => { return (value.id !== id);});
    //     })
    // }
    // function handleSave(id , newElement)
    // {
    //     setList((prev)=>
    //     {
    //         return prev.map((value)=>
    //         {
    //             if(value.id === id)
    //             {
    //                 return {...value , task : newElement};
    //             }
    //             else
    //             {
    //                 return value;
    //             }
    //         })
    //     })
    // }
    // function handleStatusChange(item , toStatus)
    // {
    //     console.log("Status Changin ....");
    //     console.log(item);
    //     setList(prevState => {
    //         const newItems = prevState
    //             .filter(i => i.id !== item.id)
    //             .concat({ ...item , type : toStatus});
    //         return [ ...newItems ];
    //     });

    //         // return prev.map(value => {
    //         //     if (value.id === item.id) {
    //         //         console.log("Reaciing heere" , value , id , toStatus);
    //         //         return { task : value.task , type : toStatus , id : id , key : id };
    //         //     }
    //         //     else 
    //         //     {
    //         //         return value;
    //         //     }
    //         // })
    //     // });
    // }    
    //////////////////////////////////////////////////////////////
    // useEffect(() => console.log("UPDATED" , List), [List]);     
    //////////////////////////////////////////////////////////////

    

    return (
        <Flex >
            <ChildList status={Pending}/>
            <ChildList status={InProgress}/>
        </Flex>
    )
}
export {ParentList};