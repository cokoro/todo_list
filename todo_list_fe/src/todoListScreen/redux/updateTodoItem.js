import { CALL_API } from 'redux-api-middleware';

import api from '../constants/api';
//types
export const REQUEST = 'checkTodoItem/REQUEST';
export const SUCCESS = 'checkTodoItem/SUCCESS';
export const FAIL = 'checkTodoItem/FAIL';

//actions
export const updateTodoItemStatus = (record, successCallback) => (dispatch) => {
    dispatch({
        [CALL_API]: {
            endpoint: `${api.TodoList}` + record.id,
            method: 'PUT',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(record),
            types: [
                REQUEST,
                {
                    type: SUCCESS,
                    payload: (action, state, res) => {
                        successCallback();
                    }
                },
                {
                    type: FAIL,
                    payload: (action, state, res) => {
                        console.log(res);   
                    }
                }
            ]
         }
    })
}