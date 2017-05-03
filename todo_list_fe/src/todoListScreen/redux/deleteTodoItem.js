import { CALL_API } from 'redux-api-middleware';

import api from '../constants/api';
//types
export const PUT_REQUEST = 'deleteTodoItem/REQUEST';
export const PUT_SUCCESS = 'deleteTodoItem/SUCCESS';
export const PUT_FAIL = 'deleteTodoItem/FAIL';

//actions
export const deleteTodoItemStatus = (record, successCallback) => (dispatch) => {
    dispatch({
        [CALL_API]: {//call_api: https://www.npmjs.com/package/redux-api-middleware
            endpoint: `${api.TodoList}` + record.id + '/',
            method: 'DELETE',
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