import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { LuArrowRight } from 'react-icons/lu';

const Contact = ({ contactRef, isDarkMode }) => {
  return (
    <section ref={contactRef} className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl opacity-80">We're here to help with your academic needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: <Phone className="w-6 h-6" />, title: "Phone", value: "+254 790 889 066", link: "tel:+254790889066" },
                { icon: <MessageCircle className="w-6 h-6" />, title: "WhatsApp", value: "+254 789 296 373", link: "https://wa.me/254789296373" },
                { icon: <Mail className="w-6 h-6" />, title: "Email", value: "info@uniassisthub.co.ke", link: "mailto:info@uniassisthub.co.ke" },
                { icon: <MapPin className="w-6 h-6" />, title: "Location", value: "Nairobi, Kenya", link: "https://www.google.com/maps/place/JKUAT+Towers/@-1.2843243,36.8184763,871m/data=!3m1!1e3!4m14!1m7!3m6!1s0x182f10d69428395d:0x5feca0500bd24aeb!2sJKUAT+Towers!8m2!3d-1.2843243!4d36.8210512!16s%2Fg%2F11gfp8gplq!3m5!1s0x182f10d69428395d:0x5feca0500bd24aeb!8m2!3d-1.2843243!4d36.8210512!16s%2Fg%2F11gfp8gplq?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"}
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-blue-600">{item.icon}</div>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    {item.link ? (
                      <a href={item.link} className="text-blue-600 hover:underline">{item.value}</a>
                    ) : (
                      <div className="opacity-70">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`} // Placeholder links
                    className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105`}
                    aria-label={`Follow us on ${social}`}
                  >
                    <span className="text-sm font-semibold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`px-4 py-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`px-4 py-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className={`w-full px-4 py-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                Send Message <LuArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;