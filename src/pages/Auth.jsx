import React, { useState, useEffect } from 'react';
import AuthForm from '../components/AuthForm';
import { FaChevronRight } from 'react-icons/fa';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { reset } from '../features/authSlice';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const { isLoading, isError, isSuccess, message, user } = useSelector(
    (store) => store.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && user) {
      navigate('/entries');
    }
  }, [user, isError, isSuccess, isLoading]);

  const switchMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <section className="flex gap-0 w-full min-h-[100vh]">
      <div className="bg-gray-800 basis-3/5  min-h-full login-side relative px-6">
        <div className="top-[50%} mt-12 mx-auto absolute">
          <h1 className="text-6xl leading-15">
            Revolutionizing employee sign in one step at a time
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-2xl flex mt-5 items-center border-white border-2 px-4 hover:tracking-wide"
          >
            Go Back{' '}
            <span className="inline ml-2 hover:ml-3">
              <FaChevronRight />
            </span>
          </button>
        </div>
      </div>
      <div className="basis-2/5  flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold">{isLogin ? 'Sign Up' : 'Login'}</h1>
        <AuthForm isLogin={isLogin} switchMode={switchMode} />
      </div>
    </section>
  );
};

export default Auth;
