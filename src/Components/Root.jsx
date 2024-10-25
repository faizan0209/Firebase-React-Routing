import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

function Root() {
  return (
    <div>
      <Nav />
      <Outlet /> {/* This will render the child routes like Login */}
      <Footer />
    </div>
  );
}

export default Root;
