import { Clock, Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const DbSession = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-gray-50">
      {/* Hero Section with Background */}
      <section
        className="py-16 flex flex-col justify-center items-center text-center p-4 bg-cover bg-center text-white relative mt-16"
        style={{
          background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
          minHeight: "40vh",
        }}
      >
        <div className="relative w-full max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-wide"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Database Management System
          </h1>
          <p
            className="text-xl sm:text-2xl md:text-3xl mb-8 font-semibold text-yellow-400"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Session Registration
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
            <div className="flex items-center space-x-3">
              <Clock className="text-yellow-400 flex-shrink-0" size={24} />
              <span className="text-lg">7:30 - 9:30 PM</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="text-yellow-400 flex-shrink-0" size={24} />
              <span className="text-lg">Kartik 14th, Wednesday</span>
            </div>
            <div className="flex items-center space-x-3">
              <MessageSquare
                className="text-yellow-400 flex-shrink-0"
                size={24}
              />
              <span className="text-lg">
                <Link
                  to={"https://discord.gg/RzubQrbzzw"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the Discord for Participation.
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="flex-1 py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 bg-red-600 text-white">
              <h2 className="text-2xl font-semibold">
                Register for the Session
              </h2>
              <p className="mt-2 text-red-100">
                Join us for an interactive session with Mr. Saroj Dahal
              </p>
            </div>

            <div className="p-1 bg-white">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfYiZhlyRoFeMfhftfoPw2bniAcXxBIv1IGrLS_azDlAPMAyw/viewform?embedded=true"
                width="100%"
                height="1707"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="w-full"
              >
                Loading form...
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DbSession;
