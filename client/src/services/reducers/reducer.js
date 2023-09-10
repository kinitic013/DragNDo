import {add , remove , update , status} from "../constants"
import {List1} from "../../Data/List1";
import {produce} from "immer"

function handleBlogList( state = { list : List1} , action )
{
    switch(action.type){
        case add :
            {
                const val = produce(state.list,(draft)=>{
                    draft.push(action.payload);
                });
                return { list : val};
            }
        case remove :
            {
                const val = state.list.filter((value)=> value.id !== action.payload.id);
                return { list : val };
            }
        case update :
            {
                const val = produce(state.list, (draft)=>{
                    const element = draft.find((val)=>val.id === action.payload.id);
                    element.task = action.payload.newTask;
                    });
                return { list : val };
            }
        case status :
            {
                const val = produce(state.list, (draft)=>{
                    const element = draft.find((val)=>val.id === action.payload.id);
                    element.type = action.payload.newStatus;
                    });
                return { list : val };
            }
        default:
            return state
    }
}

export {handleBlogList};