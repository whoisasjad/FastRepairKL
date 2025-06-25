
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold">FAST REPAIR</h3>
                <p className="text-sm text-gray-400">GADGET REPAIR SERVICES</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600">
                <Facebook size={16} />
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600">
                <Twitter size={16} />
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600">
                <Linkedin size={16} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary">Services</Link></li>
              <li><Link to="/blogs" className="text-gray-400 hover:text-primary">Blog</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-primary">Pricing</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-primary">FAQ</Link></li>
              <li><a href="/contact" className="text-gray-400 hover:text-primary">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/smartphone-repair" className="text-gray-400 hover:text-primary">Smartphone Repair</Link></li>
              <li><Link to="/services/laptop-repair" className="text-gray-400 hover:text-primary">Laptop Repair</Link></li>
              <li><Link to="/services/tablet-repair" className="text-gray-400 hover:text-primary">Tablet Repair</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Desktop Repair</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Smart Watch Repair</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Subscribe</h4>
            <div className="space-y-4">
              <Input 
                type="email" 
                placeholder="Your Email"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="w-full bg-primary hover:bg-orange-600 text-white">
                Subscribe Now →
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Stay always in touch! Subscribe to our newsletter.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            Fast Repair - Copyright © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
