import React, { useEffect } from 'react';
import Entry from '../components/Entry';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  getEntries,
  createEntry,
  getEntry,
  updateEntry,
  reset,
} from '../features/entrySlice';
import { FaSpinner } from 'react-icons/fa';

const Entries = () => {
  const { entries, isError, message, isLoading } = useSelector(
    (store) => store.entry
  );
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Setup add entry based on entry state
  const addEntry = (e) => {
    e.preventDefault();

    dispatch(createEntry());
  };

  // useEffect(() => {
  //   return () => {
  //     dispatch(reset());
  //   };
  // }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // if (!user) {
    //   navigate('/auth');
    //
    dispatch(getEntries());
    return () => {
      dispatch(reset());
    };
  }, [isError, dispatch]);

  if (isLoading) {
    return (
      <div className="mx-auto flex justify-center items-center w-full py-11">
        <FaSpinner />
      </div>
    );
  }
  return (
    <div className="mx-auto  py-5 w-4/5 flex flex-col justify-center overscroll-none">
      <h1 className="text-center text-4xl text-extrabold">Today's Entries</h1>

      <div className="add-entry w-full mt-4 ">
        <form className="w-full flex justify-between flex-grow gap-2">
          <input
            className="border-b-2 border-black outline-none basis-[80%] focus:outline-none pb-0"
            type="text"
          />
          <button
            onClick={(e) => addEntry(e)}
            type="submit"
            className="px-4 py-3 bg-black basis-[15%] text-slate-200 rounded-sm border hover:border-gray-800 hover:border hover:tracking-tight"
          >
            Add Entry
          </button>
        </form>
      </div>
      {entries.length > 0 ? (
        <div className="entries grid grid-cols-3 gap-2 mt-5">
          {entries.map((entry) => {
            return <Entry key={entry._id} entry={entry} />;
          })}
        </div>
      ) : (
        <h3>Nobody has signed in today</h3>
      )}
    </div>
  );
};

export default Entries;
