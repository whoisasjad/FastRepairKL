import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      className="py-20 px-4 relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional Decorative Dots Overlay */}
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0"
          style={{ minHeight: 400 }}
        >
          <defs>
            <pattern
              id="contact-dots"
              x="0"
              y="0"
              width="36"
              height="36"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="4" cy="4" r="1.5" fill="#fff" opacity="0.12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-dots)" />
        </svg>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="text-primary text-sm font-semibold mb-2 flex items-center justify-center">
          <Phone className="w-4 h-4 mr-2" />
          CALL NOW TODAY
        </div>
        <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Get Support For Your Problem
        </h2>
        <p className="text-gray-200 mb-12 max-w-2xl mx-auto">
          Reach out to our friendly support team for quick solutions to your
          device issues. We’re here to help—fast.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email Card */}
          <a
            href="mailto:support@fastrepairkl.com"
            className="bg-white rounded-lg p-8 flex items-center space-x-4 hover:shadow-2xl transition-shadow group ring-primary/30 hover:ring-4 ring-0"
            style={{ textDecoration: "none" }}
            aria-label="Send us an email"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform shadow">
              <Mail className="text-white" size={24} />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Send Us An Email
              </h3>
              <p className="text-gray-600 underline underline-offset-2">
                crepair276@gmail.com
              </p>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+60189621486"
            className="bg-white rounded-lg p-8 flex items-center space-x-4 hover:shadow-2xl transition-shadow group ring-primary/30 hover:ring-4 ring-0"
            style={{ textDecoration: "none" }}
            aria-label="Call us now"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform shadow">
              <Phone className="text-white" size={24} />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Give Us A Call
              </h3>
              <p className="text-gray-600 underline underline-offset-2">
                +60 189621486
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
