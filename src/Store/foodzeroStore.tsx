import { legacy_createStore as createStore } from 'redux'


import { blogList } from "../Components/CommonComponents/bloglist";
import { comments } from "../Components/CommonComponents/commentlist";
import { menuCategory } from '../Components/Home/menuCategory';

const storeData = {
    "blogData": blogList,
    "commentData": comments,
    "menuCategoryData": menuCategory
}

const initialState = storeData;

const storeDataReducer = (state = initialState) => {
    return state;
}

const store = createStore(storeDataReducer);
export default store;