import React from "react";
import Logo from "../assets/Sabz City.png";
import { Link, NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const handlesubmit = () => {
    navigate("/studio");
  };
  return (
    <>
      <div className="flex justify-between  items-center mx-10">
        <div className="">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="w-52" />
          </Link>
        </div>
        <div className="">
          <button
            onClick={handlesubmit}
            className="bg-[#000000] text-white text-xl px-5 py-3 rounded uppercase cursor-pointer"
          >
            book a studio
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
