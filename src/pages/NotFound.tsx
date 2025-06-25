import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-primary/10 px-4">
      <div className="bg-white rounded-xl shadow-xl p-10 flex flex-col items-center max-w-lg w-full">
        <div className="flex flex-col items-center mb-8">
          <span className="bg-primary/10 text-primary rounded-full px-4 py-2 text-lg font-bold mb-4 tracking-widest">
            404
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-2 max-w-xs text-center">
            The page{" "}
            <span className="font-mono break-all text-primary">
              {location.pathname}
            </span>{" "}
            does not exist or has been moved.
          </p>
          <p className="text-md text-gray-500 mb-6">
            We're sorry for the inconvenience. <br />
            If you need help, please contact our support team.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-6 py-3 rounded transition shadow"
        >
          <ArrowLeft className="w-5 h-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
