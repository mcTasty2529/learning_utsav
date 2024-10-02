/* eslint-disable react/prop-types */

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: '/team/john-doe.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: '/team/jane-smith.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    image: '/team/mike-johnson.jpg',
  },
];

const TeamMemberCard = ({ member }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
    <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
      <p className="text-sm text-blue-600 font-medium">{member.role}</p>
    </div>
  </div>
);

const Team = () => (
  <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen pt-24 pb-16 px-4 font-inter">
    <div className="max-w-7xl mx-auto mt-16">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-6 tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-600">
          Our Team
        </span>
      </h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        Meet the dedicated professionals behind{' '}
        <span className="font-semibold">Learning Utsav</span> who are committed to
        revolutionizing tech education.
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
      
      <div className="py-16 px-4">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 overflow-hidden">
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="block text-lg font-medium text-red-600 mb-2">Our Philosophy</span>
            Innovate. 
            <span className="italic">Collaborate.</span>{' '}
            <span className="underline decoration-red-500 decoration-4 underline-offset-4">
              Educate.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our <span className="font-medium">diverse team</span> brings together expertise 
            from various tech domains, united by a shared{' '}
            <span className="italic">passion for learning</span> and innovation.
            Together, we&apos;re shaping the{' '}
            <span className="font-semibold text-red-600">
              future of tech education
            </span>.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Team;