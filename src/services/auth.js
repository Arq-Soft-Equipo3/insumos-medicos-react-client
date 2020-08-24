import split from 'lodash.split';
import negate from 'lodash.negate';

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

const isGuest = negate(isAuthenticated);

const logout = () => localStorage.removeItem('token');

const jwtPayload = () => {
  const jwt = localStorage.getItem('token');
  const payload = split(jwt, '.')[1];
  return JSON.parse(atob(payload));
};

const isAdmin = () => isAuthenticated() && jwtPayload().role === 'administrator';
const isUser = () => isAuthenticated() && jwtPayload().role === 'user';

export {
  logIn, signUp, isAuthenticated, logout, isAdmin, isUser, isGuest,
};
