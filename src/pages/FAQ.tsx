import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  Droplet,
  Smartphone,
  BatteryCharging,
  Lock,
  CreditCard,
  Truck,
  Wrench,
  UserPlus,
  ShieldCheck,
  Mail,
  Clock3,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const faqs = [
  {
    question: "How long does a typical repair take?",
    answer:
      "Most common repairs like screen replacements take 30-60 minutes. More complex repairs such as motherboard repairs may take 2-3 days. We provide an estimated timeframe when you bring in your device.",
    icon: <Clock3 className="w-5 h-5 text-primary" />,
  },
  {
    question: "Do you offer warranty on repairs?",
    answer:
      "Yes! All our repairs come with a 90-day warranty covering the specific repair performed. If the same issue occurs within the warranty period, we'll fix it free of charge.",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
  },
  {
    question: "What brands and devices do you repair?",
    answer:
      "We repair all major smartphone brands including iPhone, Samsung, Huawei, Xiaomi, Oppo, Vivo, OnePlus, and many more. We also service tablets, laptops, desktops, and smartwatches.",
    icon: <Smartphone className="w-5 h-5 text-primary" />,
  },
  {
    question: "Do I need to make an appointment?",
    answer:
      "Walk-ins are always welcome, but we recommend booking an appointment online or by phone to avoid waiting times.",
    icon: <CalendarCheck className="w-5 h-5 text-primary" />,
  },
  {
    question: "How do you determine the repair cost?",
    answer:
      "We provide a free diagnostic check to assess the problem and give you a detailed quote before starting any work. Our pricing is transparent with no hidden fees.",
    icon: <CreditCard className="w-5 h-5 text-primary" />,
  },
  {
    question: "What if my device can't be repaired?",
    answer:
      "If your device is beyond repair, we will inform you immediately and you won’t be charged for the diagnostic. We can also help with data recovery if possible.",
    icon: <Wrench className="w-5 h-5 text-primary" />,
  },
  {
    question: "Do you use original parts?",
    answer:
      "We use only high-quality parts that meet or exceed original specifications. For premium devices, we offer both OEM and compatible options, with clear pricing for each.",
    icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
  },
  {
    question: "Can you repair water-damaged devices?",
    answer:
      "Yes, we specialize in water damage repairs. Bring your device in as soon as possible for the best chance of a full recovery. We offer free assessments for water-damaged gadgets.",
    icon: <Droplet className="w-5 h-5 text-primary" />,
  },
  {
    question: "Do you offer pickup and delivery?",
    answer:
      "Yes, we offer convenient pickup and delivery services within Kuala Lumpur for a small fee. Perfect for busy customers who can’t visit our shop.",
    icon: <Truck className="w-5 h-5 text-primary" />,
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit/debit cards, and popular e-wallets like Touch 'n Go, GrabPay, and Boost. Payment is due upon completion of repair.",
    icon: <CreditCard className="w-5 h-5 text-primary" />,
  },
  {
    question: "Is my data safe during repair?",
    answer:
      "We take data privacy seriously and recommend backing up your data before service. Our technicians follow strict privacy protocols.",
    icon: <Lock className="w-5 h-5 text-primary" />,
  },
  {
    question: "Can you help with software issues or virus removal?",
    answer:
      "Absolutely! We can assist with software updates, system restores, malware removal, and performance optimization for all devices.",
    icon: <BatteryCharging className="w-5 h-5 text-primary" />,
  },
  {
    question: "How do I track my repair?",
    answer:
      "Once your device is checked in, you'll receive a job number and can track progress by contacting our front desk or through our online system.",
    icon: <Mail className="w-5 h-5 text-primary" />,
  },
  {
    question: "Are your technicians certified?",
    answer:
      "Yes, all our technicians are trained and certified in device repair, ensuring the highest quality standards for every service.",
    icon: <UserPlus className="w-5 h-5 text-primary" />,
  },
  {
    question: "Do you provide urgent or express repair services?",
    answer:
      "Yes, we offer same-day express repairs for select services. Please contact us to check availability and book a priority slot.",
    icon: <Clock3 className="w-5 h-5 text-primary" />,
  },
  {
    question: "Where are you located?",
    answer:
      "Our main shop is in Kuala Lumpur, and we have several branches. See our Contact page for addresses, maps, and opening hours.",
    icon: <MapPin className="w-5 h-5 text-primary" />,
  },
];

const quickHelp = [
  {
    icon: <Smartphone className="w-8 h-8 text-red-500" />,
    emoji: "📱",
    title: "Cracked Screen?",
    desc: "Don't let a cracked screen ruin your day. We can fix it in under an hour!",
    btn: "Book Screen Repair",
  },
  {
    icon: <Droplet className="w-8 h-8 text-blue-500" />,
    emoji: "💧",
    title: "Water Damage?",
    desc: "Act fast! Bring your water-damaged device to us immediately for best results.",
    btn: "Emergency Repair",
  },
  {
    icon: <BatteryCharging className="w-8 h-8 text-green-600" />,
    emoji: "🔋",
    title: "Battery Issues?",
    desc: "Phone dying too quickly? We'll replace your battery with a high-quality one.",
    btn: "Replace Battery",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-orange-600 text-white">
        <div className="container mx-auto text-center">
          <span className="inline-block bg-white/10 rounded px-4 py-1 uppercase text-xs tracking-widest font-bold mb-4">
            FAQ
          </span>
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-sm">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">
            Find answers to common questions about our repair services,
            warranty, and policies.
            <br />
            Can't find what you're looking for? Contact us directly!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg bg-[#f8fafc] shadow-sm"
              >
                <AccordionTrigger className="flex items-center gap-3 px-6 py-4 text-left hover:no-underline hover:bg-gray-50 group">
                  <span className="shrink-0">{faq.icon}</span>
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-primary transition">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-1 rounded uppercase text-xs mb-2">
              Need Quick Help?
            </span>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 drop-shadow">
              Get Immediate Assistance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get fast solutions for the most common device problems. Tap a
              button to get started!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {quickHelp.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl text-orange-500">
                  {item.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <Button className="bg-primary hover:bg-orange-600 text-white px-6 py-2 font-semibold rounded">
                  {item.btn}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4 drop-shadow">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">
            Our friendly customer service team is here to help. Contact us via
            phone, email, or visit our shop in Kuala Lumpur.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-3 text-lg">
              Call Now: 03-2123-4567
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-3 text-lg"
            >
              Email Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
