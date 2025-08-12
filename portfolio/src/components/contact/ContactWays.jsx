import React from "react";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiLinkedin } from "react-icons/si";


const ContactWays = () => {
  

  return (
    <div className="pb-8 pt-4 rounded-2xl shadow-green-600">
      <div className="flex justify-center pb-8">
        <p className="text-green-600 sm:text-xl">Connect With Me:</p>
      </div>
      <div className="rounded-full cursor-pointer flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/aryan-baakle-b90426295/">
          {" "}
          <img
            src={linkedin}
            alt="LinkedIn"
            className="border-2 border-green-600 rounded-full w-16 h-16 hover:scale-110 transition-transform duration-400 hover:bg-green-600"
          />
        </a>
        
        <a href="https://github.com/KRAKEN0067">
          {" "}
          <img
            src={github}
            alt="Github"
            className="border-2 border-green-600 rounded-full w-16 h-16 hover:scale-110 transition-transform duration-400 hover:bg-green-600"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactWays;
