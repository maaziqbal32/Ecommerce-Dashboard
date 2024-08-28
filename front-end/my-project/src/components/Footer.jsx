import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 shadow-lg p-2 absolute bottom-0 w-full">
      <div className="flex justify-between items-center w-full">
        <div className="text-white text-3xl font-extrabold tracking-wide px-4 py-2">
          <span className="text-teal-400">E-DashBoard</span>
        </div>
        <div className="text-gray-300 px-4 py-2">
          <p>&copy; {new Date().getFullYear()} E-DashBoard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;