import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Fast Repair fixed my phone in just an hour! The team was professional and kept me updated throughout. Highly recommended.",
    name: "Jessica Smith",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1fe",
  },
  {
    quote:
      "Superb service! My laptop runs like new again and the pricing was transparent. Will definitely use them again.",
    name: "Nicolas Marko",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    quote:
      "Excellent support and friendly staff. They replaced my tablet screen in no time. 10/10!",
    name: "Emily Chen",
    role: "Marketing Specialist",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  {
    quote:
      "I loved the quick turnaround and genuine parts. My device works perfectly now!",
    name: "Liam O'Brien",
    role: "Student",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
  },
  {
    quote:
      "Professional and trustworthy. They explained the whole process and gave a warranty on repairs.",
    name: "Aisha Rahman",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8",
  },
  {
    quote:
      "Responsive customer service and quality repair. I recommend Fast Repair to all my friends.",
    name: "Samuel Lee",
    role: "Photographer",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  },
];

const SLIDE_INTERVAL = 5000;

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  // Simple swipe support
  const startX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 50) {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    } else if (diff < -50) {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }
  };

  const testimonial = testimonials[current];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <div className="text-primary text-base font-semibold mb-3 flex items-center justify-center tracking-wider uppercase">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m0 0V6a2 2 0 012-2h10a2 2 0 012 2v2"
              />
            </svg>
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Our Customers Review
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            See what our customers say about their experiences with Fast Repair.
          </p>
        </div>
        <div
          className="max-w-xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <figure className="bg-white rounded-3xl p-10 shadow-xl flex flex-col items-center transition-all duration-500 min-h-[330px] border border-gray-100">
            <span className="text-7xl text-primary mb-6 leading-none font-serif">
              “
            </span>
            <blockquote className="mb-8 text-center italic font-serif text-xl md:text-2xl text-gray-700 leading-relaxed max-w-lg mx-auto">
              {testimonial.quote}
            </blockquote>
            <figcaption className="flex items-center gap-4 mt-auto">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow"
              />
              <div className="text-left">
                <div className="text-lg md:text-xl font-bold text-gray-800">
                  {testimonial.name}
                </div>
                <div className="text-primary text-base font-medium">
                  {testimonial.role}
                </div>
                <div className="mt-1 w-8 h-1 bg-primary rounded-full opacity-80" />
              </div>
            </figcaption>
          </figure>
          {/* Dots Pagination */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  current === idx ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
