import React from 'react';

const Entry = () => {
  return (
    <div className="h-[inherit] w-[inherit] border border-black flex justify-center flex-col items-center py-4 px-4 gap-2  ">
      <div className="imagebox">
        <div className="h-[10rem] w-[10rem] bg-slate-900 rounded-full text-white text-6xl text-center flex justify-center items-center ">
          HK
        </div>
      </div>
      <div className="detail">
        <p>Name: Ukasa Makamoto</p>
        <p>Signed :</p>
      </div>
    </div>
  );
};

export default Entry;
