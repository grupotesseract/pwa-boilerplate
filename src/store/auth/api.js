import Api from "../Api";

export const signInUser = ({ email, password }) =>
  Api.post('login', {
    email,
    password,
  });

export const esqueciSenha = ({ email }) =>
  Api.post('esqueci-senha', {
    email,
  });
