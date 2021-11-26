import React, { useState } from 'react';
import { Reducer } from 'react';
import { Effect } from 'dva';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import styles from '../../layouts/index.css';

const AddCompont: React.FC = ({
  props,
  form,
  handleSubmit,
  handleConfirmBlur,
  compareToFirstPassword,
  validateToNextPassword,
  handleWebsiteChange,
}: any) => {
  const [confirmDirty, setConfirmDirty] = useState(false);
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const { getFieldDecorator } = form;
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;

  // 表单使用
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll(({ err, values }: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };

  compareToFirstPassword = ({ rule, value, callback }: any) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = ({ rule, value, callback }: any) => {
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    setAutoCompleteResult(autoCompleteResult);
  };
  return (
    <>
      <div className="styles.normal">
        <h1>请在此处开始数据录入</h1>
        <Form {...formItemLayout} onSubmit={handleSubmit}>
          <Form.Item label="name">
            {getFieldDecorator('name', {
              rules: [
                {
                  type: 'name',
                  message: 'The input is not valid name!',
                },
                {
                  required: true,
                  message: 'Please input your name',
                },
              ],
            })(<Input />)}
          </Form.Item>

          <Form.Item label="age">
            {getFieldDecorator('age', {
              rules: [
                {
                  type: 'age',
                  message: 'The input is not valid age!',
                },
                {
                  required: true,
                  message: 'Please input your name',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="adress">
            {getFieldDecorator('age', {
              rules: [
                {
                  type: 'age',
                  message: 'The input is not valid age!',
                },
                {
                  required: true,
                  message: 'Please input your name',
                },
              ],
            })(<Input />)}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                I have read the{' '}
                <a href="https://cn.bing.com/" target="_blank">
                  agreement
                </a>
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

const Add = Form.create({})(AddCompont);
export default Add;

{
  /* 机器验证：最后做该项
          <Form.Item label="Captcha" extra="We must make sure that your are a human.">
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(<Input />)}
              </Col>
              <Col span={12}>
                <Button>Get captcha</Button>
              </Col>
            </Row>
          </Form.Item> */
}
