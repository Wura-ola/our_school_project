import React from "react";
import Google from "../../assets/flat-color-icons_google.png";
import Facebook from "../../assets/logos_facebook.png";
import Input from "../input/Input";
import Button from "../button/Button";

function Form() {
  return (
    <form
      action="submit"
      className="w-[50%] mx-auto p-8 flex flex-col justify-center bg-[#ffff] rounded"
    >
      <h1 className="text-[#333333] font-bold mb-2">
        Creat your teacher's account
      </h1>
      <p className="text-[#777777] mb-4">
        Enter your details below to creat your account and get started
      </p>
      <div className="flex justify-between mb-8">
        <button className="flex items-center  px-6 py-1 border-[#DDDDDD] border-[1.5px] gap-2 rounded text-[#344054]">
          <img src={Google} className="w-[9%]" alt="Google Image" /> Sign in
          With Google
        </button>
        <button className=" rounded py-[1.5px] flex items-center  px-5 border-[#DDDDDD] border-[1.5px] gap-2 text-[#344054]">
          <img src={Facebook} className="w-[9%]" alt="Facebook Image" /> Sign in
          With Facebook
        </button>
      </div>
      <label htmlFor="" className="text-[#344054]">
        Email Address
      </label>
      <Input placeholder="lurahbazanji@gmail.com" type="email" />
      <label htmlFor="" className="text-[#344054]">
        Password
      </label>
      <Input placeholder="enter..." type="password" className="" />
      <div className="flex justify-between items-center">
        <p className="text-[#777777]"> Remember this device</p>
        <a href="http://" className="text-[#0964D7]">
          Forgot Password?
        </a>
      </div>
      <Button
        className="bg-[#0964D7] py-2 px-8 rounded-xl text-[#FFFF] mt-8 mb-7"
        text="Sign Up"
      />
      <p className="text-[#777777] flex justify-center">
        Don't have an account?{" "}
        <a href="http:// " className="text-[#0964D7]">
          Sign Up
        </a>
      </p>
    </form>
  );
}

export default Form;
