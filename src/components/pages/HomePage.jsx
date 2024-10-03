import React, { Fragment, useState } from "react";
import { Banner } from "./Banner";
import { BookmarkSimple, PaintBrush, ShoppingBag } from "@phosphor-icons/react";
import { PESO_SYMBOL } from "../../enums/enums";
import { SVG_DESIGNS } from "../../enums/dummyData";
import { CustomizeShirtSection } from "../ui/customization/CustomizeShirtSection";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const HomePage = () => {
  const [openCustomizationDrawer, setOpenCustomizationDrawer] = useState(false)
  const [customization, setCustomization] = useState({
    type: 'shirt',
    designSize: 'medium',
    shirtColor: 'grey',
    shirtSize: 'h-44'
  });

  const iconButtons = [
    {
      key: 'save',
      icon: <BookmarkSimple size={20} />
    },
    {
      key: 'bag',
      icon: <ShoppingBag size={20} />
    }
  ];

  const handleSelectCustomization = (key, value) => {
    setCustomization((prev) => ({ ...prev, [key]: value }))
  };

  return (
    <Fragment>
      <Banner />
      <Dialog open={openCustomizationDrawer} onClose={() => setOpenCustomizationDrawer(false)} className="relative z-10">
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
                  <CustomizeShirtSection
                    handleSelectCustomization={handleSelectCustomization}
                    customization={customization}
                  />
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <div className="grid grid-cols-12 gap-7 mt-4 p-5 md:pl-32 lg:pl-40 lg:pr-12 py-5">
            <div className="col-span-12">
              <div className="flex justify-between items-center md:hidden">
                <div>
                  <h2 className="oleo-font text-2xl md:text-4xl text-white">Explore New Designs</h2>
                </div>
                <div className="text-white rounded-full bg-accent-rose p-2" onClick={() => setOpenCustomizationDrawer(true)}>
                  <PaintBrush size={20} />
                </div>
              </div>
            </div>
            {
              SVG_DESIGNS?.map((design, index) => {
                return (
                  <div key={`design-key-${index}`} className="col-span-12 md:col-span-6 lg:col-span-4 text-white">
                    <div className="card">
                      <div className="relative">
                        <div className="flex space-x-2 absolute right-0 z-10">
                          {
                            iconButtons?.map((button, index) => {
                              return (
                                <div key={`button-key-${index}`} className="bg-accent-rose p-2 text-white rounded-full cursor-pointer">
                                  {button?.icon}
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                      <div className="flex items-center justify-center relative">
                        <img src={`/shirt/${customization.shirtColor}-${customization.type}.png`} className="h-80 lg:h-96" />
                        <div className="absolute top-14 lg:top-20">
                          <img className={`${customization?.shirtSize}`} src={design?.image} />
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <h1 className="oleo-font text-3xl mt-2 font-bold text-highlight-yellow">{design?.title}</h1>
                        <h1 className="text-xl mt-2 font-bold">{PESO_SYMBOL} {design?.price}</h1>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="customize-section hidden md:flex md:col-span-3 lg:col-span-2 p-10 text-white">
          <CustomizeShirtSection
            handleSelectCustomization={handleSelectCustomization}
            customization={customization}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;