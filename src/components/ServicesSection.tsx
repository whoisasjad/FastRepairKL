import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useDiscoveredContent } from "@/utils/contentDiscovery";
import ReactMarkdown from "react-markdown";

const ServicesSection = () => {
  const { items: services, loading, error } = useDiscoveredContent("services");

  return (
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
                  {/* Render markdown here */}
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

        {/* Link to all services */}
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
  );
};

export default ServicesSection;
