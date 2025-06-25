import { Button } from "@/components/ui/button";
import { CheckCircle, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative py-16 px-4 bg-[#F3F4F6] overflow-hidden">
      {/* Animated Dotted Background */}
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0"
          style={{ minHeight: 400 }}
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="4" cy="4" r="2" fill="#d1d5db">
                <animate
                  attributeName="r"
                  values="2;4;2"
                  dur="2s"
                  repeatCount="indefinite"
                  begin="0s"
                />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
              alt="Phone repair service"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          {/* About Content */}
          <div>
            <div className="text-primary text-xs font-bold mb-2 tracking-wide uppercase">
              Quick, Local Repairs
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
              Fast & Trusted Device Repairs in KL
            </h2>
            <p className="text-gray-600 mb-7 text-base">
              Get your gadgets fixed the same day by our expert team using
              genuine parts – all with a warranty.
            </p>
            <div className="space-y-3 mb-7">
              <div className="flex items-center space-x-3">
                <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center shadow">
                  <CheckCircle className="text-white" size={16} />
                </div>
                <span className="font-medium text-gray-800 text-base">
                  Fast turnaround
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center shadow">
                  <Shield className="text-white" size={16} />
                </div>
                <span className="font-medium text-gray-800 text-base">
                  Warranty on repairs
                </span>
              </div>
            </div>
            <Button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 text-base font-semibold shadow">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
