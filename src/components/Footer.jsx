import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email:sales@scholarrank.com</p>
          <p>Phone:+91 7258876459</p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul>
            <li className="mb-2">
              <Link to="/privacy-policy" className="hover:text-caribbeangreen-100">Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <Link to="/playstore" className="hover:text-caribbeangreen-100">Playstore</Link>
            </li>
            <li className="mb-2">
              <Link to="/terms-of-service" className="hover:text-caribbeangreen-100">Terms of Service</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://x.com/ScholarRankAI" target="_blank" rel="noopener noreferrer" className="text-white hover:text-caribbeangreen-100">
              <FaXTwitter size={24} />
            </a>
            <a href="https://www.facebook.com/Scholarrank/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-caribbeangreen-100">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/scholarrank/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-caribbeangreen-100">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/scholarrank/about/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-caribbeangreen-100">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Statement */}
      <div className="mt-10 text-center   pt-6">
        <p>&copy; 2024 ScholarRank AI. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
