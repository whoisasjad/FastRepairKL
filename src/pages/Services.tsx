import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Clock, Shield, Star, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useDiscoveredContent } from "@/utils/contentDiscovery";
import ReactMarkdown from "react-markdown";

const Services = () => {
  const { items: services, loading, error } = useDiscoveredContent("services");

  const whyChooseUs = [
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Expert Technicians",
      description:
        "Certified professionals with 5+ years of experience in device repair",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Fast Service",
      description:
        "Most repairs completed within 1-2 hours with same-day service available",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Quality Guarantee",
      description:
        "90-day warranty on all repairs with genuine and high-quality parts",
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Advanced Tools",
      description: "Latest diagnostic equipment and professional repair tools",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-white border-b">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700 font-medium">
            Professional repair services for all your devices. Expert
            technicians, quality parts, and fast turnaround times you can trust.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Professional Repair Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From smartphones to laptops, our certified technicians provide
              expert repair services with genuine parts and comprehensive
              warranties.
            </p>
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

          {!loading && !error && (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-center">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl transition-shadow overflow-hidden bg-white border border-gray-100 rounded-xl shadow mx-auto w-full max-w-md"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                      {service.price}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-800">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => (
                            <span className="block mb-1">{children}</span>
                          ),
                        }}
                      >
                        {service.description}
                      </ReactMarkdown>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features?.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <ArrowRight className="w-4 h-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/services/${service.id}`}>
                      <Button className="w-full bg-primary hover:bg-orange-600 text-white font-semibold text-base py-2.5">
                        Learn More →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white border-y">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-primary">Fast Repair?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality repair services
              with exceptional customer care and competitive pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4 shadow">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Repair Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and efficient repair process designed to get
              your device back to you as quickly as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Free Diagnosis
              </h3>
              <p className="text-gray-600">
                Comprehensive assessment of your device's issues
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Quote Approval
              </h3>
              <p className="text-gray-600">
                Transparent pricing with no hidden fees
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Expert Repair
              </h3>
              <p className="text-gray-600">
                Professional repair using quality parts
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Quality Check
              </h3>
              <p className="text-gray-600">
                Thorough testing before device return
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Fix Your Device?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Don't let a broken device slow you down. Contact us today for fast,
            professional repair services with a satisfaction guarantee.
          </p>
          <div className="space-x-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0">
            <Button className="bg-white text-primary font-bold shadow hover:bg-gray-100 px-8 py-3 text-lg border border-primary">
              <span className="drop-shadow-sm">Call Now: 03-2123-4567</span>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white font-bold hover:bg-white hover:text-primary px-8 py-3 text-lg shadow"
            >
              <span className="drop-shadow-sm">Book Online</span>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
