import React from "react";
import image from "../../assets/study.png";

const WhatWeDo = () => {
  return (
    <div className="mt-16 mb-16">
      <div className="lg:flex">
        <div className="relative lg:w-1/2">
          <img src={image} className="w-full" alt="" />
          <div className="md:absolute bottom-0 right-0 bg-red-500">
            <div className="h-96 md:w-80 flex flex-col justify-center items-center gap-8 text-white">
              <div className="">
                <h1 className="text-center text-3xl">850</h1>
                <p>Projects Are Completed</p>
              </div>
              <p className="border border-b-white w-full"></p>
              <div>
                <h1 className="text-center text-3xl">1000</h1>
                <p>Gave Sigange Advice</p>
              </div>
              <p className="border border-b-white w-full"></p>
              <div>
                <h1 className="text-center text-3xl">850</h1>
                <p>Clients Are Satisfied</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-800 lg:w-1/2 text-white flex flex-col items-center justify-center text-center">
          <div className="p-20">
            <p className="text-1xl font-bold">What I do</p>
            <p className="border border-b-white mb-5 mt-2 text-center"></p>
            <h1 className="my-6 text-4xl font-bold ">
              Immigration services <br />
              from <span className="italic text-red-600">Experienced </span>
              person
            </h1>
            <h4 className="mt-5 mb-2 text-center">Study and work visa consultant</h4>
            <p className="border border-b-white w-full mb-2"></p>
            <p className="my-5 text-center">
              Skilled professionals are always ready to provide reliable
              services to my <br /> clients!. I guide the applicants for their
              immigration.
            </p>
            <h4 className="mt-5 mb-2">Online visa services and guidance</h4>
            <p className="border border-b-white w-full  mb-2"></p>
            <p>
              You can directly contact us through filling up the form. Our team
              will get back to you with your visa enquiry and help you for visa
              services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
