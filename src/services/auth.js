const logIn = (body) => {
    return fetch(`${process.env.REACT_APP_API_HOST}/user/login`, {
      method: 'POST',
      body,
      headers: { 'Content-Type': 'application/json' }
    });
};

const signUp = (body) => {
  return fetch(`${process.env.REACT_APP_API_HOST}/user/signup`, {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/json' }});
};

export { logIn, signUp };
