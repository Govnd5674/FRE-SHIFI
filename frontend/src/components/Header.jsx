import React from "react";

const Header = () => {
  return (
    <div className='header h-[34vw] my[30px] mx-auto bg-[url("header_img.png")] bg-no-repeat bg-contain relative '>
      <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn animation-duration-[3s] " style={ {animation: 'fadeIn 3s '} } >
        <h2 className="font-medium text-[#fff] text-[max(4.5vw,22px)] ">
          Order Your Fav Food Here
        </h2>
        <p className="text-[#fff] text-[1vw] ">
          Choose from a diverse menu featuring delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-[#fff] text-[max(1vw,13px)] rounded-[50px] ">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
