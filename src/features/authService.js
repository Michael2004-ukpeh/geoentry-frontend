import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BASE_URL}/api/v1/users/`;

const register = async (userData) => {
  const { data, status } = await axios.post(API_URL + 'register', userData);

  if (data && data.data.success === true) {
    localStorage.setItem('user', JSON.stringify(data.data));
    return data;
  } else {
    throw new Error(data.data);
  }
};

const login = async (userData) => {
  const { data } = await axios.post(API_URL + 'login', userData);

  if (data) {
    localStorage.setItem('user', JSON.stringify(data.data));
  }
  return data;
};

const getUser = async (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(API_URL + 'getMe', config);
  return data.data;
};
//Logout
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  getUser,
  logout,
};

export default authService;
