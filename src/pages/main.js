/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";


export default function main() {
    const [isOpen, setIsOpen] = useState(false);
  return (
   <main>
    {/* navbar start */}
    <nav className="bg-[#fff] fixed z-50 w-full shadow-md shadow-[red]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              <img
                src="../assets/logo/wdsxhana.png"
                className="h-[30px] hover:scale-[1.1] duration-300"
              ></img>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-[black] hover:bg-red-700 hover:text-white px-3 py-2 duration-300 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/about2"
                  className="text-[black] hover:bg-red-700 hover:text-white px-3 py-2 duration-300 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="/news"
                  className="text-[black] hover:bg-red-700 hover:text-white px-3 py-2 duration-300 rounded-md text-sm font-medium"
                >
                  News
                </a>
                <a
                  href="/product"
                  className="text-[black] hover:bg-red-700 hover:text-white px-3 py-2 duration-300 rounded-md text-sm font-medium"
                >
                  Services & Product
                </a>
                <a
                  href="/contact"
                  className="text-[black] hover:bg-red-700 hover:text-white px-3 py-2 duration-300 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* other nav */}
            </div>
          </div>
          <label className="hidden bg-[#fff] border-none hover:bg-[salmon] duration-300 btn btn-circle swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}
            <svg
              onClick={() => setIsOpen(!isOpen)}
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              onClick={() => setIsOpen(!isOpen)}
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 hover:scale-[1.1] duration-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <img src="../assets/etc/menu.svg" className="h-[30px]"></img>
              ) : (
                <img src="../assets/etc/close.svg" className="h-[30px]"></img>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <hr className="border-[red]"></hr>
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-black hover:ml-[8px] duration-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="/about2"
                className="text-black hover:ml-[8px] duration-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="/news"
                className="text-black hover:ml-[8px] duration-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                News
              </a>
              <a
                href="/product"
                className="text-black hover:ml-[8px] duration-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services & Product
              </a>
              <a
                href="/contact"
                className="text-black hover:ml-[8px] duration-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
        {/* navbar end */}
        {/* body start */}
        <div className='h-[100vh] flex items-center justify-center'>
            <p>ini adalah conten nya</p>
        </div>
        {/* body end */}
{/* footer start */}
<footer className=" bg-[#fff]">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-[black]">
          <div className="mb-8">
            <div className="flex gap-[20px]">
              <div className="">
                <img src="../assets/etc/cs.svg" className="h-[50px]"></img>
              </div>
              <div className="">
                <h5>Call us 24/7</h5>
                <h4 className="font-bold">{`(021)3358276`}</h4>
              </div>
            </div>
            <div className="flex flex-col gap-[5px] mt-[15px]">
              <h5 className="font-bold">Contact info</h5>
              <span>RGB, Blok Q No.39 Tangerang, Banten</span>
            </div>
            <div className="flex space-x-4 mt-[20px]">
              <a href="https://www.linkedin.com/in/yaaqin/">
                <img
                  src="../assets/Linkedin.png"
                  className="w-[20px] hover:scale-[1.1] duration-300 md:w-[20px] h-[20px] md:h-[20px]"
                ></img>
              </a>
              <a href="https://github.com/yaaqin">
                <img
                  src="../assets/Github.png"
                  className="w-[20px] hover:scale-[1.1] duration-300 md:w-[20px] h-[20px] md:h-[20px]"
                ></img>
              </a>
              <a href="https://www.tiktok.com/@yaa.qin">
                <img
                  src="../assets/tiktokkk.png"
                  className="w-[20px] hover:scale-[1.1] duration-300 md:w-[20px] h-[20px] md:h-[20px]"
                ></img>
              </a>
              <a href="https://twitter.com/qinmee">
                <img
                  src="../assets/twitter.png"
                  className="w-[20px] hover:scale-[1.1] duration-300 md:w-[20px] h-[20px] md:h-[20px]"
                ></img>
              </a>
              <a href="https://www.instagram.com/yaa.qin">
                <img
                  src="../assets/IG.png"
                  className="w-[20px] hover:scale-[1.1] duration-300 md:w-[20px] h-[20px] md:h-[20px]"
                ></img>
              </a>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-black mb-4">
              our Service
            </h3>
            <ul className="text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-grey text-[black] hover:ml-[10px] duration-300"
                >
                  Internet Connection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-grey text-[black] hover:ml-[10px] duration-300"
                >
                  Fiber Connection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-grey text-[black] hover:ml-[10px] duration-300"
                >
                  Cloud & Collocation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-grey text-[black] hover:ml-[10px] duration-300"
                >
                  Managed Service
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-black mb-4">
              our Product
            </h3>
            <ul className="text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-grey text-[black] hover:ml-[10px] duration-300"
                >
                  Single Connection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-grey text-[black] hover:ml-[10px] duration-300"
                >
                  Family Boost
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-grey text-[black] hover:ml-[10px] duration-300"
                >
                  Infinity Connect
                </a>
              </li>
             
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-black mb-4">
              Service Schedule
            </h3>
            <p className="text-black">Monday - Friday</p>
            <p className="text-black font-bold">8:30 AM - 10 PM</p>
            <p className="text-black mt-[10px]">Saturday & Sunday</p>
            <p className="text-black font-bold">9:30 AM - 12 PM</p>
          </div>
        </div>
      </div>
      <hr className="border-black"></hr>
      <div className="flex items-center justify-center">
        <h1 className="py-[10px] text-[black]">copyright 2024</h1>
      </div>
    </footer>
{/* footer end */}
   </main>
  )
}
