/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { teamMembers } from "../constants/team";

const TeamMemberCard = ({ member }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
    <div className="relative pt-[133%]">
      <img
        src={member.image}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="p-3 h-24 flex flex-col justify-center">
      <h3 className="text-lg font-bold font-inter  text-gray-800 line-clamp-2">
        {member.name}
      </h3>
      {member.description && (
        <p className="text-sm text-gray-500 line-clamp-1 mt-2">
          {member.description}
        </p>
      )}
    </div>
  </div>
);

const TeamSection = ({ title, members = [] }) => {
  if (!members || members.length === 0) {
    return null;
  }

  return (
    <section className="mb-24">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {members.map((member) => (
          <Link
            to={member.link}
            key={member.id || member.name}
            className="block transition-transform duration-300 hover:scale-105"
          >
            <TeamMemberCard member={member} />
          </Link>
        ))}
      </div>
    </section>
  );
};

const PhilosophySection = () => (
  <section className="bg-gradient-to-r from-red-500 to-indigo-600 text-white py-24 px-4 rounded-lg shadow-xl">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 leading-tight">Our Philosophy</h2>
      <div className="text-2xl font-light mb-12 space-y-4">
        <p>Innovate.</p>
        <p className="italic">Collaborate.</p>
        <p className="underline decoration-white decoration-4 underline-offset-8">
          Educate.
        </p>
      </div>
      <p className="text-xl leading-relaxed">
        Our <span className="font-medium">diverse team</span> brings together
        expertise from various tech domains, united by a shared{" "}
        <span className="italic">passion for learning</span> and innovation.
        Together, we&apos;re shaping the{" "}
        <span className="font-semibold">future of tech education</span>.
      </p>
    </div>
  </section>
);

const Team = () => {
  // Check if teamMembers is defined before accessing its properties
  const organizers = teamMembers?.organizers || [];
  const moderators = teamMembers?.moderators || [];

  return (
    <div className="bg-gray-50 min-h-screen py-24 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600 mb-6">
            Our Team
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the highly dedicated people behind Learning Utsav, who are
            passionate about empowering students to learn, grow, and connect!
          </p>
        </header>

        <TeamSection title="Organizers" members={organizers} />
        <TeamSection title="Moderators" members={moderators} />
        <PhilosophySection />
      </div>
    </div>
  );
};

export default Team;
