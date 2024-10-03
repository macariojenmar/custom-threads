import React, { Fragment } from "react";

export const Banner = () => {
  return (
    <Fragment>
      <div className="homepage-banner px-5 py-12 md:px-32 md:py-24 lg:px-64 lg:py-28 flex flex-col-reverse md:flex-row gap-10 items-center">
        <div className="md:w-7/12">
          <h1 className="oleo-font text-4xl md:text-7xl font-black text-accent-rose mb-3">Unleash Your Creativity!</h1>
          <h1 className="text-2xl md:text-5xl font-semibold leading-tight mb-5">Explore our customization options and create a shirt that truly represents you!</h1>
          <p>Choose from a variety of styles, colors, and fabrics to create the perfect t-shirt that fits your vibe. Select your preferred design, adjust the size and placement, and choose from different shirt types to make it uniquely yours. It’s not just a shirt, it’s a canvas for your creativity!</p>
          <button className="mt-5">Explore</button>
        </div>
        <div className="flex flex-1 justify-end md:relative">
          <img
            src="/BannerImage.png"
            className="h-96 md:h-auto md:absolute md:-top-72"
          />
        </div>
      </div>
    </Fragment>
  );
};