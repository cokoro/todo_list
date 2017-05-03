import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo';
import { getTodoList } from '../redux/todoList';
import { createTodoItem } from '../redux/createTodoItem';
class AddTodoContainer extends Component {
    createTodo = (todoItem, successCallback) => {
        const { createTodoItem } = this.props;
        var callback = () => {
            this.props.getTodoList();
            successCallback();
        }
        createTodoItem(todoItem, callback);
    }
    render() {
        return (
            <div>
                <AddTodo 
                    createTodo={this.createTodo}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getTodoList,
        createTodoItem,
    }, dispatch)
}
export default connect(
    undefined, mapDispatchToProps
)(AddTodoContainer);