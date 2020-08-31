import { useEffect, useReducer, useState } from 'react';
import { list } from '../services/applications';
import { verifySession } from '../helpers';

const FETCHED = 'fetched';
export const APPROVE = 'approve';
export const REJECT = 'reject';
export const CANCEL = 'cancel';

const reducer = (state, action) => {
  switch (action.type) {
    case FETCHED: {
      const { payload: { applications } } = action;
      return [...applications];
    }
    case APPROVE: {
      const { payload: { id, provider } } = action;
      return state.map((application) => (application.applicationID.S === id
        ? { ...application, status: { S: 'Approved' }, provider: { S: provider } }
        : application));
    }
    case REJECT: {
      const { payload: { id, motive } } = action;
      return state.map((application) => (application.applicationID.S === id
        ? { ...application, status: { S: 'Rejected' }, motive: { S: motive } }
        : application));
    }
    case CANCEL: {
      const { payload: { id } } = action;
      return state.map((application) => (application.applicationID.S === id
        ? { ...application, status: { S: 'Canceled' } }
        : application));
    }
    default:
      throw new Error('Unsupported action type');
  }
};

const useApplications = () => {
  const [applications, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    list()
      .then(verifySession)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Something went wrong.');
      })
      .then((data) => (dispatch({ type: FETCHED, payload: { applications: data } })))
      .catch(console.log)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [applications, dispatch, isLoading];
};

export default useApplications;
