import React from "react";
import { SiLeetcode, SiGmail } from "react-icons/si";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";

const Social = (props) => {
  const sz = props.size;
  return (
    <IconContext.Provider value={{ color: "white", size: sz }}>
      <a
        href="https://www.linkedin.com/in/ksnklekha"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icons-about-section"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="mailto:ksnklekha@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icons-about-section"
      >
        <SiGmail />
      </a>
      <a
        href="https://github.com/ksnklekha"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icons-about-section"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://leetcode.com/ksnklekha"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icons-about-section"
      >
        <SiLeetcode />
      </a>
    </IconContext.Provider>
  );
};

export default Social;
