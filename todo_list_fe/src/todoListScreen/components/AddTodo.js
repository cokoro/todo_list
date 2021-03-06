import React, { Component } from 'react';
import { Modal, Button, Form, Input, Checkbox, DatePicker, InputNumber} from 'antd';

const FormItem = Form.Item;

const TodoCreateForm = Form.create()(
    (props) => {
        const {visible, onCancel, onCreate, form, confirmLoading } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal title="Create a new Todo"
                visible={visible}
                onOk={onCreate}
                confirmLoading={confirmLoading}
                onCancel={onCancel}
                >
                <Form layout="vertical">
                    <FormItem label="Title">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input the title of Todo!'}],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="Content">
                        {getFieldDecorator('content')(<Input type="textarea" />)}
                    </FormItem>
                    <FormItem label="Is finish?">
                        {getFieldDecorator('check')(<Checkbox />)}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('deadline')(
                            <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder="Select Time"
                            ></DatePicker>
                        )}
                    </FormItem>
                    <FormItem label="priority">
                        {getFieldDecorator('priority')(<InputNumber min={1} max={5} />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

class AddTodo extends Component {
    state = {
        confirmLoading: false,
        visible: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleCreate = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', values);
            var todoItem = values;
            this.props.createTodo(todoItem, this.handleSuccess);
            form.resetField();

        })
        this.setState({
            confirmLoading: true,
        });
    }
    handleSuccess = () => {
        this.setState({
            confirmLoading: false,
            visible: false,
        });
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>New Todo</Button>
                <TodoCreateForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCreate={this.handleCreate}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                />
            </div>
        );
    }
}

export default AddTodo