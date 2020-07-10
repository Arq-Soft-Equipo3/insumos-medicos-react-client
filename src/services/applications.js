const options = {
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
  method: 'POST',
};

const submitApplication = (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications`, {
  ...options,
  body,
});

const list = () => fetch(`${process.env.REACT_APP_API_HOST}/applications`, {
  ...options,
  method: 'GET',
});

const cancel = (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications/cancel`, {
  ...options,
  body,
});

const approve = (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications/approve`, {
  ...options,
  body,
});

const reject = (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications/reject`, {
  ...options,
  body,
});

export {
  submitApplication, list, cancel, approve, reject,
};
