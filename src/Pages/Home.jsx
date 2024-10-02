/* eslint-disable react/prop-types */
import { ChevronDown, ArrowRight, Clock, Users, Trophy } from "lucide-react";
import AboutEventSection from "../Components/AboutEventSection";
import SponsorsAndPartnersSection from "../Components/SponsorsAndPartnersSection";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
      <Icon className="text-red-600" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <section
        className="h-screen flex flex-col justify-center items-center text-center p-4 bg-cover bg-center text-white relative"
        style={{ 
          backgroundImage: "url('/assets/Initial.png')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative  max-w-4xl">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 font-bebas tracking-wide">
            Learning Utsav
          </h1>
          <p className="text-2xl md:text-4xl mb-8 font-dancing">
            Break Limits. <span className="text-red-400">Build Skills.</span>
          </p>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            An innovative journey of learning and celebration, 
            where technology meets tradition.
          </p>
        </div>
        <ChevronDown className="absolute bottom-12 animate-bounce" size={32} />
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Welcome to the Future of Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-red-600">Learning Utsav</span> is a 
              one-of-a-kind challenge designed to help you sharpen your skills in 
              cutting-edge tech fields.
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
                "Anyone passionate about learning and growth"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-lg text-gray-700">
                  <ArrowRight className="text-indigo-600 mr-3 flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-semibold mb-4">Why Learning Utsav?</h3>
            <p className="text-lg leading-relaxed mb-4">
              This innovative program offers a unique blend of learning and celebration. 
              Use this time to elevate your skills, expand your professional network, 
              and showcase your progress.
            </p>
            <p className="text-lg leading-relaxed">
              Join us in this journey of transformation where tradition meets technology.
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