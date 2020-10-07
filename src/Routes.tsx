import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MinhaConta from './pages/MinhaConta';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Sobre from './pages/Sobre';
import Cadastro from './pages/Cadastro'
// import { connect } from 'react-redux';

const Routes = ({
  auth: { isSignedIn },
}: {
  auth: { isSignedIn: boolean };
}) => (
  <Switch>
    <PrivateRoute auth={isSignedIn} path='/minhaconta'>
      <MinhaConta />
    </PrivateRoute>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/cadastrar' component={Cadastro} />
    <Route path='/sobre' component={Sobre} />
    <Route path='*' component={Home} />
  </Switch>
);


// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

export default Routes;
// export default connect(mapStateToProps)(Routes);
