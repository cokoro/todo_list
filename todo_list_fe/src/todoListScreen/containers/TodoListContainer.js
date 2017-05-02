import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectors } from '../reducers';
import { Spin } from 'antd';
//import { hashHistory } from 'react-router';
import TodoList from '../components/TodoList';
import { getTodoList } from '../redux/todoList';

class TodoListContainer extends React.Component {
    componentDidMount() {
        this.props.getTodoList();
    }
    render() {
        const {
            todoList
        } = this.props;
        return (
            <div>
                <Spin spinning={todoList.loading} tip='loading...' size='large'>>
                    <TodoList
                        todoList={todoList.entry}
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
    }, dispatch)
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(TodoListContainer);