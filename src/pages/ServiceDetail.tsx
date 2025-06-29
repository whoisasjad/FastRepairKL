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
    "iphone-samsung-back-glass-repair": "Back Glass Repair",
    "iphone-samsung-glass-repair": "Glass Repair",
    "iphone-android-motherboard-repair": "Motherboard Repair",
    "water-damage-repair": "Water Damage Repair",
    "wifi-issues": "Wi-Fi Issues Repair",
    "network-issues": "Network Issues Repair",
    "charging-issues": "Charging Issues Repair",
    "battery-replacement": "Battery Replacement",
    "body-changing": "Body Changing",
    "power-volume-button-issue": "Power and Volume Button Issue",
    "camera-issue": "Camera Issue",
    "speaker-mic-issue": "Speaker and Microphone Issue",
  };

  const serviceImages: { [key: string]: string } = {
    "iphone-samsung-back-glass-repair": "../images/4.jpg",
    "iphone-samsung-glass-repair": "../images/2.jpg",
    "iphone-android-motherboard-repair": "../images/6.jpg", // Assuming image 1 for motherboard repair
    "water-damage-repair": "../images/7.jpeg",
    "wifi-issues": "../images/18.jpg", // Placeholder, assuming next available number
    "network-issues": "../images/19.jpg", // Placeholder
    "charging-issues": "../images/20.jpg", // Placeholder
    "battery-replacement": "../images/14.jpg", // Placeholder
    "body-changing": "../images/12.jpg", // Placeholder
    "power-volume-button-issue": "../images/22.jpg", // Placeholder
    "camera-issue": "../images/23.jpg", // Placeholder
    "speaker-mic-issue": "../images/21.jpg", // Placeholder
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
                    <p className="text-orange-100">+60 189621486</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-orange-100">crepair276@gmail.com</p>
                  </div>
                </div>
                <Button className="w-full bg-white text-primary font-bold hover:bg-gray-100 mt-4 rounded-lg shadow">
                  <a href="/contact">Book Now</a>
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
                      src="https://i.ytimg.com/vi/KgZV_HTyzwM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDGwpRp9gua4PHJLA5h5B3J-P4Bfw"
                      alt="Before repair"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                      Before
                    </span>
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden relative border border-gray-200">
                    <img
                      src="data:image/jpeg;base64,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"
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
