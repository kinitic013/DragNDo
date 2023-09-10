import {combineReducers} from 'redux'
import {handleBlogList} from "./reducer";

export default combineReducers({
    blog : handleBlogList
}) 