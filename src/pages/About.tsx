import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    image: "/images/team/Azeem.png",
    name: "Abdul Azeem",
  },
  {
    image: "/images/team/Aleem.png",
    name: "Abdul Aleem",
  },
  {
    image: "/images/team/Qaseer.png",
    name: "Malik Qasir",
  },
  {
    image: "/images/team/Rehman.png",
    name: "Abdul Rehman",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-white border-b">
        {/* Gradient Highlight */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-gradient-to-r from-primary/20 via-orange-400/10 to-orange-600/20 blur-2xl rounded-full" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            About <span className="text-primary">Fast Repair</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
            Your trusted partner for professional gadget repair services in
            Kuala Lumpur.
            <br />
            We bring your broken devices back to life with expert care and
            precision.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Founded in 2015, Fast Repair has been serving the Kuala Lumpur
                community with reliable and professional gadget repair services.
                What started as a small repair shop has grown into the most
                trusted repair center in the city.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Our team of certified technicians brings years of experience and
                expertise to every repair, ensuring your devices are restored to
                perfect working condition.
              </p>
              <Button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 font-semibold rounded-lg shadow transition">
                Contact Us Today
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Repair technician at work"
                className="rounded-xl shadow-2xl w-full object-cover border-4 border-primary/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white border-y">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-primary">Fast Repair?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We stand out from the competition with our commitment to quality,
              speed, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Quality Guarantee
              </h3>
              <p className="text-gray-600 text-base">
                All repairs come with a 90-day warranty for your peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Certified Technicians
              </h3>
              <p className="text-gray-600 text-base">
                Our team consists of certified and experienced repair
                specialists.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Customer Focused
              </h3>
              <p className="text-gray-600 text-base">
                We prioritize customer satisfaction in every interaction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Award Winning
              </h3>
              <p className="text-gray-600 text-base">
                Recognized as the best repair service in Kuala Lumpur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our skilled technicians are the backbone of Fast Repair, bringing
              expertise and dedication to every repair job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 text-center border border-gray-100"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-lg mx-auto mb-4 object-cover border-4 border-primary/10 shadow"
                  style={{ aspectRatio: "1 / 1" }}
                />
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
