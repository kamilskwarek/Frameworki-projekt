import { Dispatch } from "redux";
import * as actionTypes from '../actions/actionTypes/commentTypes';
import { ISingleComment } from "../Entities/comments";

export const getComments = (): Promise<ISingleComment[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((commentsList: ISingleComment[]) => {
            dispatch({
                type: actionTypes.GET_COMMENTS,
                commentsList
            })
        })
}) as any;

export const getSomeData = (someData: string): Promise<ISingleComment[]> => ((dispatch: Dispatch) => {

    dispatch({
        type: actionTypes.PUSH_DATA,
        someData
    })
}) as any;