import { combineReducers } from "redux";

import users, { IUsersReducer } from './usersReducers';
import comments, { ICommentsReducer } from './commentsReducers';

export default combineReducers({
    users,
    comments
})

export interface IState {
    users: IUsersReducer;
    comments: ICommentsReducer;
}