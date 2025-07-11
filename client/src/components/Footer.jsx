import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-between items-center ">
        <div className="h-80 w-80 -mb-57">
          <img src="/4.gif" alt="teddy" />
        </div>
        <div className="w-full h-[40vh] bg-[url('/footerbg.png')]  bg-cover bg-center bg-no-repeat "> 

        </div>
        
      </div>
      <div className="h-[50vh] bg-gray-100 flex items-end">
      
      <footer className="w-full bg-green-600 text-white py-13" style={{ backgroundColor: '#068F36' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Company Info Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Edumaniax Pvt. Ltd.</h2>
                
                {/* Social Icons */}
                <div className="flex gap-3 mb-6">
                  <a href="#" className="w-6 h-6 bg-white rounded flex items-center justify-center text-xs font-bold" style={{ color: '#068F36' }}>
                    in
                  </a>
                  <a href="#" className="w-6 h-6 bg-white rounded flex items-center justify-center text-xs font-bold" style={{ color: '#068F36' }}>
                    X
                  </a>
                  <a href="#" className="w-6 h-6 bg-white rounded flex items-center justify-center text-xs font-bold" style={{ color: '#068F36' }}>
                    @
                  </a>
                </div>
                
                <p className="text-sm leading-relaxed mb-6 max-w-xs">
                  Transform your life through learning. Explore expert-led programs designed for growth.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span className="text-sm">service.excellence@iyfshipacademy.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span className="text-sm">+91 8595034205</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Explore Section */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Explore</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:opacity-80 transition-opacity">About Us</a></li>
                <li><a href="#" className="text-sm hover:opacity-80 transition-opacity">Courses</a></li>
                <li><a href="#" className="text-sm hover:opacity-80 transition-opacity">Blogs</a></li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:opacity-80 transition-opacity">Privacy Policy</a></li>
                <li><a href="#" className="text-sm hover:opacity-80 transition-opacity">Terms & Conditions</a></li>
                <li><a href="#" className="text-sm hover:opacity-80 transition-opacity">Refund Policy</a></li>
              </ul>
            </div>

            {/* Subscribe Section */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
              <p className="text-sm mb-5 leading-relaxed">
                Get updates on courses, webinars and more.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-green-600 py-3 px-4 rounded-md font-medium hover:bg-gray-100 transition-colors" style={{ color: '#068F36' }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-green-500">
            <p className="text-sm">© 2025 Edumaniax. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </div>
    
  );
};

export default Footer;