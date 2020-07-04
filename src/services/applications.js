const submitApplication = async (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  body,
});

const list = () => fetch(`${process.env.REACT_APP_API_HOST}/applications`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
});

const cancel = (body) => fetch(`${process.env.REACT_APP_API_HOST}/applications/cancel`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
  body,
});

export { submitApplication, list, cancel };
