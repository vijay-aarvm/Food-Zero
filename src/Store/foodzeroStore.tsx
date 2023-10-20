import { legacy_createStore as createStore } from 'redux'


import { blogList } from "./bloglist";
import { comments } from "./commentlist";
import { menuCategory } from './menuCategory';
import { blogContentList } from './blogContent';

const storeData = {
    "blogData": blogList,
    "commentData": comments,
    "menuCategoryData": menuCategory,
    "blogContent": blogContentList
}

const initialState = storeData;

const storeDataReducer = (state = initialState) => {
    return state;
}

const store = createStore(storeDataReducer);
export default store;