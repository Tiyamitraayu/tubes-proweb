import React, { useState } from 'react';

const NotificationPanel = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('transaksi');

  return (
    <div className={`notification-panel ${isOpen ? 'open' : ''}`}>
      <div className="notification-header">
        <h2 className="notification-title">Notifikasi</h2>
        <div className="nav-actions">
          <button onClick={onClose} className="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="notification-tabs">
        <div 
          className={`notification-tab ${activeTab === 'transaksi' ? 'active' : ''}`}
          onClick={() => setActiveTab('transaksi')}
        >
          Transaksi
        </div>
        <div 
          className={`notification-tab ${activeTab === 'update' ? 'active' : ''}`}
          onClick={() => setActiveTab('update')}
        >
          Update
        </div>
      </div>
      
      <div className="notification-content">
        {activeTab === 'transaksi' ? (
          <div className="notification-list empty">
            <p className="empty-message">Belum ada notifikasi transaksi</p>
          </div>
        ) : (
          <div className="notification-list empty">
            <p className="empty-message">Belum ada update terbaru</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPanel; 