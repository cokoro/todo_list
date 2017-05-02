import { CALL_API } from 'redux-api-middleware';
import { combineReducers } from 'redux';
import api from '../constants/api';

export const GET_REQUEST = 'todoItem/get/REQUEST';
export const GET_SUCCESS = 'todoItem/get/SUCCESS';
export const GET_FAIL = 'todoItem/get/FAIL';

const todoListInitial = {
    loading: false,
    entry: [],
    error: null,
}
//reducers
const todoList = ( state = todoListInitial, action) => {
    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                entry: action.payload,
            };
        case GET_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default todoList;

//selectors
export const todoListSelector = (state) => {
    return {
        entry: state.entry,
        loading: state.loading,
    }
}

export const getTodoList = (data) => (dispatch, getState) => {
    dispatch({
        [CALL_API]: {
            endpoint: `${api.TodoList}`,
            method: 'GET',
            //credentials: 'same-origin',
            types: [
                GET_REQUEST,
                {
                    type: GET_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json().then(data => {
                            return data;
                        })
                    }
                },
                {
                    type: GET_FAIL,
                    payload: (action, state, res) => {
                        return res.json().then(data => {
                            console.log('error: ', data.error);
                            return data.error;
                        })
                    }
                }
            ]
        }
    })
}