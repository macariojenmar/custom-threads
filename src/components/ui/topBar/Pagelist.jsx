import React from "react";
import HomePage from "../../pages/HomePage";

export const PAGELIST = Object.freeze([
  {
    to: '/',
    title: 'Home',
    component: <HomePage />
  },
  {
    to: '/saved-designs',
    title: 'Saved Designs',
    component: <div>Saved Designs</div>
  },
  {
    to: '/about',
    title: 'About',
    component: <div>About</div>
  }
])
