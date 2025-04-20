/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar py-[20px] flex justify-between items-center ">
      <img src={assets.logo} alt="" className="logo w-[180px] " />
      <ul className="navbar-menu flex list-none gap-[20px] text-[#49557e] text-[18px] ">
        <li
          onClick={() => setMenu("home")}
          className={
            menu === "home"
              ? "active pb-[2px] border-b-[2px] border-[#49557e] cursor-pointer "
              : " cursor-pointer"
          }
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={
            menu === "menu"
              ? "active pb-[2px] border-b-[2px] cursor-pointer"
              : " cursor-pointer"
          }
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app"
              ? "active pb-[2px] border-b-[2px] cursor-pointer"
              : " cursor-pointer"
          }
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={
            menu === "contact us"
              ? "active pb-[2px] border-b-[2px] cursor-pointer"
              : " cursor-pointer"
          }
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right flex items-center gap-[40px]">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative">
          <img src={assets.basket_icon} alt="" />
          <div className="dot absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px] "></div>
        </div>
        <button className="transperent text-[16px] text-[#49557e] border-[1px] py-[10px] cursor-pointer transition-[duration:0.3s] hover:bg-[#fff4f2] rounded-[50px] px-[30px]  border-[tomato]">
          sign in
        </button>
      </div>
    </div>
  );
};

export default navbar;
