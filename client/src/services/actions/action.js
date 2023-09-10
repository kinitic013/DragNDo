import {add , remove , update , status} from "../constants"

export function create(newBlog)
{
    return { type : add , payload : newBlog };   
};
export function erase(id)
{
    return { type : remove , payload : {id : id} };
}
export function edit(id , newTask)
{
    return { type : update , payload : {id : id , newTask : newTask}};
}
export function statusUpdate(id , newStatus)
{
    return { type : status, payload : { id : id , newStatus : newStatus} };
}
