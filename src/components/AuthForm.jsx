import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const AuthForm = ({ switchMode, isLogin }) => {
  const [user, setUser] = useState(true);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {} = useSelector((store) => store.auth);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="mx-auto w-[70%] border-1 border-black py-4 px-6 shadow-lg border rounded-sm">
        <form
          action=""
          className="w-full flex flex-col items-center justify-center "
        >
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
          <a
            className="font-semibold mt-5 border-none active:border-none text-center px-2 hover:cursor-grab "
            onClick={switchMode}
          >
            {isLogin
              ? 'Login with an  existing account'
              : 'Create a new account'}
          </a>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
