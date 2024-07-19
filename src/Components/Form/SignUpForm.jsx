import React from "react";
import Nig from "../../assets/Nigeria.png";
import Input from "../input/Input";
import Button from "../button/Button";
import Section1 from "../section/Section1";

function SignUpForm() {
  return (
    <form
      action="submit"
      className="w-[50%] mx-auto md:p-8  p-4 flex flex-col justify-center bg-[#ffff] rounded-lg"
    >
      <Section1 />
      {/* <label htmlFor="name">Full name</label> */}
      <Input
        placeholder="Laurah Bazanji"
        type="text"
        text="Name"
        name=""
        id="name"
      />
      {/* <label htmlFor="email">Email Address</label> */}
      <Input
        placeholder="lurahbazanji@gmail.com"
        type="email"
        text="Email Address"
        id="email"
      />

      <Input
        placeholder={Nig}
        type="text"
        text="Nationality"
        id="nationality"
      />

      <Input
        placeholder="+234 --- --- ----"
        type="phone"
        text="Phone Number"
        id="Phone Number"
      />

      <Input
        placeholder="Adegbabo ijinle Abule Primary School"
        type="text"
        text="Name of School"
        id="School"
      />
      <Input
        placeholder="enter..."
        type="password"
        className=""
        text="Password"
      />
      <Input
        placeholder="enter..."
        type="password"
        id="password"
        text="Confirm password"
      />
      <div className=" device md:flex md:justify-between items-center text-center">
        <div className="flex">
          <input type="checkbox" name="" id="" />
          <p className="text-[#777777]">
            By clicking Create Account, you confirm that you have
            read,understood and agree to the{" "}
            <a href="http://">Privacy Policy</a> and
            <a href="http://"> Term of Service</a>
          </p>
        </div>
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

export default SignUpForm;
