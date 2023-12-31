import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/authSlice';
const Navbar = () => {
  // Setup conditional rendering on navbar item
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };
  return (
    <>
      <header className="flex justify-between items-center container  py-5 px-10 border-b border-black">
        <h1 className="text-bold text-black font-extrabold text-lg">
          GeoEntry
        </h1>
        <nav>
          <ul className="list-none flex items-center justify-around gap-6">
            <li className="px-4 py-2 hover:border-b-2 border-black">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-2 hover:border-b-2 border-black">
              <Link to="/entries">Entries</Link>
            </li>
            {!user ? (
              <li className="px-4 py-3 bg-black text-slate-200 rounded-full border hover:text-gray-800 hover:bg-white hover:border-gray-800 hover:border">
                <Link to="/auth"> Sign up/Login</Link>
              </li>
            ) : (
              <li className="px-4 py-3 bg-black text-slate-200 rounded-full border hover:text-gray-800 hover:bg-white hover:border-gray-800 hover:border">
                <button onClick={onLogout}>Sign out</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
