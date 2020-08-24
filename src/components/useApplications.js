import { list } from '../services/applications';
import { verifySession } from '../helpers';

const { useEffect, useState } = require('react');

const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    list()
      .then(verifySession)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Something went wrong.');
      })
      .then((data) => (setApplications(data)))
      .catch(console.log)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [applications, setApplications, isLoading];
};

export default useApplications;
