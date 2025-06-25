import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  ArrowRight,
  Shield,
  LifeBuoy,
  Smartphone,
  BatteryCharging,
  Droplet,
  Cpu,
  Wifi,
  Volume2,
  Camera,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useDiscoveredContent } from "@/utils/contentDiscovery";

// Add as many relevant mobile repair sections as possible
const pricingSections = [
  {
    category: "Screen Repairs",
    items: [
      { service: "iPhone Screen Replacement", price: "RM 180 - RM 350" },
      { service: "Samsung Screen Replacement", price: "RM 150 - RM 280" },
      { service: "Huawei Screen Replacement", price: "RM 120 - RM 250" },
      { service: "Xiaomi Screen Replacement", price: "RM 100 - RM 200" },
      { service: "OnePlus Screen Replacement", price: "RM 130 - RM 280" },
      { service: "Oppo/Vivo Screen Replacement", price: "RM 120 - RM 230" },
    ],
    icon: <Smartphone className="w-6 h-6 text-primary mr-2" />,
  },
  {
    category: "Battery Services",
    items: [
      { service: "iPhone Battery Replacement", price: "RM 80 - RM 120" },
      { service: "Samsung Battery Replacement", price: "RM 70 - RM 100" },
      { service: "Huawei Battery Replacement", price: "RM 60 - RM 90" },
      { service: "Battery Health Check", price: "RM 20" },
      { service: "Battery Calibration", price: "RM 30" },
    ],
    icon: <BatteryCharging className="w-6 h-6 text-primary mr-2" />,
  },
  {
    category: "Water Damage Repair",
    items: [
      { service: "Water Damage Assessment", price: "RM 50" },
      { service: "Basic Water Damage Repair", price: "RM 150 - RM 300" },
      { service: "Advanced Motherboard Repair", price: "RM 200 - RM 500" },
      { service: "Data Recovery Service", price: "RM 100 - RM 250" },
    ],
    icon: <Droplet className="w-6 h-6 text-primary mr-2" />,
  },
  {
    category: "Motherboard & IC Repair",
    items: [
      { service: "Charging IC Replacement", price: "RM 100 - RM 250" },
      { service: "Power IC Replacement", price: "RM 120 - RM 280" },
      { service: "Touch IC Repair", price: "RM 130 - RM 300" },
      { service: "Network IC Repair", price: "RM 120 - RM 260" },
    ],
    icon: <Cpu className="w-6 h-6 text-primary mr-2" />,
  },
  {
    category: "Connectivity Issues",
    items: [
      { service: "WiFi/Bluetooth Repair", price: "RM 80 - RM 180" },
      { service: "Signal/Network Repair", price: "RM 100 - RM 200" },
      { service: "SIM Reader Repair", price: "RM 70 - RM 150" },
    ],
    icon: <Wifi className="w-6 h-6 text-primary mr-2" />,
  },
  {
    category: "Audio & Camera Services",
    items: [
      { service: "Microphone Repair", price: "RM 80 - RM 120" },
      { service: "Speaker Repair", price: "RM 80 - RM 120" },
      { service: "Camera Replacement", price: "RM 120 - RM 220" },
      { service: "Ear Speaker Repair", price: "RM 70 - RM 110" },
    ],
    icon: <Volume2 className="w-6 h-6 text-primary mr-2" />,
  },
  {
    category: "Camera & Face ID",
    items: [
      { service: "Front Camera Replacement", price: "RM 90 - RM 200" },
      { service: "Rear Camera Replacement", price: "RM 130 - RM 250" },
      { service: "Face ID/Touch ID Repair", price: "RM 180 - RM 350" },
    ],
    icon: <Camera className="w-6 h-6 text-primary mr-2" />,
  },
  {
    category: "Other Services",
    items: [
      { service: "Software Update/Restore", price: "RM 40 - RM 100" },
      { service: "Data Transfer & Backup", price: "RM 50 - RM 120" },
      { service: "Device Cleaning & Maintenance", price: "RM 40" },
      { service: "Device Diagnosis", price: "Free" },
    ],
    icon: <RefreshCw className="w-6 h-6 text-primary mr-2" />,
  },
];

const Pricing = () => {
  // For the services section below
  const { items: services, loading, error } = useDiscoveredContent("services");

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
      <Header />

      {/* Breadcrumb and Main Heading */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">
              Pricing
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-1">
              Our Best <span className="text-primary">Pricing</span>
            </h1>
            <nav className="text-gray-400 text-sm flex items-center gap-2">
              <span className="hover:text-primary transition-colors">
                <Link to="/">Home</Link>
              </span>
              <span>/</span>
              <span className="hover:text-primary transition-colors">
                <Link to="#">Pricing</Link>
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* Top Card Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="rounded-xl overflow-hidden shadow-lg flex justify-center bg-[#f5f7fa]">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Device Repair"
              className="object-cover w-full max-w-md h-80"
            />
          </div>
          {/* Right: Service Feature Card */}
          <div>
            <span className="inline-block uppercase text-primary font-bold text-xs mb-3 tracking-widest">
              Core Service
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              First Aid, For All Your Device Problem
            </h2>
            <p className="text-gray-600 mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center rounded-lg border border-orange-200 bg-orange-50 p-4">
                <LifeBuoy className="text-primary w-8 h-8 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Same Day Repairs</h4>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet ut labore consectetur
                  </p>
                </div>
              </div>
              <div className="flex items-center rounded-lg border border-orange-200 bg-orange-50 p-4">
                <Shield className="text-primary w-8 h-8 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Guarantee Service</h4>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet ut labore consectetur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Repair Pricing Sections */}
      <section className="w-full bg-[#f5f7fa] py-14">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
              Affordable Mobile Repair Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for all major repairs. Free diagnosis and
              90-day warranty on all services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingSections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex-1"
              >
                <div className="flex items-center mb-4">
                  {section.icon}
                  <h4 className="text-lg font-extrabold text-gray-900">
                    {section.category}
                  </h4>
                </div>
                <ul>
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-800">{item.service}</span>
                      <span className="text-primary font-bold">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards Section (like your ServicesSection) */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="text-primary text-sm font-semibold mb-2">
              OUR SERVICES
            </div>
            <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
            <div className="flex items-center justify-center mt-4">
              <span className="text-gray-600">Home</span>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-600">Services</span>
            </div>
          </div>
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading services...</p>
            </div>
          )}
          {error && (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
            </div>
          )}
          {!loading && !error && services && (
            <div className="grid md:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {service.price && (
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {service.price}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <div className="mb-4 prose prose-sm max-w-none text-gray-600">
                      <ReactMarkdown>{service.description}</ReactMarkdown>
                    </div>
                    <Link to={`/services/${service.id}`}>
                      <Button className="bg-primary hover:bg-orange-600 text-white">
                        Learn More <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-10">
            <Link to="/services">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Support CTA Bar */}
      <section
        className="relative bg-[#232323] py-16 flex items-center justify-center"
        style={{
          background: `linear-gradient(rgba(30,30,30,0.9),rgba(30,30,30,0.9)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center/cover no-repeat`,
        }}
      >
        <div className="container mx-auto text-center">
          <span className="uppercase text-orange-500 font-semibold tracking-widest text-xs mb-3 block">
            Call Now Today
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Get support for your problem
          </h2>
          <p className="text-gray-200 max-w-xl mx-auto mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <Button className="bg-primary hover:bg-orange-600 text-white font-bold px-8 py-3 text-lg rounded shadow">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
