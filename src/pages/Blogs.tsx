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
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useDiscoveredContent } from "@/utils/contentDiscovery";

const Blogs = () => {
  const { items: blogPosts, loading, error } = useDiscoveredContent("blogs");

  const categories = [
    "All Posts",
    "Maintenance",
    "Emergency Repair",
    "Buying Guide",
    "Technology News",
    "DIY Tips",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-white border-b">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Tech Repair <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700 font-medium">
            Expert advice, repair tips, and technology insights from our
            experienced technicians. Stay informed and keep your devices running
            perfectly.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {loading && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        </section>
      )}

      {error && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </section>
      )}

      {!loading && !error && blogPosts.length > 0 && (
        <>
          {/* Featured Post */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Featured Article
                </h2>
                <p className="text-gray-600">
                  Our most popular and useful repair guides
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <Card className="overflow-hidden hover:shadow-2xl shadow-lg border border-gray-100 transition-all rounded-2xl bg-white">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="w-full h-64 md:h-full object-cover object-center"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold shadow">
                          {blogPosts[0].category}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {blogPosts[0].date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {blogPosts[0].readTime}
                        </div>
                      </div>
                      <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
                        {blogPosts[0].title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {blogPosts[0].description}
                      </p>
                      <Link to={`/blogs/${blogPosts[0].id}`}>
                        <Button className="bg-primary hover:bg-orange-600 text-white font-semibold px-6 py-2 shadow">
                          Read Full Article →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Latest Articles
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Stay updated with the latest repair tips, technology news, and
                  expert advice from our experienced technicians.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-center">
                {blogPosts.slice(1).map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-xl transition-shadow overflow-hidden bg-white border border-gray-100 rounded-xl shadow mx-auto w-full max-w-md"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold shadow">
                        {post.category}
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </div>
                        <Link to={`/blogs/${post.id}`}>
                          <Button
                            variant="ghost"
                            className="text-primary hover:text-orange-600 p-0 font-semibold"
                          >
                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-50 border-t">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest repair tips, technology
              news, and exclusive offers from Fast Repair.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 bg-white"
              />
              <Button className="bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-r-lg font-semibold shadow">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Need Professional Repair Service?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            While our blog provides helpful tips, some repairs require
            professional expertise. Contact Fast Repair for reliable,
            professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-white text-primary font-bold shadow hover:bg-gray-100 px-8 py-3 text-lg border border-primary">
              <span className="drop-shadow-sm">Call Now: 03-2123-4567</span>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white font-bold hover:bg-white hover:text-primary px-8 py-3 text-lg shadow"
            >
              <span className="drop-shadow-sm">Visit Our Shop</span>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
