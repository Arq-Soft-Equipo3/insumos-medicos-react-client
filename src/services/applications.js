const submitApplication = async (body) => {
    return fetch(`${process.env.REACT_APP_API_HOST}/applications`, {
        method: 'POST',
        body,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
};

const list = () => fetch(`${process.env.REACT_APP_API_HOST}/applications`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` }
});

export { submitApplication, list };
