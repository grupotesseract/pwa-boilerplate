import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './FormLogin.scss';

const FormLogin = () => {

  const onFinish = (values: {
    username: string;
    password: string;
  }) => {
    console.log('Valores recebidos no formulario:', values);
  };

  return (
    <div className='form-container'>
      <Form name='login' className='form-login' onFinish={onFinish}>
        <Form.Item
          name='usuario'
          rules={[{ required: true, message: 'Informe seu usuário!' }]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Usuário'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Informe uma senha' }]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <a className='login-form-forgot' href='/recuperarsenha'>
            Esqueci minha senha
          </a>
        </Form.Item>

        <Form.Item>
          <a href='/cadastrar'>cadastre-se</a>
          &nbsp;ou&nbsp;
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Entre
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;
