import React from "react";

const ContainerTwo = () => {
  return (
    <div className="container-two mt-32">
      <div className="two-up text-2xl font-semibold md:text-4xl lg:text-5xl mb-12">
        Workshop Features
      </div>
      <div className="two-down flex flex-col gap-5 mt-12">
        <div className="boxes up  flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6 mt-5">
          <div className="box-1 relative h-72 w-2/4 lg:h-72 lg:w-2/5 bg-gray-50">
            <div className="box-up">
              <svg
                className="box-1-svg absolute right-0 w-44  lg:w-3/4 lg:h-1/2"
                viewBox="0 0 400 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="200"
                  cy="10"
                  r="200"
                  transform="rotate(90 200 10)"
                  fill="url(#paint0_linear_45_44)"
                />
                <g style={{ mixBlendMode: "multiply" }}>
                  <circle
                    cx="400"
                    cy="9.99977"
                    r="200"
                    transform="rotate(-90 400 9.99977)"
                    fill="url(#paint1_linear_45_44)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_45_44"
                    x1="200"
                    y1="-190"
                    x2="200"
                    y2="210"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.5" stopColor="#FF8130" />
                    <stop offset="0.5" stopColor="#FFC38B" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_45_44"
                    x1="400"
                    y1="-190"
                    x2="400"
                    y2="210"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.5" stopColor="#FF8130" />
                    <stop offset="0.5" stopColor="#FFC38B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="box-down absolute bottom-5 flex flex-col items-start px-4 gap-2">
              <p className="text-2xl font-semibold">Game Mechanics</p>
              <p className="text-sm">
                Master physics, collision detection, AI, and game loops.
              </p>
            </div>
          </div>
          <div className="box-2 relative h-72 w-2/4 lg:h-72 lg:w-2/5 bg-gray-50">
            <div className="box-up">
              <svg
               className="box-2-svg absolute left-5 lg:pr-0 lg:left-40 w-40  lg:w-3/4 lg:h-1/2"
                viewBox="0 0 360 209"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="200"
                  cy="9"
                  r="200"
                  fill="url(#paint0_linear_16_160)"
                />
                <circle
                  cx="200"
                  cy="9"
                  r="170"
                  transform="rotate(-180 200 9)"
                  fill="url(#paint1_linear_16_160)"
                />
                <circle
                  cx="200"
                  cy="9"
                  r="110"
                  transform="rotate(-180 200 9)"
                  fill="url(#paint2_linear_16_160)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_16_160"
                    x1="0"
                    y1="9"
                    x2="400"
                    y2="9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.5" stopColor="#A7E9FD" />
                    <stop offset="0.5" stopColor="#39D1F9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_16_160"
                    x1="30"
                    y1="9"
                    x2="370"
                    y2="9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.5" stopColor="#A7E9FD" />
                    <stop offset="0.5" stopColor="#39D1F9" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_16_160"
                    x1="310"
                    y1="9"
                    x2="90"
                    y2="9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.5" stopColor="#A7E9FD" />
                    <stop offset="0.5" stopColor="#39D1F9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="box-down absolute bottom-5 flex flex-col items-start px-4 gap-2">
              <p className="text-2xl font-semibold ">Visual Effects</p>
              <p className="text-sm">Create 2D/3D graphics and animations.</p>
            </div>
          </div>
        </div>

        <div className="boxes down flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6">
          <div className="box-3 relative h-72 w-2/4 lg:h-72 lg:w-2/5 bg-gray-50">
            <div className="box-up">
              <svg
                className="box-3-svg absolute left-5 lg:pr-0 lg:left-36 w-40  lg:w-3/4 lg:h-1/2"
                viewBox="0 0 304 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_23_193)">
                  <circle cx="200" cy="163" r="200" fill="#FFF7A5" />
                  <path
                    d="M340 163C340 240.32 277.32 303 200 303C122.68 303 60 240.32 60 163C60 85.6801 122.68 23 200 23C277.32 23 340 85.6801 340 163ZM116 163C116 209.392 153.608 247 200 247C246.392 247 284 209.392 284 163C284 116.608 246.392 79 200 79C153.608 79 116 116.608 116 163Z"
                    fill="#FFD400"
                  />
                  <circle
                    cx="125"
                    cy="87"
                    r="43"
                    fill="#FFB400"
                    stroke="white"
                    strokeWidth="14"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_23_193">
                    <rect
                      width="400"
                      height="247"
                      fill="white"
                      transform="translate(0 -37)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="box-down absolute bottom-5 flex flex-col items-start px-4 gap-2">
              <p className="text-2xl font-semibold ">Game Balancing</p>
              <p className="text-sm">Balance difficulty and progression.</p>
            </div>
          </div>
          <div className="box-4 relative h-72 w-2/4 lg:h-72 lg:w-2/5 bg-gray-50">
            <div className="box-up">
              <svg
                className="box-4-svg absolute right-0 w-44  lg:w-3/4 lg:h-1/2"
                viewBox="0 0 327 209"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block", margin: "0 auto" }} // Correct usage of style prop
              >
                <circle
                  cx="100"
                  cy="59"
                  r="100"
                  transform="rotate(-90 100 59)"
                  fill="url(#paint0_linear_23_185)"
                />
                <circle
                  cx="224"
                  cy="59"
                  r="130"
                  transform="rotate(90 224 59)"
                  fill="url(#paint1_linear_23_185)"
                />
                <circle
                  cx="338"
                  cy="59"
                  r="150"
                  transform="rotate(90 338 59)"
                  fill="url(#paint2_linear_23_185)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_23_185"
                    x1="200"
                    y1="59"
                    x2="0"
                    y2="59"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.5" stopColor="#E2E0FF" />
                    <stop offset="0.5" stopColor="#9896FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_23_185"
                    x1="354"
                    y1="59"
                    x2="94"
                    y2="59"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.5" stopColor="#BDBBFF" />
                    <stop offset="0.5" stopColor="#9896FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_23_185"
                    x1="188"
                    y1="59"
                    x2="488"
                    y2="59"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.5" stopColor="#E2E0FF" />
                    <stop offset="0.5" stopColor="#9896FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="box-down absolute bottom-5 flex flex-col items-start px-4 gap-2">
              <p className="text-2xl font-semibold">Cross-Platform Dev</p>
              <p className="text-sm">Deploy games on PC, web, and mobile.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerTwo;
