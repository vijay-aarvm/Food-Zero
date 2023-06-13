import { legacy_createStore as createStore } from 'redux'


import { blogList } from "../Components/CommonComponents/bloglist";
import { comments } from "../Components/CommonComponents/commentlist"

const storeData = {
    "blogData": blogList,
    "commentData": comments
}

const initialState = storeData;

const storeDataReducer = (state = initialState) => {
    return state;
}

const store = createStore(storeDataReducer);
export default store;