import {
  Clock,
  Users,
  Headphones,
  ShieldCheck,
  Wrench,
  Award,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "We guarantee top-notch repairs using genuine parts and the latest diagnostic tools.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our certified technicians have years of experience with all leading brands and models.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Reach us anytime for queries, updates, or emergency repairs—always available for you.",
  },
  {
    icon: Wrench,
    title: "Wide Range of Services",
    description:
      "From screen replacement to water damage repair, we handle every mobile issue efficiently.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description:
      "Most repairs are completed within hours, so you’re never long without your device.",
  },
  {
    icon: Award,
    title: "Trusted & Awarded",
    description:
      "Highly rated by our customers and recognized as a leading local service provider.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We’re committed to providing reliable, high-quality repairs and a
            seamless customer experience every time.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white p-8 rounded-xl shadow-md transition-transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-lg">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
