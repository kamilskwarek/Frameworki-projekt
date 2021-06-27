import { ISingleComment } from '../Entities/comments';
import * as actionTypes from '../actions/actionTypes/commentTypes';

export interface ICommentsReducer {
    commentsList: ISingleComment[];
    someData: string;
}

const defaultState = (): ICommentsReducer => ({
    commentsList: [],
    someData: 'Ala ma ktoa'
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {

        case actionTypes.GET_COMMENTS: {
            const data: actionTypes.ICommentTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                commentsList: data.commentsList
            }
        }
        case actionTypes.PUSH_DATA: {
            const data: actionTypes.ICommentTypes['PUSH_DATA'] = action;
            return {
                ...state,
                someData: data.someData
            }
        }
        default: {
            return state
        }
    }
}