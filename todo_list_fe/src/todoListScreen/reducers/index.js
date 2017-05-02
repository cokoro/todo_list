import { combineReducers } from 'redux';
import todoListReducer, * as todoList from '../redux/todoList';

export const selectors = {
    getTodoList: (state) => {
        return todoList.todoListSelector(state.todoList);
    }
}

export default combineReducers({
    todoList: todoListReducer
});