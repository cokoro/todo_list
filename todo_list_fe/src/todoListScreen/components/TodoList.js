import React, { Component } from 'react';
import { Table, Checkbox,Button, Input, InputNumber, DatePicker } from 'antd';

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
                sorter: (a, b) => a.title.length - b.title.length,
            }, {
                title: '内容',
                dataIndex: 'content',
                key: 'content',
                render: (text, record) => (
                    <Input defaultValue={text} onPressEnter={(e) => {
                        e.stopPropagation();
                        this.props.updateContent(record, e.target.value);
                    }} />
                ),
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
                sorter: (a, b) => a.deadline.localeCompare(b.deadline),
                //render: (text, record) => (
                  //  <DatePicker defaultValue={text} onChange={(value) => {
                        
                  //  }} />
                //),
                //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?v=control
                //from table components:https://ant.design/components/table-cn/#components-table-demo-reset-filter
            }, {
                title: '优先级',
                dataIndex: 'priority',
                key: 'priority',
                sorter: (a, b) => a.priority - b.priority,
                render: (text, record) => (
                    <InputNumber min={1} max={5} defaultValue={text} onChange={(value) => {
                        this.props.updatepriority(record, value);
                    }} />
                ),
            },{
                title: 'Delete',
                key: 'delete',
                render:(text, record) => (
                    <Button type="danger" onClick={(e) => {
                        e.stopPropagation();
                        this.props.deleteCheckStatus(record);
                }} >Delete</Button>
                ),
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