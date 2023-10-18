import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, login, reset } from '../features/authSlice';

import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const AuthForm = ({ switchMode, isLogin }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message, user } = useSelector(
    (store) => store.auth
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let userData = !isLogin
      ? {
          email,
          password,
        }
      : {
          firstName,
          lastName,
          email,
          password,
        };

    if (!isLogin) {
      dispatch(login(userData));
    } else {
      dispatch(register(userData));
    }
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  };
  const switchHandler = (e) => {
    e.preventDefault();
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    switchMode();
  };
  if (isLoading) {
    return <FaSpinner />;
  }
  return (
    <>
      <div className="mx-auto w-[70%] border-1 border-black py-4 px-6 shadow-lg border rounded-sm">
        <form className="w-full flex flex-col items-center justify-center ">
          {isLogin && (
            <div className="block w-full mb-3">
              <label className="block mb-1" htmlFor="firstName">
                First Name
              </label>
              <input
                className="w-full px-2 py-1 outline-none bg-transparent border-black border rounded-md focus:outline-none focus:bg-transparent "
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          )}
          {isLogin && (
            <div className="block w-full mb-3">
              <label className="block  mb-1" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="w-full px-2 py-1 outline-none bg-transparent border-black border rounded-md focus:outline-none focus:bg-transparent"
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          )}
          <div className="block w-full mb-3">
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-2 py-1 outline-none bg-transparent border-black border rounded-md focus:outline-none focus:bg-transparent"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="block w-full mb-3">
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-2 py-1 outline-none bg-transparent border-black border rounded-md focus:outline-none focus:bg-transparent"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={(e) => onSubmitHandler(e)}
            className="block w-full bg-black text-white mx-2 my-3 px4 py-2"
          >
            Submit
          </button>
          <p className="mt-5">Or</p>
          <button
            className="font-semibold mt-5 border-none active:border-none text-center px-2 hover:cursor-grab "
            onClick={(e) => switchHandler(e)}
          >
            {isLogin
              ? 'Login with an  existing account'
              : 'Create a new account'}
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
