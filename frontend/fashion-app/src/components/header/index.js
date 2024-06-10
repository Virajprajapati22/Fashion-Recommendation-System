"use client"

import Link from "next/link";
import { useState } from "react";
import LoginPopup from "../login-popup";

const Header = () => {

    const [isOnPopup, setOnPopup] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        setOnPopup(true);
    }

    return (
        <>
            <header>
                <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 m-4 rounded-md">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link href="/" class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 sm:h-9" viewBox="0 0 818.08 652" id="myntra">
                                <path fill="#f37320" fill-rule="evenodd" d="M415.84 569.9a5.39 5.39 0 0 0-1 .3 2.93 2.93 0 0 0 1-.3M395.94 570.5a.6.6 0 0 1-.4-.1.6.6 0 0 0 .4.1M412.64 570.7c-.7.1-1.6.3-2.2.4.6-.1 1.4-.3 2.2-.4M408.64 571.2a11.48 11.48 0 0 1-1.8.1 3.73 3.73 0 0 0 1.8-.1"></path><path fill="#f15e22" fill-rule="evenodd" d="M410.24 571c-.6 0-1.2.1-1.6.1a9.74 9.74 0 0 0 1.6-.1M395.64 570.5a28 28 0 0 1-2.8-.6c.9.1 1.8.4 2.8.6M414.94 570.1a16.84 16.84 0 0 1-2.4.6 16.84 16.84 0 0 0 2.4-.6M403.44 571.4a37.41 37.41 0 0 1-7.4-.9 30.6 30.6 0 0 0 7.4.9M406.74 571.3c-.7 0-1.6.1-2.5.1a19.29 19.29 0 0 0 2.5-.1M566.24 155.8h-.1a11 11 0 0 0-4.4-.7 21.8 21.8 0 0 1 5.8 1.3 7.54 7.54 0 0 1-1.3-.6"></path>
                                <path fill="#ec008b" fill-rule="evenodd" d="M556.24,155.8h-.1a5.21,5.21,0,0,1-1.5.6,21.69,21.69,0,0,1,7.2-1.2,11.3,11.3,0,0,0-5.6.6"></path><path fill="#f15e22" fill-rule="evenodd" d="M613.34,171.9h0a11.77,11.77,0,0,0-4.5-.7,16.09,16.09,0,0,1,5.8,1.3,6.87,6.87,0,0,0-1.3-.6"></path><path fill="#ec008b" fill-rule="evenodd" d="M603.24,171.8h0a4.59,4.59,0,0,1-1.6.7,19.16,19.16,0,0,1,7.1-1.3,12.64,12.64,0,0,0-5.5.6"></path><path fill="#f15e22" fill-rule="evenodd" d="M615.34,172.9h0a11.66,11.66,0,0,0-4.5-.6,16.26,16.26,0,0,1,5.8,1.2c-.5-.2-.8-.4-1.3-.6"></path><path fill="#ec008b" fill-rule="evenodd" d="M605.34,172.8h0c-.5.3-1,.4-1.6.7a18.81,18.81,0,0,1,7.1-1.3,16,16,0,0,0-5.5.6"></path><path fill="#f13ab1" fill-rule="evenodd" d="M238.64,72.3h.1c.4-.1,1-.3,1.5-.4-39.7,6-127.7,147.6-175,277.5-50.3,138.3-38.2,205,1.3,219.5h.1c39.5,14.3,91.6-29,142-167.4,13.6-37.3,25.2-77.7,34.4-116.9-24.5-105.4-29.9-202.7-4.4-212.3"></path><path fill="#fd913c" fill-rule="evenodd" d="M389.74,568.9h0c-39.7-14.6-51.6-81.4-1.3-219.5,5-13.7,10.3-27.6,16.2-41.3-51.7-123.5-131.4-243.2-164.4-236.3a16.31,16.31,0,0,1,7.1.6h.1v.1C273,82,267.54,179.2,243,284.7a978.28,978.28,0,0,0,34.4,116.8c39.7,109,80.5,158.9,115.3,168.2a22.62,22.62,0,0,1-3-.8"></path><path fill="#f05524" fill-rule="evenodd" d="M247.34,72.5h-.1a15.38,15.38,0,0,0-6.8-.6c-.7.1-1,.3-1.6.4h-.1c-25.5,9.6-20.1,106.9,4.3,212.3,24.3-105.4,29.8-202.5,4.3-212.1"></path><path fill="#fd913c" fill-rule="evenodd" d="M558.94,73c-37,13.4-107,122.8-154.2,235,5.8,13.7,11.2,27.6,16.2,41.3,50.3,138.2,38.3,205-1.3,219.4v.1c-1.2.3-2.5.7-3.5,1,34.9-9,76.1-58.8,115.7-168.4a953,953,0,0,0,33.6-113.7c-24.5-104.5-30.7-202-6.5-214.7"></path><path fill="#f05524" fill-rule="evenodd" d="M419.44,568.8h.1c39.5-14.4,51.5-81.4,1.3-219.5-5.2-13.7-10.5-27.6-16.4-41.3-5.8,13.7-11.2,27.6-16.2,41.3-50.3,138.2-38.2,205.1,1.3,219.5,1,.4,2.1.6,3.1.9a14.34,14.34,0,0,0,2.8.7h.4a40.73,40.73,0,0,0,7.5,1h3.2a9.66,9.66,0,0,0,1.8-.3c.7,0,1.2-.1,1.9-.1s1.3-.3,2.1-.4a9.27,9.27,0,0,0,2.4-.4c.4,0,.7-.1,1-.1,1.3-.5,2.5-.8,3.7-1.3"></path><path fill="#f13ab1" fill-rule="evenodd" d="M571.54,72.9c24.5,12.2,18.4,109.8-6.2,215a976.22,976.22,0,0,0,33.5,113.5c50.4,138.3,102.5,181.7,142.2,167.4h.1c39.4-14.6,51.5-81.2,1.2-219.5C696.64,223.8,613,87.5,571.54,72.9"></path><path fill="#f05524" fill-rule="evenodd" d="M571.54,72.9a23.2,23.2,0,0,0-5.8-1.3,22.62,22.62,0,0,0-7.1,1.5c-24,12.7-18,110,6.6,214.8,24.8-105.1,30.8-202.7,6.3-215"></path>
                            </svg>
                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white" style={{
                                fontFamily: "Dancing Script, cursive"
                            }}>Fashion</span>
                        </Link>
                        <div class="flex items-center lg:order-2">
                            {/* <a class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 cursor-pointer" onClick={(e) => handleLogin(e)}>Log in</a> */}
                            <a class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 cursor-pointer" onClick={(e) => handleLogin(e)}>Log in</a>
                            <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link href="/" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link href="/products" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Products</Link>
                                </li>
                                <li>
                                    <Link href="/mycart" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">My Cart</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {isOnPopup && (
                <LoginPopup setOnPopup={setOnPopup}/>
            )}
        </>
    )
}

export default Header;