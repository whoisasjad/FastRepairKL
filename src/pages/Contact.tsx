import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICES = [
  "Smartphone Repair",
  "Laptop Repair",
  "Tablet Repair",
  "Water Damage",
  "Battery Replacement",
  "Screen Replacement",
  "Other",
];

const LOCATIONS = [
  {
    city: "New York",
    address: "71890 Champlin Neck",
    email: "support@domain.com",
    phone: "(+62) 81 322 1467",
    hours: "09:00 AM - 22:00 PM",
  },
  {
    city: "Texas",
    address: "71890 Champlin Neck",
    email: "support@domain.com",
    phone: "(+62) 81 322 1467",
    hours: "09:00 AM - 22:00 PM",
  },
];

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.sendForm(
        "service_1jz6f8q",
        "template_i350idj",
        form.current!,
        "qGUuOqAWd37NOIkz8"
      );
      setSent(true);
      if (form.current) form.current.reset();
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
      <Header />

      {/* Hero & Breadcrumb */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12 flex flex-col items-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Contact
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Contact <span className="text-primary">Us</span>
          </h1>
          <nav className="text-gray-400 text-sm flex items-center gap-2">
            <span className="hover:text-primary transition-colors">
              <a href="/">Home</a>
            </span>
            <span>/</span>
            <span>Contact</span>
          </nav>
        </div>
      </section>

      {/* Main Form/Info Section */}
      <section className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Form */}
          <div className="bg-[#e9eef3] rounded-md p-8 flex flex-col min-w-0">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Leave A Message
            </h2>
            {sent && (
              <div className="mb-4 text-green-600 font-semibold">
                Thank you! Your message has been sent.
              </div>
            )}
            {error && (
              <div className="mb-4 text-red-600 font-semibold">{error}</div>
            )}
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              autoComplete="off"
            >
              <div className="flex gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className="w-1/2 px-4 py-3 rounded bg-white border border-gray-200 focus:ring-primary focus:border-primary font-medium"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className="w-1/2 px-4 py-3 rounded bg-white border border-gray-200 focus:ring-primary focus:border-primary font-medium"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-1/2 px-4 py-3 rounded bg-white border border-gray-200 focus:ring-primary focus:border-primary font-medium"
                />
                <input
                  type="date"
                  name="date"
                  className="w-1/2 px-4 py-3 rounded bg-white border border-gray-200 focus:ring-primary focus:border-primary font-medium"
                />
              </div>
              <select
                name="service"
                required
                className="px-4 py-3 rounded bg-white border border-gray-200 focus:ring-primary focus:border-primary font-medium"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Services
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Comment"
                rows={4}
                required
                className="px-4 py-3 rounded bg-white border border-gray-200 focus:ring-primary focus:border-primary font-medium"
              />
              <Button
                className="bg-primary hover:bg-orange-600 text-white mt-2 uppercase font-semibold px-6 py-3 text-sm rounded shadow w-max"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message →"}
              </Button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div>
            <span className="uppercase text-primary font-semibold text-xs mb-2 block flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" /> Get In Touch
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
              Visit One Of Our Agency
              <br />
              Contact Us Today
            </h2>
            <p className="text-gray-600 mb-6">
              Duis aute irure dolor in repreh enderit in volupt tate cillum
              dolore eu fugiat nulla dolor atur with Lorem ipsum is simply free
              market web bites eius mod ut labore duis
            </p>
            <div className="grid grid-cols-2 gap-6 border-t pt-6">
              {LOCATIONS.map((loc) => (
                <div key={loc.city}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {loc.city}
                  </h3>
                  <div className="flex items-start gap-2 text-gray-700 mb-1">
                    <MapPin className="w-4 h-4 text-primary mt-1" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 mb-1">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>{loc.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 mb-1">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Find Us On Map
          </h2>
        </div>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow border border-gray-200">
          <iframe
            title="Main Branch Map"
            src="https://www.google.com/maps?q=3.14389705657959,101.709083557129&output=embed"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}
