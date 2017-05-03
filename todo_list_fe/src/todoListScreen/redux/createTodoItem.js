import { CALL_API } from 'redux-api-middleware';

import api from '../constants/api';
//types
export const POST_REQUEST = 'createTodoItem/REQUEST';
export const POST_SUCCESS = 'createTodoItem/SUCCESS';
export const POST_FAIL = 'createTodoItem/FAIL';

//actions
export const createTodoItem = (record, successCallback) => (dispatch) => {
    dispatch({
        [CALL_API]: {
            endpoint: `${api.TodoList}`,
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(record),
            types: [
                POST_REQUEST,
                {
                    type: POST_SUCCESS,
                    payload: (action, state, res) => {
                        successCallback();
                    }
                },
                {
                    type: POST_FAIL,
                    payload: (action, state, res) => {
                        console.log(res);   
                    }
                }
            ]
         }
    })
}