import { Button } from "@/components/ui/button";
import { useState } from "react";

// Example SVG/Img logos of relevant tech companies (replace with your own or more relevant as needed)
const logos = [
  <img
    key="apple"
    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    alt="Apple"
    className="h-10 w-auto mx-8"
  />,
  <img
    key="samsung"
    src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
    alt="Samsung"
    className="h-10 w-auto mx-8"
  />,
  <img
    key="xiaomi"
    src="https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg"
    alt="Xiaomi"
    className="h-10 w-auto mx-8"
  />,
  <img
    key="oneplus"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/OP_LU_Reg_1L_RGB_red_copy-01.svg/2560px-OP_LU_Reg_1L_RGB_red_copy-01.svg.png"
    alt="OnePlus"
    className="h-10 w-auto mx-8"
  />,
  <img
    key="huawei"
    src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1280px-Huawei_Standard_logo.svg.png"
    alt="Huawei"
    className="h-10 w-auto mx-8"
  />,
];

// Client avatars (replace with real client image URLs for production)
const clientAvatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/54.jpg",
];

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Mobile Repair in{" "}
              <span className="bg-primary text-white px-4 py-2 inline-block">
                Kuala Lumpur
              </span>
              <br />
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Welcome to fast repair, your go-to solution for quick,
              professional mobile repair services in Kuala Lumpur, Malaysia.
              With years of experience and thousands of happy customers, we
              specialize in fixing all major brands like iPhone, Samsung,
              Huawei, Oppo, Xiaomi, Vivo, and more
            </p>
            <div className="flex items-center space-x-4 relative">
              <Button className="bg-primary hover:bg-orange-600 text-white px-6 py-3 text-lg relative z-20">
                <a href="/contact">Contact Us</a>
              </Button>
              {/* Animated Play Button - now overlaps the Get Started button area */}
              <div
                className="absolute left-48 top-1/2 -translate-y-1/2 flex items-center justify-center z-10"
                onClick={() => setShowVideo(true)}
                style={{ cursor: "pointer" }}
              >
                {/* Animated ring */}
                <span className="absolute inline-flex h-16 w-16 rounded-full bg-primary/20 animate-ping" />
                <span className="absolute inline-flex h-16 w-16 rounded-full border-4 border-primary opacity-60" />
                <div className="relative z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Animated Sliding Logos Section */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative w-full h-14">
                <div className="absolute top-0 left-0 w-full h-full flex items-center">
                  <div className="sliding-logos flex items-center">
                    {logos.concat(logos).map((logo, idx) => (
                      // Repeat to create seamless sliding effect
                      <div key={idx} className="flex-shrink-0">
                        {logo}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/1.jpeg"
                alt="Phone repair technician working"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
              <img
                src="/images/2.jpg"
                alt="Person on phone - customer service"
                className="rounded-lg shadow-xl w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>

        {/* Optional: Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 relative w-full max-w-xl">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-primary"
              >
                ✕
              </button>
              {/* Replace with your video source */}
              <video controls autoPlay className="w-full rounded">
                <source src="https://kpmgmpduybfjknfgcuxg.supabase.co/storage/v1/object/sign/as/0629.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmI5OTAyZC1lN2RmLTQyZjItOTRkOS1lYzAwNmNhYTc2NzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcy8wNjI5Lm1wNCIsImlhdCI6MTc1MTIyNTgyMCwiZXhwIjoxOTA4OTA1ODIwfQ.3jVoVtPoDutcA-fM-mcMBybW-vyKFwyy4LrVAg8DW7Y" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
      {/* Animation keyframes */}
      <style>{`
        /* For sliding logos animation */
        @keyframes slideLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .sliding-logos {
          width: 200%;
          animation: slideLogos 18s linear infinite;
        }
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease;
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease;
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
