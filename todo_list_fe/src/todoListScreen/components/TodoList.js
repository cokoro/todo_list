import React, { Component } from 'react';
import { Table } from 'antd';

const transformTodoListData = (data = []) => {
    return data.map((ent, idx) => {
        return {
            ...ent,
            key: idx,
        }
    }).sort((a, b) => {
        return b.id - a.id
    })
}

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'ID',
                dataIndex: 'id', 
                key: 'id',
            }, {
                title: '标题',
                dataIndex: 'title',
                key: 'title',
            }, {
                title: '完成',
                dataIndex: 'check',
                key: 'check',
            }, {
                title: '最后期限',
                dataIndex: 'deadline',
                key: 'deadline',
            },
        ]
    }
    render() {
        const {todoList} = this.props;
        
        const todoListDataSource = transformTodoListData(todoList);

        return (
            <Table
                rowClassName={() => 'todo-list-row'}
                dataSource={todoListDataSource}
                columns={this.columns}
            />
        );
    }
}

export default TodoList