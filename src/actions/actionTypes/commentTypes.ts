import { ISingleComment } from "../../Entities/comments";

export const GET_COMMENTS = 'GET_COMMENTS';
export const PUSH_DATA = 'PUSH_DATA';

export interface ICommentTypes {
    GET_COMMENTS: {
        commentsList: ISingleComment[];
    };
    PUSH_DATA: {
        someData: string;
    }
}