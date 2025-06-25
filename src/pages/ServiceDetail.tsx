import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  Shield,
  Star,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const serviceNames: { [key: string]: string } = {
    "smartphone-repair": "Smartphone Repair",
    "laptop-repair": "Laptop Repair",
    "tablet-repair": "Tablet Repair",
  };

  const serviceImages: { [key: string]: string } = {
    "smartphone-repair":
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "laptop-repair":
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "tablet-repair":
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  };

  useEffect(() => {
    const loadServiceContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/data/services/${serviceId}.md`);
        if (!response.ok) {
          throw new Error("Service not found");
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError("Service content not found");
        console.error("Error loading service content:", err);
      } finally {
        setLoading(false);
      }
    };

    if (serviceId) {
      loadServiceContent();
    }
  }, [serviceId]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading service details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Service Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The service you're looking for doesn't exist.
            </p>
            <Link to="/services">
              <Button className="bg-primary hover:bg-orange-600 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const serviceName = serviceNames[serviceId || ""] || "Service";
  const serviceImage =
    serviceImages[serviceId || ""] || serviceImages["smartphone-repair"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/services">Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>{serviceName}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Service Hero Section */}
        <div className="relative rounded-2xl overflow-hidden shadow mb-8">
          <div
            className="h-64 bg-cover bg-center relative flex items-end"
            style={{ backgroundImage: `url(${serviceImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="relative z-10 px-8 py-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow">
                {serviceName}
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Professional repair services with expert care
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-gray-100/90 to-transparent pointer-events-none" />
        </div>

        {/* Service Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="flex flex-col items-center text-center p-4 bg-white border border-gray-100 rounded-xl shadow">
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-2">
              <Star className="w-7 h-7 text-blue-600" />
            </span>
            <h3 className="font-semibold text-gray-800">Expert Service</h3>
            <p className="text-sm text-gray-500">Certified technicians</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white border border-gray-100 rounded-xl shadow">
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-2">
              <Shield className="w-7 h-7 text-green-600" />
            </span>
            <h3 className="font-semibold text-gray-800">Quality Guarantee</h3>
            <p className="text-sm text-gray-500">90-day warranty</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white border border-gray-100 rounded-xl shadow">
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 mb-2">
              <Clock className="w-7 h-7 text-orange-600" />
            </span>
            <h3 className="font-semibold text-gray-800">Fast Service</h3>
            <p className="text-sm text-gray-500">Same-day repairs</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white border border-gray-100 rounded-xl shadow">
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 mb-2">
              <Wrench className="w-7 h-7 text-purple-600" />
            </span>
            <h3 className="font-semibold text-gray-800">Advanced Tools</h3>
            <p className="text-sm text-gray-500">Professional equipment</p>
          </div>
        </div>

        {/* Main Content & Sidebar */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Details */}
          <div className="lg:col-span-2">
            <Card className="bg-white border border-gray-100 rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-gray-800 prose-strong:font-semibold prose-ul:text-gray-600 prose-ol:text-gray-600 prose-li:text-gray-700 prose-li:mb-2 prose-li:leading-relaxed">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact Card */}
            <Card className="bg-primary text-white rounded-2xl shadow-xl border-none">
              <CardHeader>
                <CardTitle className="text-xl">Get Instant Quote</CardTitle>
                <CardDescription className="text-orange-100">
                  Contact us now for free diagnosis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Call Now</p>
                    <p className="text-orange-100">03-2123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-orange-100">support@fastrepair.com</p>
                  </div>
                </div>
                <Button className="w-full bg-white text-primary font-bold hover:bg-gray-100 mt-4 rounded-lg shadow">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>

            {/* Before & After Gallery */}
            <Card className="rounded-2xl border border-gray-100 shadow">
              <CardHeader>
                <CardTitle>Before & After</CardTitle>
                <CardDescription>See our quality work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square rounded-lg overflow-hidden relative border border-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Before repair"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                      Before
                    </span>
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden relative border border-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="After repair"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                      After
                    </span>
                  </div>
                </div>
                <div className="w-full border-t border-dashed border-gray-200 my-2" />
                <p className="text-sm text-gray-500 text-center">
                  Professional repair results you can trust
                </p>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="rounded-2xl border border-gray-100 shadow">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-lg font-medium">
                    <span>How long does repair take?</span>
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-3 pb-3">
                    <p className="text-gray-600 text-sm">
                      Most repairs are completed within 1-2 hours. Complex
                      issues may take 24-48 hours.
                    </p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-lg font-medium">
                    <span>Do you offer warranty?</span>
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-3 pb-3">
                    <p className="text-gray-600 text-sm">
                      Yes, we provide 90-day warranty on all repairs and
                      replacement parts.
                    </p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-lg font-medium">
                    <span>Is diagnosis really free?</span>
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-3 pb-3">
                    <p className="text-gray-600 text-sm">
                      Absolutely! We provide free comprehensive diagnosis with
                      no obligation to proceed with repair.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            {/* Service Guarantee */}
            <Card className="bg-green-50 border-green-200 rounded-2xl shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">
                  Service Guarantee
                </h3>
                <p className="text-sm text-gray-600">
                  We stand behind our work with a comprehensive 90-day warranty
                  on all repairs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
