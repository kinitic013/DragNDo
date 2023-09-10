import { ListItem } from "./ListItem";
import { InputItem } from "./InputItem";
import { Heading, List, Stack } from "@chakra-ui/react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { statusUpdate } from "../services/actions/action";

function ChildList(props) {
  const List = useSelector(store=>store.blog.list);
  const dispatch=useDispatch();// dispatch or action caller

  ///////////////////////////////////////////////////////////////////////
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item, monitor) => {
      if (item.type === props.status) {
        console.log("Dropped in the same Column");
        return;
      } 
      else {
        dispatch(statusUpdate(item.id , props.status));
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    ///////////////////////////////////////////////////////////////////////
  }));

  
  return (
    <Stack ref={drop} backgroundColor={isOver ? "yellow" : ""} className="List">
      <div className="ListTitle">
        <Heading as="h1" size="l" noOfLines={1}>
          {props.status}
        </Heading>
      </div>
      <div className="ListItemList">
        {
            List.filter((value) => {
            return value.type === props.status;
            
        }).map((value) => {
          return (
            <ListItem
              type={value.type}
              item={value}
              task={value.task}
              id={value.id}
            />
          );
        })}
      </div>
      <div>
        <InputItem 
            // onAdd={props.handleAdd} 
            type={props.status} />
      </div>
    </Stack>
  );
}
export { ChildList };
