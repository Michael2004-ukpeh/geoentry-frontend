import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BASE_URL}/api/v1/entrys/`;

// Get Entries
const getEntries = async (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(API_URL, config);

  return data;
};

//Create entry

const createEntry = async (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post(API_URL, {}, config);
  return data;
};

//Get Entry

const getEntry = async (id, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(API_URL + id, config);
  return data;
};

// update Entry
const updateEntry = async (id, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.put(API_URL + id, config);
  return data;
};

const entryService = {
  createEntry,
  getEntries,
  getEntry,
  updateEntry,
};

export default entryService;
