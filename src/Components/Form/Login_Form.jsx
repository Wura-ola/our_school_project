import React from "react";
import Google from "../../assets/flat-color-icons_google.png";
import Facebook from "../../assets/logos_facebook.png";
import Input from "../input/Input";
import Button from "../button/Button";
import Section1 from "../section/Section1";

function Form() {
  return (
    <form
      action="submit"
      className="w-[50%] mx-auto md:p-8  p-4 flex flex-col justify-center bg-[#ffff] rounded-lg"
    >
      <Section1 />

      <Input
        placeholder="lurahbazanji@gmail.com"
        type="email"
        text="Email Address"
      />

      <Input
        placeholder="enter..."
        type="password"
        className=""
        text="Password"
      />
      <div className=" device md:flex md:justify-between items-center text-center">
        <div className="flex">
          <input type="checkbox" name="" id="" />
          <p className="text-[#777777]"> Remember this device</p>
        </div>
        <a href="http://" className="text-[#0964D7] text-center items-center">
          Forgot Password?
        </a>
      </div>
      <Button
        className="bg-[#0964D7] pl-[45%] rounded-xl py-3 text-[#FFFF] mt-8 mb-7"
        text="Sign Up"
      />
      <p className="text-[#777777] flex justify-center ">
        Don't have an account?{" "}
        <a href="http:// " className="text-[#0964D7] ml-1">
          Sign Up
        </a>
      </p>
    </form>
  );
}

export default Form;
