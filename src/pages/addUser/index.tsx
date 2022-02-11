import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { nanoid } from 'nanoid';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const testInformation = {
  modelFirst: {
    date: '000',
    note: 'Good!',
    warm: 100,
  },

  modelSecond: {
    date: '000',
    note: 'yes',
    warm: 'happy',
  },
};

const AddUser: React.FC = () => {
  const [form] = Form.useForm();
  const dateTime = new Date();
  const names = ['reference', 'first', 'second'];
  const onGenderChange = (value: string) => {  //value是可选的模板名称
    // 根据不同的键，放入不同的内容.找到主键名，根据主键进行赋值
// 问题在于：当下选择的主键名并不是规定的那几个
    for(let key in testInformation){
      switch (key){
        case `${key}`://case后面的内容是模板选项
          form.setFieldsValue({ date: testInformation[`${key}`].date });
          form.setFieldsValue({ note: testInformation[`${key}`].note});
          form.setFieldsValue({ warm: testInformation[`${key}`].warm });
          return;
      }
    }
    // switch (value) {
    //   case 'first':
    //     form.setFieldsValue({ date: `${dateTime.getHours()}` });
    //     form.setFieldsValue({ note: 'Thank' });
    //     form.setFieldsValue({ warm: '100!' });
    //     return;
    //   case 'second':
    //     form.setFieldsValue({ date: `${dateTime.getHours()}` });
    //     form.setFieldsValue({ note: 'You' });
    //     form.setFieldsValue({ warm: '200!' });
    //     return;
    //   case 'reference':
    //     form.setFieldsValue({ date: `${dateTime.getHours()}` });
    //     form.setFieldsValue({ note: '' });
    //     form.setFieldsValue({ warm: '' });
    // }

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
    if (formInfo.note && formInfo.date) {
      console.log(formInfo);
    } else {
      alert('请将带星号的必填信息补充完整！');
    }
  };

  return (
    <>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        {/* 选择列表 */}
        <Form.Item name="gender" label="参考板号" rules={[{ required: true }]}>
          <Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear>
            {names.map(item => {
              return (
                <Option value={`${item}`} key={nanoid()}>
                  {item}
                </Option>
              );
            })}
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
