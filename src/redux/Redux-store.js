import { combineReducers, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./ProfileReducer";
import { dialogReducer } from "./DialogReducer";
import { usersReducer } from "./UserReducer";
import { authReducer } from "./AuthReducer";
import { newsReducer } from "./NewsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store

export default store;