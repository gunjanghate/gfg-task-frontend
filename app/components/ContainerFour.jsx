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
          <div className="que1  w-11/12 mx-auto mt-10 rounded-sm shadow-md bg-gray-50">
            <div
              onClick={toggleOpen1}
              className="flex justify-center gap-2  lg:justify-between pl-5 pr-12 lg:pr-12 items-center px-4 py-3 cursor-pointer rounded-lg"
            >
              <span
                className={`transform transition-transform duration-300 ${
                  open1 ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-semibold rounded-lg w-fit">
                What is PyHack?
              </h3>
            </div>
          </div>
          {open1 && (
            <div className="px-4 py-4 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-l-red-500 border-gray-300 rounded-2xl shadow-md">
              <p className="text-gray-600">
                Google Developer Groups (GDG) are community groups for college
                and university students interested in Google developer
                technologies. Students from all undergraduate or graduate
                programs with an interest in growing as a developer are welcome.
                By joining a GDG, students grow their knowledge in a
                peer-to-peer learning environment and build solutions for local
                businesses and their community.
              </p>
            </div>
          )}
          <div className="que2 w-11/12 mx-auto mt-10 rounded-sm shadow-md bg-gray-50">
            <div
              onClick={toggleOpen2}
              className="flex gap-3 justify-center  lg:justify-between lg:pr-12 items-center px-4 py-3 cursor-pointer rounded-lg"
            >
              <span
                className={`transform transition-transform duration-300 ${
                  open2 ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="green"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <h3 className="text-lg w-11/12 font-semibold rounded-lg lg:ml-12 ">
                Where will the workshops be held?{" "}
              </h3>
            </div>
          </div>
          {open2 && (
            <div className="px-4 py-4 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-l-green-500 border-gray-300 rounded-2xl shadow-md">
              <p className="text-gray-600">
                We conduct an annual team recruitment process. The details of
                recruitment are posted online a few weeks prior. It’s a two step
                process involving form filling and personal interview. Students
                acing both rounds are selected to be the part of the core team.
              </p>
            </div>
          )}
          <div className="que3 w-11/12 mx-auto mt-10 rounded-sm shadow-md bg-gray-50">
            <div
              onClick={toggleOpen3}
              className="flex gap-3 justify-center lg:justify-between pl-5 lg:pr-12 items-center px-4 py-3 cursor-pointer rounded-lg"
            >
              <span
                className={`transform transition-transform duration-300 ${
                  open3 ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-semibold rounded-lg lg:ml-12 w-fit">
              What will I learn at PyHack?
              </h3>
            </div>
          </div>
          {open3 && (
            <div className="px-4 py-4 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-l-blue-500 border-gray-300 rounded-2xl shadow-md">
              <p className="text-gray-600">
                A GDG Lead fills a lot of shoes. He works with the university to
                build the club, recruit the core team, host workshops, build
                projects, collaborate with local partners.
              </p>
            </div>
          )}
          <div className="que4 w-11/12 mx-auto mt-10 rounded-sm shadow-md bg-gray-50">
            <div
              onClick={toggleOpen4}
              className="flex gap-3 justify-center lg:justify-between pl-5 lg:pr-12 items-center px-4 py-3 cursor-pointer rounded-lg"
            >
              <span
                className={`transform transition-transform duration-300 ${
                  open4 ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="orange"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <h3 className="text-lg w-fit font-semibold rounded-lg lg:ml-12 ">
              Do I need prior Python experience?
              </h3>
            </div>
          </div>
          {open4 && (
            <div className="px-4 py-4 w-1/2 mx-auto mt-10 border-x-8 border-y-8 border-l-yellow-500 border-gray-300 rounded-2xl shadow-md">
              <p className="text-gray-600">
                A GDG Lead fills a lot of shoes. He works with the university to
                build the club, recruit the core team, host workshops, build
                projects, collaborate with local partners.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContainerFour;
