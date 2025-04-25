import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="sparetrack-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">SPARETRACK</h3>
          <p className="footer-description">
            Partner Andalian untuk Suku Cadang Berkualitas!
          </p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Navigasi</h3>
          <ul className="footer-links">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/kategori">Kategori</Link></li>
            <li><Link to="/tentang">Tentang Kami</Link></li>
            <li><Link to="/bantuan">Bantuan</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Kontak</h3>
          <ul className="footer-contact">
            <li>Email: info@sparetrack.id</li>
            <li>Telepon: +62 812 3456 7890</li>
            <li>Whatsapp: +62 812 3456 7890</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SPARETRACK. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 