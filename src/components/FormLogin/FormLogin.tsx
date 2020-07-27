import React, { useState } from 'react';
import { Button, TextField, CircularProgress } from '@material-ui/core';
// import * as ProdutosActions from "../store/produtos/actions";
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

const FormLogin = () => {
  const error = '';
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const authLogin = async () => {
    setLoading(true);
    // signIn({
    //   email,
    //   password,
    // });
  };

  const handleKeyPress = (keyString: string) => {
    if (keyString === 'Enter') {
      authLogin();
    }
  };

  return (
    <>
      <TextField
        error={!!error}
        id='email'
        label='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e.key)}
      />
      <TextField
        error={!!error}
        type='password'
        id='senha'
        label='Senha'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e.key)}
      />
      <Button color='primary' onClick={() => authLogin()}>
        {loading ? <CircularProgress color='primary' size={28} /> : 'Entrar'}
      </Button>
    </>
  );
};

export default FormLogin;

// function mapStateToProps(state) {
//   const { produtos } = state;
//   return {
//     filtroProdutos: produtos.filtroProdutos,
//   };
// }

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(ProdutosActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
