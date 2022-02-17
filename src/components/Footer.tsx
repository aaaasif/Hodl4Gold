import React from "react";
import "./Header/Header.scss";
import { Logo } from ".";

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <Logo />
        <p className="mt-15">All Rights Reserved HODL4GOLD Corporation © 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
