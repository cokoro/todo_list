import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectors } from '../reducers';
import { Spin } from 'antd';
//import { hashHistory } from 'react-router';
import TodoList from '../components/TodoList';
import { getTodoList } from '../redux/todoList';
import { updateTodoItemStatus } from '../redux/updateTodoItem';
import { deleteTodoItemStatus } from '../redux/deleteTodoItem';

class TodoListContainer extends React.Component {
    componentDidMount() {
        this.props.getTodoList();
    }
    updateStatus = (record) => {
        const { updateTodoItemStatus } = this.props;
        updateTodoItemStatus(record, this.props.getTodoList);
    }
    updateCheckStatus = (record) => {
        record.check = !record.check;
        this.updateStatus(record);
    }

    deleteStatus = (record) => {
        const { deleteTodoItemStatus } = this.props;
        deleteTodoItemStatus(record, this.props.getTodoList);
    }
    deleteCheckStatus = (record) => {
        
        this.deleteStatus(record);
    }

    render() {
        const {
            todoList
        } = this.props;
        return (
            <div>
                <Spin spinning={todoList.loading} tip='loading...' size='large'>
                    <TodoList
                        todoList={todoList.entry}
                        updateCheckStatus={this.updateCheckStatus}
                        deleteCheckStatus={this.deleteCheckStatus}
                    />
                </Spin>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todoList: selectors.getTodoList(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getTodoList,
        updateTodoItemStatus,
        deleteTodoItemStatus,
    }, dispatch)
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(TodoListContainer);