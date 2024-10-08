"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header flex flex-row md:flex-row lg:flex-row justify-between  py-8 md:mx-12 lg:mx-44 items-center">
      <div className="header-left ml-4 md:ml-0 lg:ml-0">
        <svg
          width="49"
          height="38"
          viewBox="0 0 49 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.142937 7.3114L23.9557 0.487L48.0589 7.3114L23.5201 13.7002L0.142937 7.3114ZM10.8877 6.7306L12.4849 7.3114L23.5201 3.5362L21.7777 2.9554L10.8877 6.7306Z"
            fill="#121316"
          />
          <path
            d="M45.7363 7.8922L46.3171 7.747V14.7166H46.4623L47.1883 16.7494H44.8651L45.5911 14.7166H45.7363V7.8922Z"
            fill="#121316"
          />
          <path
            d="M6.29957 15.9584C7.78691 14.1234 9.87476 12.8729 12.1945 12.4277C14.5142 11.9826 16.9166 12.3713 18.9776 13.5253C21.0385 14.6794 22.6255 16.5245 23.4582 18.7349C24.291 20.9453 24.316 23.3788 23.5288 25.6058C22.7416 27.8329 21.1929 29.7102 19.1561 30.9063C17.1193 32.1024 14.7254 32.5404 12.397 32.143C10.0686 31.7455 7.95551 30.5382 6.43079 28.7342C4.90607 26.9302 4.06778 24.6454 4.06392 22.2834L7.67069 22.2775C7.67316 23.7892 8.20966 25.2514 9.18548 26.406C10.1613 27.5606 11.5137 28.3333 13.0038 28.5876C14.494 28.842 16.0261 28.5617 17.3297 27.7961C18.6332 27.0306 19.6244 25.8292 20.1282 24.4039C20.632 22.9785 20.616 21.4211 20.083 20.0064C19.5501 18.5918 18.5344 17.4109 17.2154 16.6723C15.8964 15.9338 14.3589 15.685 12.8742 15.9699C11.3896 16.2548 10.0534 17.0551 9.1015 18.2295L6.29957 15.9584Z"
            fill="#121316"
          />
          <path
            d="M41.7583 15.9584C40.2709 14.1234 38.1831 12.8729 35.8633 12.4277C33.5436 11.9826 31.1412 12.3713 29.0802 13.5253C27.0193 14.6794 25.4323 16.5245 24.5996 18.7349C23.7668 20.9453 23.7419 23.3788 24.529 25.6058C25.3162 27.8329 26.8649 29.7102 28.9017 30.9063C30.9385 32.1024 33.3325 32.5404 35.6608 32.143C37.9892 31.7455 40.1023 30.5382 41.627 28.7342C43.1517 26.9302 43.99 24.6454 43.9939 22.2834L40.3871 22.2775C40.3847 23.7892 39.8482 25.2514 38.8723 26.406C37.8965 27.5606 36.5441 28.3333 35.054 28.5876C33.5638 28.842 32.0317 28.5617 30.7281 27.7961C29.4246 27.0306 28.4334 25.8292 27.9296 24.4039C27.4258 22.9785 27.4418 21.4211 27.9748 20.0064C28.5077 18.5918 29.5234 17.4109 30.8424 16.6723C32.1614 15.9338 33.6989 15.685 35.1836 15.9699C36.6682 16.2548 38.0044 17.0551 38.9563 18.2295L41.7583 15.9584Z"
            fill="#121316"
          />
          <path
            d="M23.9563 21.6862L43.9687 21.7709C44.0665 22.7752 43.8225 23.8797 43.6309 24.8806L23.9563 24.7354V21.6862Z"
            fill="#121316"
          />
          <path
            d="M24.1015 21.6862L4.06391 21.7588C3.99131 22.7752 4.23536 23.807 4.42691 24.808L24.1015 24.7354V21.6862Z"
            fill="#121316"
          />
          <path
            d="M20.3943 33.2421L23.8962 29.8699C24.0102 29.7601 24.1911 29.7618 24.303 29.8737L27.8127 33.3834C27.9276 33.4983 27.9258 33.6851 27.8087 33.7979L24.3068 37.1701C24.1928 37.2799 24.0119 37.2782 23.9 37.1663L20.3904 33.6567C20.2754 33.5417 20.2772 33.3549 20.3943 33.2421Z"
            fill="#121316"
          />
        </svg>{" "}
      </div>
      <div className="header-right">
        <div className="md:hidden text-2xl mt-5 mr-4" onClick={toggleMenu}>
          {menuOpen ? (
            <FiX className="grey-txt" />
          ) : (
            <FiMenu className="grey-txt" />
          )}
        </div>
        <nav
          className={`md:flex items-center gap-12 ${
            menuOpen ? "flex pb-4 pt-2 gap-4 " : "hidden"
          } flex-col md:flex-row md:static absolute top-16 z-20 left-0 w-full md:w-auto ${
            !menuOpen ? "bg-transparent" : "bg-slate-100"
          } z-10`}
        >
          <ul className="flex flex-col md:flex-col lg:flex-row justify-evenly gap-16 text-xl font-semibold">
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Resources</li>
            <li className="cursor-pointer">Developers</li>
            <li>
              <button class="open-btn rounded-2xl bg-black text-white hover:bg-gray-200 hover:border-x-1 hover:border-y-1 hover:border-black hover:text-black transition-colors">
                Open App
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
