const logIn = (body) => fetch(`${process.env.REACT_APP_API_HOST}/user/login`, {
  method: 'POST',
  body,
  headers: { 'Content-Type': 'application/json' },
});

const signUp = (body) => fetch(`${process.env.REACT_APP_API_HOST}/user/signup`, {
  method: 'POST',
  body,
  headers: { 'Content-Type': 'application/json' },
});

const isAuthenticated = () => !!localStorage.getItem('token');

const logout = () => localStorage.removeItem('token');

export {
  logIn, signUp, isAuthenticated, logout,
};
