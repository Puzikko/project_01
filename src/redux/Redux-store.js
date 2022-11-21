import { combineReducers, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./ProfileReducer";
import { dialogReducer } from "./DialogReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
});

let store = createStore(reducers);

export default store;