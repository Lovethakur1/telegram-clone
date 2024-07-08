import React from 'react';

function Header() {
  return (
    <div className="box-border items-center bg-white cursor-default flex flex-[0_0_auto] justify-between min-h-[56px] select-none text-black">
      <div className="p-4 bg-white min-h-14 w-full">
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full cursor-pointer transform transition duration-300 hover:bg-gray-200">
            <i className="fas fa-bars absolute text-lg transition duration-300"> <img src="https://cdn-icons-png.flaticon.com/512/5036/5036960.png" alt="" /> </i>
            <i className="fas fa-arrow-left absolute text-lg transition duration-300 hidden opacity-0"></i>
          </div>
          <div className="relative flex items-center gap-4 border border-gray-300 rounded-full w-full py-3 px-4 transition duration-300">
            <i className="fas fa-search text-gray-500 opacity-60 text-lg"></i>
            <input type="text" placeholder="Search" className="border-none outline-none w-full placeholder-gray-500 placeholder-opacity-60 font-medium text-base"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
