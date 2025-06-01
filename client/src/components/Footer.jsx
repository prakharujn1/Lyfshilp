import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
    <footer className="bg-[#2F4F2F] text-gray-200 pt-16 pb-8 px-6"
    style={{background: "linear-gradient(90deg,rgba(81, 121, 31, 0.98) 0%,rgb(42, 98, 12) 50%,rgb(24, 72, 2) 100%)"}}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-x-12 gap-y-10">
        {/* Company Info */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">
            LyfShilp Academy
          </h2>
          <p className="text-sm mb-4 text-white">
            Transform your life through learning. Explore expert-led programs
            designed for growth.
          </p>
          <div className="flex items-center gap-3 text-sm text-white mb-2">
            <FaEnvelope className="text-[#2A4759]" />
            <span>service.excellence@lyfshilpacademy.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white">
            <FaPhoneAlt className="text-[#2A4759]" />
            <span>+91 98765 43210</span>
          </div>
        </motion.div>

        {/* Explore */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="font-semibold mb-3 text-white">Explore</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <Link to="/about" className="hover:text-[#2A4759] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-[#2A4759] transition">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/faq's" className="hover:text-[#2A4759] transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#2A4759] transition">
                Blog
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="font-semibold mb-3 text-white">Legal</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-[#2A4759] transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#2A4759] transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/refund-policy"
                className="hover:text-[#2A4759] transition"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="font-semibold mb-3 text-white">Subscribe</h3>
          <p className="text-sm mb-3 text-white">
            Get updates on courses, webinars and more.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-full border border-gray-600 bg-[#2A4759] text-white placeholder-white focus:outline-none focus:ring-2 w-full text-sm"
            />
          </form>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className="border-t border-gray-700 my-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      ></motion.div>

      {/* Bottom Row */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-2 text-sm text-gray-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-white text-sm font-semibold">
          &copy; 2025 LyfShilp Academy. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-[#2A4759] transition text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="hover:text-[#2A4759] transition text-2xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-[#2A4759] transition text-2xl" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
