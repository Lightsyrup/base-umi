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

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'first':
        form.setFieldsValue({ note: 'Hi, man!' });
        form.setFieldsValue({ warm: '100!' });
        return;
      case 'second':
        form.setFieldsValue({ note: 'Hi, lady!' });
        form.setFieldsValue({ warm: '200!' });
        return;
      case 'other':
        form.setFieldsValue({ note: '' });
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

  return (
    <>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}> 
        <Form.Item name="gender" label="参考型号" rules={[{ required: true }]}>
            {/* 历史记录 */}
          <Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear>
              {/* 需要将选择的值转换成历史编号，进行循环输出 */}
            <Option value="first">first</Option>
            <Option value="second">second</Option>
            <Option value="other">不使用历史记录</Option>
          </Select>
        </Form.Item>
        <Form.Item name="note" label="型号" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="warm" label="温度" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        {/* 当选项为“other”的时候 */}
        <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}>
          {({ getFieldValue }) =>
            getFieldValue('gender') === 'other' ? (
              <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        {/* 表格操作 */}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
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
