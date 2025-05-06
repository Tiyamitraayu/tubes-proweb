import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';

// Components
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import NotificationPanel from './components/NotificationPanel';

// Context
import AuthProvider from './context/AuthContext';

function App() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleToggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-container">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Main layout with navbar and footer */}
            <Route 
              path="/" 
              element={
                <Layout onNotificationToggle={handleToggleNotification} />
              }
            >
              {/* Public routes within layout */}
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              
              {/* Protected routes */}
              <Route element={<PrivateRoute />}>
                {/* Add protected routes here */}
                {/* Example: <Route path="dashboard" element={<Dashboard />} /> */}
              </Route>
              
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          
          {/* Notification Panel */}
          <NotificationPanel 
            isOpen={isNotificationOpen} 
            onClose={() => setIsNotificationOpen(false)} 
          />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
