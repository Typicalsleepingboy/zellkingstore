import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`mt-20 border-t backdrop-blur-sm ${
      isDarkMode 
        ? 'bg-slate-900/50 border-slate-700/50' 
        : 'bg-white/50 border-slate-200/50'
    }`}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Zellsking
            </h3>
            <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Platform terpercaya untuk berinteraksi langsung dengan member JKT48 favorit Anda. 
              Dapatkan pesan eksklusif dan pengalaman tak terlupakan.
            </p>
            <div className="flex items-center">
              <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Made with
              </span>
              <Heart className="w-4 h-4 text-red-500 mx-2" />
              <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                for JKT48 fans
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className={`text-sm hover:text-blue-500 transition-colors ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Available Members
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm hover:text-blue-500 transition-colors ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm hover:text-blue-500 transition-colors ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm hover:text-blue-500 transition-colors ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-blue-500 mr-3" />
                <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  support@zellsking.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-blue-500 mr-3" />
                <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  +62 812-3456-7890
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-blue-500 mr-3" />
                <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Jakarta, Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t text-center ${
          isDarkMode ? 'border-slate-700/50' : 'border-slate-200/50'
        }`}>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            © 2024 Zellsking. All rights reserved. | JKT48 Member Messages Platform
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;