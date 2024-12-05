import React from "react";

import Logo from "../assets/wolf-bordered.svg";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} className="w-[60px] h-[60px]" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
