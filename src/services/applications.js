const headers = () => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const submitApplication = (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications`, {
  ...headers(),
  method: 'POST',
  body,
});

const list = () => fetch(`${process.env.REACT_APP_API_HOST}/applications`, {
  ...headers(),
  method: 'GET',
});

const cancel = (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications/cancel`, {
  ...headers(),
  method: 'POST',
  body,
});

const approve = (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications/approve`, {
  ...headers(),
  method: 'POST',
  body,
});

const reject = (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications/reject`, {
  ...headers(),
  method: 'POST',
  body,
});

export {
  submitApplication, list, cancel, approve, reject,
};
