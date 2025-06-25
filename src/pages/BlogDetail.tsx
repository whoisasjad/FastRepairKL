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
  Calendar,
  Clock,
  Share2,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const BlogDetail = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCopied, setShowCopied] = useState(false);

  const blogNames: { [key: string]: string } = {
    "choosing-right-repair-service": "Choosing the Right Repair Service",
    "smartphone-maintenance-tips": "Smartphone Maintenance Tips",
    "water-damage-recovery-guide": "Water Damage Recovery Guide",
  };

  const blogImages: { [key: string]: string } = {
    "choosing-right-repair-service":
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "smartphone-maintenance-tips":
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "water-damage-recovery-guide":
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  };

  useEffect(() => {
    const loadBlogContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/data/blogs/${blogId}.md`);
        if (!response.ok) {
          throw new Error("Blog not found");
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError("Blog content not found");
        console.error("Error loading blog content:", err);
      } finally {
        setLoading(false);
      }
    };

    if (blogId) {
      loadBlogContent();
    }
  }, [blogId]);

  // Improved Share functionality
  const handleShare = async () => {
    const shareData = {
      title: blogNames[blogId || ""] || "Fast Repair Blog",
      text: "Check out this article on Fast Repair!",
      url: window.location.href,
    };
    // If Web Share API is available, use it!
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (e) {
        // User canceled or error, do nothing
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 1600);
      } catch (err) {
        // fallback: do nothing
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading article...</p>
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
              Article Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link to="/blogs">
              <Button className="bg-primary hover:bg-orange-600 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const blogName = blogNames[blogId || ""] || "Article";
  const blogImage =
    blogImages[blogId || ""] || blogImages["smartphone-maintenance-tips"];

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
                <Link to="/blogs">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>{blogName}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Article Header with Main Image */}
        <div className="bg-white rounded-2xl shadow-lg mb-10 overflow-hidden max-w-4xl mx-auto">
          <div
            className="h-72 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${blogImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white drop-shadow">
              <h1 className="text-4xl font-extrabold mb-2 leading-tight">
                {blogName}
              </h1>
              <div className="flex items-center space-x-4 text-sm text-gray-200">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Published recently</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between p-6">
            <Link
              to="/blogs"
              className="inline-flex items-center text-primary hover:text-orange-600 font-medium mb-2 md:mb-0"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center font-semibold"
                onClick={handleShare}
                aria-label="Share this article"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              {/* Tooltip */}
              <span
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 text-xs px-2 py-1 rounded bg-primary text-white z-50 transition-all ${
                  showCopied ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                Link copied!
              </span>
            </div>
          </div>
        </div>

        {/* Main Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
          {/* Article Content */}
          <div className="flex-1 min-w-0">
            <Card className="bg-white border border-gray-100 shadow-lg rounded-2xl max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-gray-800 prose-strong:font-semibold prose-ul:text-gray-600 prose-ol:text-gray-600 prose-li:text-gray-700 prose-li:mb-1 prose-li:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:bg-gray-50 prose-blockquote:p-4 prose-blockquote:my-6">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[340px] flex-shrink-0 space-y-6">
            {/* Contact Card */}
            <Card className="bg-primary text-white rounded-2xl shadow-lg border-none">
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
                <CardDescription className="text-orange-100">
                  Get expert advice from our technicians
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-primary hover:bg-gray-100 font-bold">
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            {/* Tech Tips Gallery */}
            <Card className="rounded-2xl border border-gray-100 shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Tech Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="Device maintenance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="Repair tools"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Learn from our expert tips and guides
                </p>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <Card className="rounded-2xl border border-gray-100 shadow">
              <CardHeader>
                <CardTitle className="text-lg">Related Articles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-3">
                  <Link
                    to="/blogs/smartphone-maintenance-tips"
                    className="text-sm font-medium text-gray-800 hover:text-primary"
                  >
                    Essential Smartphone Maintenance Tips
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">
                    Learn how to keep your device running smoothly
                  </p>
                </div>
                <div className="border-b pb-3">
                  <Link
                    to="/blogs/water-damage-recovery-guide"
                    className="text-sm font-medium text-gray-800 hover:text-primary"
                  >
                    Water Damage Recovery Guide
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">
                    What to do when your device gets wet
                  </p>
                </div>
                <div>
                  <Link
                    to="/blogs/choosing-right-repair-service"
                    className="text-sm font-medium text-gray-800 hover:text-primary"
                  >
                    Choosing the Right Repair Service
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">
                    Find the best repair service for your needs
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="bg-blue-50 border-blue-200 rounded-2xl shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center text-blue-800">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Trending Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="Trending topic"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-800">
                        Screen Repair Guide
                      </p>
                      <p className="text-xs text-blue-600">
                        Most popular this week
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="Trending topic"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-800">
                        Battery Optimization
                      </p>
                      <p className="text-xs text-blue-600">Essential reading</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gray-50 rounded-2xl border border-gray-100 shadow">
              <CardHeader>
                <CardTitle className="text-lg">Stay Updated</CardTitle>
                <CardDescription>
                  Get the latest repair tips and tech news
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-orange-600 text-white font-bold">
                  Subscribe to Newsletter
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
