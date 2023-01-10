import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./ProfileReducer";
import { dialogReducer } from "./DialogReducer";
import { usersReducer } from "./UserReducer";
import { authReducer } from "./AuthReducer";
import { newsReducer } from "./NewsReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    auth: authReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store

export default store;