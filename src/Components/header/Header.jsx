import React from "react";
import logo from "../../assets/Our School Logo2 2.png";

function Header() {
  return (
    <div className="flex justify-between py-3 px-12">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <p className="text-[#777777] flex justify-center ">
          Don't have an account?{" "}
          <a href="http:// " className="text-[#0964D7] ml-1">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Header;
