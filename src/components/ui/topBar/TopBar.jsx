import React from "react";
import { Navigation } from "./Navigation";
import { Logo } from "../svg/Logo";

export const TopBar = () => {
  return (
    <div className="topbar p-5 md:px-20 lg:py-5 lg:px-32 flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
};