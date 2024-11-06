import React, { useState } from "react";
import {FaRegEye,FaRegEyeSlash} from "react-icons/fa6";

export const Password = ({ value, onchange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="flex  w-96  items-center bg-transparent rounded mb-3">
      <input
        value={value}
        onChange={onchange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "password"}
        className="w-80 text-lg mr-3 px-5 py-2 bg-transparent border-solid border-2 rounded mb-4 outline-none  "
      />
      {isShowPassword?(<FaRegEye 
      size={22}
      className="text-primary cursor-pointer mb-5"
      onClick={()=>toggleShowPassword()}
      />):(
        <FaRegEyeSlash
        size={22}
        className="text-slate-400 cursor-pointer "
        onClick={()=>toggleShowPassword()}
        />
      )}
    </div>
  );
};
