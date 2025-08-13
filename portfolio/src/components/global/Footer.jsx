import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,151,55,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(142,255,183,0.05),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Aryan Baakle
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full-stack developer passionate about creating innovative solutions and building the future of web technology.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About", href: "#About" },
                { name: "Skills", href: "#Skills" },
                { name: "Projects", href: "#Projects" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="group inline-flex items-center text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="relative">
                      {link.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-300"></div>
                    </span>
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="group p-3 rounded-xl bg-gray-800/50 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-green-600/20 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn 
                  size={20} 
                  className="text-gray-400 group-hover:text-green-400 transition-colors duration-300"
                />
              </a>
              <a 
                href="#" 
                className="group p-3 rounded-xl bg-gray-800/50 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-green-600/20 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
                aria-label="GitHub"
              >
                <PiGithubLogoFill 
                  size={20} 
                  className="text-gray-400 group-hover:text-green-400 transition-colors duration-300"
                />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-gray-950">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Aryan Baakle. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
