"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ContainerFour = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const toggleOpen1 = () => setOpen1((prev) => !prev);
  const toggleOpen2 = () => setOpen2((prev) => !prev);
  const toggleOpen3 = () => setOpen3((prev) => !prev);
  const toggleOpen4 = () => setOpen4((prev) => !prev);

  return (
    <div>
      <div className="FAQ flex flex-col md:flex-row lg:flex-row lg:relative lg:justify-around  justify-center items-center mb-14 mt-12">
        <div className="faq-head text-5xl font-bold flex items-start lg:top-0 lg:left-0 lg:absolute"> FAQs</div>
        <div className="ques flex flex-col justify-evenly lg:ml-44">
          <div className="que1  w-96 mx-auto mt-10 rounded-sm shadow-md bg-gray-50">
            <div
              onClick={toggleOpen1}
              className="flex justify-center gap-2  lg:justify-between pl-5 pr-12 lg:pr-4  items-center px-4 py-3 cursor-pointer rounded-lg"
            >
              <h3 className="text-lg font-semibold rounded-lg w-fit">
                What is PyHack?
              </h3>
              <span
                className={`text-blue-500 text-3xl font-light transform transition-transform duration-500 ${
                  open1 ? "rotate-180" : ""
                }`}
              >
                +
              </span>
            </div>
          </div>
          {open1 && (
            <div className="px-4 py-4 w-96 mx-auto mt-10 border-gray-300 rounded-2xl shadow-md transition-all">
              <p className="text-gray-600">
About PyHack...
              </p>
            </div>
          )}
          <div className="que2 w-96 mx-auto mt-10 rounded-sm shadow-md bg-gray-50">
            <div
              onClick={toggleOpen2}
              className="flex gap-3 justify-center  lg:justify-between items-center px-4 py-3 cursor-pointer rounded-lg"
            >
              <h3 className="text-lg w-fit font-semibold rounded-lg  ">
                Where will the workshops be held?{" "}
              </h3>
              <span
                className={`text-blue-500 text-3xl font-light transform transition-transform duration-500 ${
                  open2 ? "rotate-180" : ""
                }`}
              >
                +
              </span>
            </div>
          </div>
          {open2 && (
            <div className="px-4 py-4 w-96 mx-auto mt-10 border-gray-300 rounded-2xl shadow-md">
              <p className="text-gray-600">
About location...
              </p>
            </div>
          )}
          <div className="que3 w-96 mx-auto mt-10 rounded-sm shadow-md bg-gray-50">
            <div
              onClick={toggleOpen3}
              className="flex gap-3 justify-center lg:justify-between pl-5 lg:pr-4 items-center px-4 py-3 cursor-pointer rounded-lg"
            >
              <h3 className="text-lg font-semibold rounded-lg w-fit">
              What will I learn at PyHack?
              </h3>
              <span
                className={`text-blue-500 text-3xl font-light transform transition-transform duration-500 ${
                  open3 ? "rotate-180" : ""
                }`}
              >
                +
              </span>
            </div>
          </div>
          {open3 && (
            <div className="px-4 py-4 w-1/2 mx-auto mt-10 border-gray-300 rounded-2xl shadow-md">
              <p className="text-gray-600">
                You will learn...
              </p>
            </div>
          )}
          <div className="que4 w-96 mx-auto mt-10 rounded-sm shadow-md bg-gray-50">
            <div
              onClick={toggleOpen4}
              className="flex gap-3 justify-center lg:justify-between pl-5 lg:pr-4 items-center px-4 py-3 cursor-pointer rounded-lg"
            >
              <h3 className="text-lg w-fit font-semibold rounded-lg ">
              Do I need prior Python experience?
              </h3>
              <span
                className={`text-blue-500 text-3xl font-light transform transition-transform duration-500 ${
                  open4 ? "rotate-180" : ""
                }`}
              >
                +
              </span>
            </div>
          </div>
          {open4 && (
            <div className="px-4 py-4 w-1/2 mx-auto mt-10 border-gray-300 rounded-2xl shadow-md">
              <p className="text-gray-600">
                Details...
              </p>
            </div>
          )}

<button className="open-btn hover:text-lg mt-2 border-x-0 border-b-2 border-blue-500 px-1 text-blue-500 transition-all w-fit">
          Learn more{" "}
          <span className="text-2xl pl-1 font-extrabold hover:translate-x-2">
            →
          </span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerFour;
