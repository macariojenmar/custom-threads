import React, { Fragment } from "react";
import { Logo } from "../svg/Logo";
import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <Fragment>
      <div className="bg-highlight-yellow p-5 flex flex-col justify-center items-center space-y-2">
        <Logo customFill="#640D5F" threadsFill="#D91656"/>
        <p>Social Links</p>
        <div className="flex flex-row space-x-2">
          <FacebookLogo size={20} weight="bold" />
          <InstagramLogo size={20} weight="bold" />
          <XLogo size={20} weight="bold" />
        </div>
      </div>
      <div className="bg-accent-rose flex justify-center items-center text-white py-2 text-sm">
        © 2024 Custom Threads. All Rights Reserved
      </div>
    </Fragment>
  )
};