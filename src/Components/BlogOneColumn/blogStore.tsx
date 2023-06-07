import { legacy_createStore as createStore } from 'redux'


import { blogList } from "./bloglist";

const initialState = blogList;

const blogReducer = (state = initialState) => {
    return state;
}

const store = createStore(blogReducer);
export default store;