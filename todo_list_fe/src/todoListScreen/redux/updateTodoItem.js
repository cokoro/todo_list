import { CALL_API } from 'redux-api-middleware';

import api from '../constants/api';
//types
export const PUT_REQUEST = 'updateTodoItem/REQUEST';
export const PUT_SUCCESS = 'updateTodoItem/SUCCESS';
export const PUT_FAIL = 'updateTodoItem/FAIL';

//actions
export const updateTodoItemStatus = (record, successCallback) => (dispatch) => {
    dispatch({
        [CALL_API]: {
            endpoint: `${api.TodoList}` + record.id + '/',
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(record),
            types: [
                PUT_REQUEST,
                {
                    type: PUT_SUCCESS,
                    payload: (action, state, res) => {
                        successCallback();
                    }
                },
                {
                    type: PUT_FAIL,
                    payload: (action, state, res) => {
                        console.log(res);   
                    }
                }
            ]
         }
    })
}