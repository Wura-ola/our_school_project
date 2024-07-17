import React from "react";
import Button from "../button/Button";
import Google from "../../assets/flat-color-icons_google.png";
import Facebook from "../../assets/logos_facebook.png";

function Section1() {
  return (
    <div>
      <h1 className="text-[#333333] md:text-lg font-bold text-md mb-2">
        Creat your teacher's account
      </h1>
      <p className="text-[#777777] md:text-md  text-sm mb-5">
        Enter your details below to create your account and get started
      </p>
      <div className=" icon_button flex justify-between items-center  mb-8 ">
        <Button text="Sign in with Google" className=" md:px-7 px-10">
          <img src={Google} className="w-[9%]" alt="Google Image" /> Sign in
          With Google
        </Button>

        <Button text="Sign in with Facebook " className=" md:px-7 px-10">
          <img src={Facebook} className="w-[9%]" alt="Facebook Image" />
        </Button>
      </div>
      <div className="flex  gap-8 items-center justify-between mb-4">
        <div className=" lines "></div>
        <div>or</div>
        <div className="lines"></div>
      </div>
    </div>
  );
}

export default Section1;
