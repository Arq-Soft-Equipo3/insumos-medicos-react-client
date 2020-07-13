const submitApplication = (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications`, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  method: 'POST',
  body,
});

const list = () => fetch(`${process.env.REACT_APP_API_HOST}/applications`, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  method: 'GET',
});

const cancel = (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications/cancel`, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  method: 'POST',
  body,
});

const approve = (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications/approve`, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  method: 'POST',
  body,
});

const reject = (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications/reject`, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  method: 'POST',
  body,
});

export {
  submitApplication, list, cancel, approve, reject,
};
