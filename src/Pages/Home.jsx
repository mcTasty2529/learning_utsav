/* eslint-disable react/prop-types */
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Trophy,
  Users,
  Calendar,
  X,
  ExternalLink,
} from "lucide-react";
import { useEffect, useState } from "react";
import AboutEventSection from "../Components/AboutEventSection";
import SponsorsAndPartnersSection from "../Components/SponsorsAndPartnersSection";
import { Link } from "react-router-dom";

const SessionPopup = ({ onClose, isVisible }) => {
  return (
    <div
      className={`fixed bottom-4 right-4 mx-4 max-w-sm w-[calc(100%-2rem)] sm:w-full bg-white rounded-xl shadow-2xl z-50 overflow-hidden transform transition-all duration-500 ease-in-out
        ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
    >
      <div className="bg-red-600 p-3 sm:p-4 text-white relative">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 hover:bg-red-700 rounded-full p-1 transition-colors duration-200"
        >
          <X size={20} />
        </button>
        <h3 className="font-bold text-base sm:text-lg">Upcoming Session!</h3>
        <p className="text-xs sm:text-sm text-red-100">
          Join us for an interactive learning experience
        </p>
      </div>

      <div className="p-3 sm:p-4">
        <h4 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">
          Database Management System (DBMS)
        </h4>

        <div className="space-y-2 mb-3 sm:mb-4">
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-2" />
            <span className="text-xs sm:text-sm">7:30 - 9:30 PM</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-2" />
            <span className="text-xs sm:text-sm">Kartik 14th, Wednesday</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-2" />
            <span className="text-xs sm:text-sm">
              Facilitator: Mr. Saroj Dahal
            </span>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
          <p>CTO - 28Softwares & Content Creator - Everyday Karma</p>
        </div>
        <Link
          to="/dbsession"
          className="flex items-center justify-center w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm"
        >
          Register Now
          <ExternalLink size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
      <Icon className="text-red-600" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const CountUpTimer = () => {
  const [days, setDays] = useState(1);

  useEffect(() => {
    const startDate = new Date("2024-10-03");
    const updateTimer = () => {
      const now = new Date();
      const difference = Math.abs(
        Math.floor((now - startDate) / (1000 * 60 * 60 * 24))
      );
      setDays(Math.min(difference + 1, 32));
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 md:p-6 shadow-lg mt-4 md:mt-8 w-36 sm:w-48">
        <div className="text-4xl sm:text-6xl font-bold text-red-600">
          {days}
        </div>
        <div className="text-sm sm:text-xl text-white mt-1 sm:mt-2">
          Days of Learning
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-inter">
      <SessionPopup onClose={handleClosePopup} isVisible={isPopupVisible} />
      <section
        className="min-h-screen py-20 md:py-32 flex flex-col justify-center items-center text-center p-4 bg-cover bg-center text-white relative mt-10"
        style={{
          backgroundImage: "url('/assets/Initial.png')",
          // backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative w-full max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-4 md:mb-6 font-bebas tracking-wide">
            Learning Utsav
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl mb-4 md:mb-8 font-dancing">
            Break Limits. <span className="text-red-400">Build Skills.</span>
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8">
            An innovative journey of learning and celebration, where technology
            meets tradition.
          </p>

          <CountUpTimer />

          <Link
            to={
              "https://docs.google.com/forms/d/e/1FAIpQLSeWTVIqaZMnWHuTqPsVCAchpzKlETeo8x_0PimbGDyeA3WFtQ/viewform"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-6 md:mt-8 bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl py-2 px-4 md:py-3 md:px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Update Your Progress
            </button>
          </Link>

          <div className="mt-8 md:mt-12 flex justify-center items-center  space-x-8">
            <div className="text-center">
              <p className="text-sm mb-2">Initiative of</p>
              <div className="p-4 rounded-lg flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32">
                <img
                  src="/assets/kec-light-logo.png"
                  alt="Powered by logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm mb-2">Supported by</p>
              <div className="p-4 rounded-lg flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32">
                <img
                  src="/assets/kcc-light-logo.png"
                  alt="Supported by logo"
                  className="w-full h-full object-contain flex justify-center items-center"
                />
              </div>
            </div>
          </div>
        </div>
        <ChevronDown
          className="absolute bottom-4 md:bottom-12 animate-bounce"
          size={32}
        />
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Welcome to the Festival of Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-red-600">Learning Utsav</span>{" "}
              is a one-of-a-kind challenge designed to help you sharpen your
              skills in cutting-edge tech fields.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Clock}
              title="Perfect Timing"
              description="Aligned with the festive season, offering a unique blend of learning and celebration."
            />
            <FeatureCard
              icon={Users}
              title="For Everyone"
              description="From working professionals and students to tech enthusiasts – all united by a passion for growth."
            />
            <FeatureCard
              icon={Trophy}
              title="Skill Mastery"
              description="Master Electronics, Software Development, AI/Data Science, Cybersecurity, and Cloud Technologies."
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Who Should Join?
            </h2>
            <ul className="space-y-4">
              {[
                "Working professionals aiming to stay ahead",
                "Students laying the foundation for a tech career",
                "Tech enthusiasts looking to expand knowledge",
                "Anyone passionate about learning and growth",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-lg text-gray-700"
                >
                  <ArrowRight
                    className="text-indigo-600 mr-3 flex-shrink-0"
                    size={20}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-semibold mb-4">Why Learning Utsav?</h3>
            <p className="text-lg leading-relaxed mb-4">
              This innovative program offers a unique blend of learning and
              celebration. Use this time to elevate your skills, expand your
              professional network, and showcase your progress.
            </p>
            <p className="text-lg leading-relaxed">
              Join us in this journey of transformation where tradition meets
              technology.
            </p>
          </div>
        </div>
      </section>

      <AboutEventSection />
      <SponsorsAndPartnersSection />
    </div>
  );
};

export default Home;
