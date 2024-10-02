/* eslint-disable react/prop-types */
import { BookOpen, Users, Zap, Code, Cloud, Shield, Cpu, Database } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-red-600 rounded-full mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TechTrackCard = ({ icon: Icon, title }) => (
  <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center justify-center w-10 h-10 bg-red-50 text-red-600 rounded-full">
      <Icon size={20} />
    </div>
    <span className="font-medium text-gray-800">{title}</span>
  </div>
);

const AboutEventSection = () => (
  <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 font-inter">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        About <span className="text-red-600">Learning Utsav</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <strong className="text-red-600">Learning Utsav</strong> is a one-of-a-kind challenge designed to help
            you sharpen your skills in cutting-edge tech fields: Electronics,
            Software/Web Development, AI/Data Science, Cybersecurity, and Cloud
            Technologies.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This innovative program offers a unique blend of learning and celebration,
            perfectly timed with the festive season. Use this time to elevate your skills,
            expand your professional network, and showcase your progress.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Learning Tracks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TechTrackCard icon={Code} title="Web Development" />
            <TechTrackCard icon={Database} title="Data Science" />
            <TechTrackCard icon={Shield} title="Cybersecurity" />
            <TechTrackCard icon={Cloud} title="Cloud Computing" />
            <TechTrackCard icon={Cpu} title="Electronics" />
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Each track is carefully designed to provide both theoretical knowledge and practical skills, 
              ensuring you&apos;re ready for real-world applications.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={BookOpen}
          title="Learn"
          description="Gain cutting-edge skills in various tech domains through our comprehensive program."
        />
        <FeatureCard 
          icon={Users}
          title="Share"
          description="Connect with like-minded individuals and expand your professional network."
        />
        <FeatureCard 
          icon={Zap}
          title="Grow"
          description="Transform your tech skills and create lasting connections in the industry."
        />
      </div>
    </div>
  </section>
);

export default AboutEventSection;