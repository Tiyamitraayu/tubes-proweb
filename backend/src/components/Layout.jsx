import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ onNotificationToggle }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNotificationToggle={onNotificationToggle} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout; 