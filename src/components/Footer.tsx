import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const serviceLinks = [
  {
    to: "/services/iphone-samsung-back-glass-repair",
    label: "iPhone & Samsung Back Glass Repair",
  },
  {
    to: "/services/iphone-samsung-glass-repair",
    label: "iPhone & Samsung Glass Repair",
  },
  { to: "/services/water-damage-repair", label: "Water Damage Repair" },
  { to: "/services/wifi-issues", label: "WiFi Issues" },
  {
    to: "/services/iphone-android-motherboard-repair",
    label: "Motherboard Repair",
  },
  { to: "/services/network-issues", label: "Network Issues" },
  { to: "/services/charging-issues", label: "Charging Issues" },
  { to: "/services/battery-replacement", label: "Battery Replacement" },
  { to: "/services/body-changing", label: "Body/Frame Changing" },
  {
    to: "/services/power-volume-button-issue",
    label: "Power/Volume Button Issue",
  },
  { to: "/services/camera-issue", label: "Camera Issue" },
  { to: "/services/speaker-mic-issue", label: "Speaker & Mic Issue" },
];

const Footer = () => {
  // Show only a subset if the list is too long for design (e.g., first 6)
  const visibleServices = serviceLinks.slice(0, 6);
  const moreServices = serviceLinks.length > visibleServices.length;

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
         <div>
  <div className="flex items-center space-x-3 mb-6">
    <img
      src="/logo.png"
      alt="Fast Repair Logo"
      className="w-32 h-auto object-contain"
      style={{ maxHeight: "48px" }}
    />
  </div>
  <p className="text-gray-400 mb-6">
    We pride ourselves on same-day repairs, original quality parts,
    and honest pricing. Whether it’s a broken screen, battery issue,
    software problem, or water damage, we’ve got you covered!
  </p>
</div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-primary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {visibleServices.map((service) => (
                <li key={service.to}>
                  <Link
                    to={service.to}
                    className="text-gray-400 hover:text-primary"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
              {moreServices && (
                <li>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-primary"
                  >
                    View All Services →
                  </Link>
                </li>
              )}
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
          <p className="text-gray-400">Fast Repair - Copyright © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
