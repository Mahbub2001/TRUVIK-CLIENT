import React from "react";
import passport from "../../assets/passport.png";
import { AiFillCheckSquare } from "react-icons/ai";

const WelcomeSection = () => {
  return (
    <div className="mt-8 mb-8 flex justify-center items-center">
      <div className="w-3/4">
        <div className="lg:flex gap-40">
          <div>
            <img src={passport} alt="" />
          </div>
          <div className="flex flex-col justify-center ">
            <p className="text-slate-500 mb-3">WELCOME TO TRUVIK</p>
            <h3 className="mb-5 text-slate-800 font-bold text-4xl">
              Welcome to immigration <br />
              <span className="text-red-600">Advisory</span> services
            </h3>
            <p>
              Truvik immigration advisory foundation was established with a
              small idea that was <br /> incepted in the minds of its promoters
              in the year 1994! We skilfully guide applicants <br /> for
              immigration process to any country they aspire to settle down.
            </p>
            <div className="mt-5">
              <div className="flex gap-4 items-center mb-2">
                <AiFillCheckSquare className="text-3xl hover:fill-red-600 cursor-pointer fill-slate-400"/>
                <p>The desire to blur the global boundaries fulfil</p>
              </div>
              <div className="flex gap-4 items-center mb-2">
                <AiFillCheckSquare className="text-3xl hover:fill-red-600 cursor-pointer fill-slate-400"/>
                <p>Certified legal advisors to serve you better way.</p>
              </div>
              <div className="flex gap-4 items-center mb-2">
                <AiFillCheckSquare className="text-3xl hover:fill-red-600 cursor-pointer fill-slate-400"/>
                <p>Easy approval by choosing top visa consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
