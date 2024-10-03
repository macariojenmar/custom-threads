import React, { Fragment, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import { List, ShoppingBag, User } from "@phosphor-icons/react";
import { PAGELIST } from "./Pagelist";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export const Navigation = () => {
  let { pathname: location } = useLocation();
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

  return (
    <Fragment>
      <div className="flex items-center">
        <div className="md:flex  space-x-6 hidden">
          {
            PAGELIST?.map((item, index) => {
              return (
                <Link to={item?.to} key={index}>
                  <p className={`link ${location === item?.to && 'text-highlight-yellow font-semibold'} no-underline`}>{item?.title}</p>
                </Link>
              );
            })
          }
        </div>
        <div className="flex flex-row space-x-3" >
          <div className="ml-10 icon-btn">
            <User size={20} />
          </div>
          <div className="icon-btn">
            <ShoppingBag size={20} />
          </div>
          <div className="md:hidden icon-btn" onClick={() => setOpenMenuDrawer(true)}>
            <List size={20} />
          </div>
        </div>
      </div>
      <Dialog open={openMenuDrawer} onClose={() => setOpenMenuDrawer(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="backdrop"
        />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-xs transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-70"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-accent-rose p-5 shadow-xl text-white">
                  {
                    PAGELIST?.map((item, index) => {
                      return (
                        <Link to={item?.to} key={index}>
                          <p className={`link ${location === item?.to && 'text-highlight-yellow font-semibold'} no-underline`}>{item?.title}</p>
                        </Link>
                      );
                    })
                  }
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </Fragment>
  );
}