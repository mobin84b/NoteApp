import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import imageLogin from "../../assets/images/52caebeb161b72211e158bc9ea95edb7.jpg";

export default function register() {
 

  return (
    <>
      <Navbar />
      <div className="bg-[#f8bdbd] h-[90vh] flex">
        <div className="container m-auto h-[80vh] w-[130vh] items-center bg-[#ffff] rounded-md shadow-md">
          <div className="lg:grid grid-cols-2 justify-center items-center gap-5">
            <div className=" p-4">
              <div className="bg-[#f6f6f6] rounded-sm shadow-sm">
                <img className="w-full rounded-xl h-[70vh] mt-2" src={imageLogin} alt="" />
              </div>
            </div>
            <div>
              <div className="w-[50vh] h-full">
                <h1 className="text-4xl ml-36 font-bold text-black">
                  Login
                </h1>
              </div>
              <div className="w-[300px] ml-12 mt-16">
                <form class="max-w-md mx-auto" >
                  
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      
                    />
                    <label
                      for="floating_email"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_password"
                      id="floating_password"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      
                    />
                    <label
                      for="floating_password"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-16">
                    <Link to={"/register"}>
                    <button
                      type="button"
                      class="text-white shadow-md w-full bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                    >
                      Create account
                    </button>
                    </Link>
                  </div>
                  <div className="mt-3">
                    <Link to={"/main"}>
                    <button
                      type="button"
                      class="text-white w-full shadow-md bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 text-lg focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full px-5 py-2.5 text-center items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                    >
                        <path
                          fill-rule="evenodd"
                          d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                          clip-rule="evenodd"
                        />
                      Sign in
                    </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
