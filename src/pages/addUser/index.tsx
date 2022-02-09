import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddUser: React.FC = () => {
  const [form] = Form.useForm();
  const dateTime = new Date();
  const onGenderChange = (value: string) => {
    switch (value) {
      case 'first':
        form.setFieldsValue({ date: `${dateTime.getHours()}` });
        form.setFieldsValue({ note: 'Thank' });
        form.setFieldsValue({ warm: '100!' });
        return;
      case 'second':
        form.setFieldsValue({ date: `${dateTime.getHours()}` });
        form.setFieldsValue({ note: 'You' });
        form.setFieldsValue({ warm: '200!' });
        return;
      case 'reference':
        form.setFieldsValue({ date: `${dateTime.getHours()}` });
        form.setFieldsValue({ note: '' });
        form.setFieldsValue({ warm: '' });
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  const submitForm = () => {
    //   获取所有
    const formInfo = form.getFieldsValue(['note', 'date']);
    // 考虑为输入的情况，当带星号的信息都存在，才能提交。否则弹出提示
    if(formInfo.note&&formInfo.date){
        console.log(formInfo.note);
    }else{
        alert('请将带星号的必填信息补充完整！')
    }
  };

  return (
    <>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        {/* 选择列表 */}
        <Form.Item name="gender" label="参考板号" rules={[{ required: true }]}>
          <Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear>
            <Option value="reference">无参考</Option>
            <Option value="first">first</Option>
            <Option value="second">second</Option>
          </Select>
        </Form.Item>

        {/* 输入内容 */}
        <Form.Item name="date" label="入库时间" rules={[{ required: true }]}>
          <Input disabled />
        </Form.Item>
        <Form.Item name="note" label="板号" rules={[{ required: true }]}>
          <Input placeholder="请输入新建板号" />
        </Form.Item>
        <Form.Item name="warm" label="温度" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        {/* 表格操作 */}
        <Form.Item {...tailLayout}>
          <Button type="primary" onClick={submitForm}>
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddUser;
