import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {ParentList} from "./ParentList";
function App()
{
    return (
        <DndProvider backend={HTML5Backend}>
            <ParentList />
        </DndProvider>
    );
}

export {App}