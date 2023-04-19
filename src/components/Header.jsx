import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="bg-gray-400 p-4">
        <ul className="flex space-x-4 font-bold text-xl justify-center text-white ">
          
          <li>Home</li>
          <li>Countries</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
