import React from "react";
import { FaDiscord, FaYoutube, FaTiktok } from "react-icons/fa";

const footerLinks = [
  { name: "Home", link: "/" },
  { name: "News", link: "/news" },
  // { name: "Store", link: "/store" },
  // { name: "Community", link: "/community" },
  // { name: "Items", link: "/items" },
  // { name: "Classes", link: "/classes" },
];

const socialLinks = [
  { name: "Discord", link: "/", icon: FaDiscord },
  { name: "YouTube", link: "/", icon: FaYoutube },
  { name: "TikTok", link: "/", icon: FaTiktok },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div className="max-w-[1480px] mx-auto px-6">

        {/* Main Footer */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Logo / Description */}
          <div className="flex flex-col items-start">
            <img
              src="/images/model01.png"
              alt="logo"
              className="h-16 w-auto mb-5"
            />

            <p className="text-gray-400 max-w-sm leading-relaxed">
              Enter a world of adventure, exploration, and endless
              possibilities. Join our community and begin your journey.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-6">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.link}
                    aria-label={item.name}
                    className="text-2xl text-gray-400 hover:text-yellow-400 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Navigation
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Community
            </h3>

            <p className="text-gray-400 leading-relaxed mb-5">
              Stay connected with the community and never miss
              the latest news and updates.
            </p>

            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <FaDiscord />
              Join Discord
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Your Server. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="hover:text-white transition"
            >
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;