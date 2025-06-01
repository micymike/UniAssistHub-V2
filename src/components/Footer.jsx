import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`py-8 ${isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'} border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">UniAssist Hub</h3>
            <p className="mb-4">Your trusted partner for academic success. We provide professional assistance for all your educational needs.</p>
            <p>&copy; {new Date().getFullYear()} UniAssist Hub. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Order Now', 'Track Order', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Phone: +254 790 889 066</li>
              <li>WhatsApp: +254 789 296 373</li>
              <li>Email: info@uniassisthub.co.ke</li>
              <li>Location: Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;