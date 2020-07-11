import React from 'react';
import Navbar from '../components/Navbar';
import { isAdmin } from '../services/auth';
import AdminHome from './AdminHome';
import UserHome from './UserHome';

const Home = () => (
  <>
    <Navbar />
    { isAdmin()
      ? <AdminHome />
      : <UserHome /> }
  </>
);

export default Home;
