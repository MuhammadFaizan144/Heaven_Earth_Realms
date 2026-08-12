import React, { useState } from "react";
import {
  FaDiscord,
  FaYoutube,
  FaTiktok,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navbarlinks = [
  { name: "Home", link: "/" },
  { name: "News", link: "/news" },
  { name: "Store", link: "/" },
  { name: "Community", link: "/" },
  { name: "Items", link: "/" },
  { name: "Classes", link: "/" },
];

const navIcons = [
  { link: "/", icons: FaDiscord },
  { link: "/", icons: FaYoutube },
  { link: "/", icons: FaTiktok },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-black/80 backdrop-blur-md text-white">
        <div className="max-w-[1680px] mx-auto h-20 px-6 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-5">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-3xl"
              onClick={() => setOpen(true)}
            >
              <FaBars className=""/>
            </button>

            {/* Social Icons */}
            <ul className="flex items-center gap-4">
              {navIcons.map((item, index) => {
                const Icon = item.icons;
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-2xl hover:text-yellow-400 transition"
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Center Links (Desktop Only) */}
          <ul className="hidden lg:flex items-center gap-4 text-lg font-medium ">
            {navbarlinks.map((item, index) => (
              <li key={index} className="border border-red-400 px-10 py-2">
                <a
                  href={item.link}
                  className="hover:text-yellow-400 transition "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Logo */}
          <div>
            <img
              src="/images/model01.png"
              alt="logo"
              className="h-14 w-auto"
            />
          </div>
        </div>
      </nav>

      {/* Background Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-2/5 bg-neutral-900 text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <img
            src="/images/model01.png"
            alt="logo"
            className="h-10"
          />

          <button
            onClick={() => setOpen(false)}
            className="text-2xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <ul className="flex flex-col py-5">
          {navbarlinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="block px-6 py-4 hover:bg-neutral-800 transition"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="absolute bottom-8 left-6 flex gap-5 text-2xl">
          {navIcons.map((item, index) => {
            const Icon = item.icons;
            return (
              <a
                href={item.link}
                key={index}
                className="hover:text-yellow-400 transition"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;