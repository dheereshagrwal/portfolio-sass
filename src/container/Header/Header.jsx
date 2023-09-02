"use client";
import Link from "next/link";
import { AppWrap } from "../../wrapper";
import HeaderText from "./HeaderText";
import Social from "./Social";

const Header = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between text-zinc-300"
      id="home"
    >
      <aside className="flex flex-col gap-4 mt-10 lg:m-10 font-dm-sans w-full lg:w-6/12 xl:w-5/12">
        <HeaderText />
        {/* button to view CV */}
        <Link
          href="https://drive.google.com/file/d/1B32Dcsmr-1fQStcyyvHlbJ0RCNBjdOx0/view?usp=sharing"
          className="hvr-shrink w-64 mt-8"
          target="_blank"
          rel="noreferrer"
        >
          <li className="bg-black text-white mt-4 text-xl transform-gpu font-bold py-2 px-4 hover:rounded-full w-8/12 font-poppins flex items-center justify-between">
            <span>View CV</span>
            <i className="fa-solid fa-eye text-white"></i>
          </li>
        </Link>
      </aside>
      <aside className="xl:mr-28 lg:mr-10 mt-16 w-full md:w-7/12 lg:w-5/12 xl:w-3/12">
        <Social />
      </aside>
    </div>
  );
};

export default AppWrap(Header, "home", "bg-zinc-900");
