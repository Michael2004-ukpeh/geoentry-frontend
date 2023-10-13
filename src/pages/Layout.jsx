import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/auth') {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [pathname, navigate]);
  return (
    <>
      {showNav && <Navbar />}
      <main className="w-full relative ">{children}</main>
      {showNav && <Footer />}
    </>
  );
};

export default Layout;
