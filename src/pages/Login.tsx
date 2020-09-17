import React from 'react';
import FormLogin from '../components/FormLogin/FormLogin';
import { Layout } from 'antd';

const { Content } = Layout;

const Login = () => {

    return (
      <Content>
        <FormLogin />
      </Content>
    );
}

export default Login;
