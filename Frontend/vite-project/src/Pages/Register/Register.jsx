import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import imageRegister from "../../assets/images/efec17aac3e7cf1478fc871fe80306f9.jpg";
import {Alert} from "flowbite-react";

export default function register() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      !formData.email ||
      !formData.fullName ||
      !formData.userName ||
      !formData.password
    ) {
      return setErrorMessage("Please fill out all fields");
    }

    try {
        setLoading(true)
        setErrorMessage(null)

        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json()

        if(data.status == 'fail' || data.status == 'error'){
            setLoading(false)
            return setErrorMessage(data.message)
        }

        setLoading(false)
        if(res.ok){
            navigate('/sign-in')
        }

    } catch (error) {
        setErrorMessage(error.message)
        setLoading(false)
    }
  };
  return (
    <>
      <Navbar />
      <div className="bg-slate-200 h-[90vh] flex">
        <div className="container m-auto h-[80vh] w-[130vh] items-center bg-[#ffff] rounded-md shadow-md">
          <div className="lg:grid grid-cols-2 justify-center items-center gap-5">
            <div className=" p-4">
              <div className="bg-[#f6f6f6] rounded-sm shadow-sm">
                <img className="w-full h-[70vh]" src={imageRegister} alt="" />
              </div>
            </div>
            <div>
              <div className="w-[50vh] h-full">
                <h1 className="text-4xl ml-7 font-bold text-black">
                  Create an account
                </h1>
              </div>
              <div className="w-[300px] ml-12 mt-10">
                <form class="max-w-md mx-auto" onChange={handleSubmit}>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      id='fullName'
                      onChange={handleChange}
                    />
                    <label
                      for="floating_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="floating_email"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      id='email'
                      onChange={handleChange}
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
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      id='password'
                      onChange={handleChange}
                    />
                    <label
                      for="floating_password"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_password"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      id='password'
                      onChange={handleChange}
                    />
                    <label
                      for="floating_password"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                     Re-enter Password
                    </label>
                  </div>
                  <div className="mt-16">
                    <button
                      type="button"
                      class="text-white shadow-md w-full bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                    >
                      Create account
                    </button>
                  </div>
                  <div className="mt-3">
                    <Link to={"/login"}>
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
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </>
  );
}
