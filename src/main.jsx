import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TopBar } from './components/ui/topBar/TopBar';
import { PAGELIST } from './components/ui/topBar/Pagelist';
import { Footer } from './components/ui/footer/Footer';

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div className='flex flex-col min-h-screen'>
      <TopBar />
      <div className='flex-1'>
        <Routes>
          {
            PAGELIST?.map((item, index) => {
              return (
                <Route key={index} path={item?.to} element={item?.component} />
              )
            })
          }
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);