import React, { Component } from 'react';
import { Table, Checkbox } from 'antd';

const transformTodoListData = (data = []) => {
    return data.map((ent, idx) => {
        return {
            ...ent,
            key: idx,
        }
    }).sort((a, b) => {
        return a.id - b.id
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
                render: (text, record) => (
                    <Checkbox checked={text} onChange={(e) => {
                        e.stopPropagation();
                        this.props.updateCheckStatus(record);
                    }} />
                ),
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