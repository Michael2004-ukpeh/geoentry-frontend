import React from 'react';
import Entry from '../components/Entry';

const Entries = () => {
  return (
    <div className="mx-auto  py-5 w-4/5 flex flex-col justify-center overscroll-none">
      <h1 className="text-center text-4xl text-extrabold">Today's Entries</h1>

      <div className="add-entry w-full mt-4 ">
        <form className="w-full flex justify-between flex-grow gap-2" action="">
          <input
            className="border-b-2 border-black outline-none basis-[80%] focus:outline-none pb-0"
            type="text"
          />
          <button className="px-4 py-3 bg-black basis-[15%] text-slate-200 rounded-sm border hover:border-gray-800 hover:border hover:tracking-tight">
            Add Entry
          </button>
        </form>
      </div>

      <div className="entries grid grid-cols-3 gap-1 mt-5">
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
      </div>
    </div>
  );
};

export default Entries;
