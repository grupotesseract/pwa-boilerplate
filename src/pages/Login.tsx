import React from 'react';
import { Paper } from '@material-ui/core';
import FormLogin from '../components/FormLogin/FormLogin';

const Login = () => {

    return (
      <Paper style={{
        flexDirection: 'column',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <FormLogin />
      </Paper>
    );
}

export default Login;
