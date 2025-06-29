import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar - Hidden on small screens */}
      <div className="bg-primary text-white py-2 px-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+60 189621486</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>crepair276@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md py-3 px-4 relative">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <img
              src="public/logo.png"
              alt="Fast Repair Logo"
              className="w-32 h-auto object-contain"
              style={{ maxHeight: "48px" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              ABOUT US
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              SERVICES
            </Link>
            <a
              href="/contact"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              CONTACT
            </a>
          </nav>

          {/* Desktop Book Now Button */}
          <Button className="bg-primary hover:bg-orange-600 text-white px-4 md:px-6 py-2 rounded-md hidden md:block transition-colors">
            <a href="/contact">Book Now</a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 lg:hidden border-t">
              <div className="container mx-auto px-4 py-4">
                {/* Contact Info for Mobile */}
                <div className="flex flex-col space-y-3 mb-6 pb-6 border-b border-gray-200 sm:flex-row sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone size={16} />
                    <span>03-2123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail size={16} />
                    <span>support@fastrepair.com</span>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-4 mb-6">
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    HOME
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    ABOUT US
                  </Link>
                  <Link
                    to="/services"
                    className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    SERVICES
                  </Link>
                  <Link
                    to="/blogs"
                    className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    BLOG
                  </Link>
                  <Link
                    to="/pricing"
                    className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    PRICING
                  </Link>
                  <Link
                    to="/faq"
                    className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    FAQ
                  </Link>
                  <a
                    href="/contact"
                    className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    CONTACT
                  </a>
                </nav>

                {/* Mobile Book Now Button */}
                <Button
                  className="w-full bg-primary hover:bg-orange-600 text-white py-3 rounded-md transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Book Now →
                </Button>

                {/* Social Links for Mobile */}
                <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t border-gray-200">
                  <Facebook
                    size={20}
                    className="text-gray-600 hover:text-primary cursor-pointer transition-colors"
                  />
                  <Twitter
                    size={20}
                    className="text-gray-600 hover:text-primary cursor-pointer transition-colors"
                  />
                  <Linkedin
                    size={20}
                    className="text-gray-600 hover:text-primary cursor-pointer transition-colors"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
