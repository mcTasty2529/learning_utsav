/* eslint-disable react/prop-types */
import { Star, Users } from 'lucide-react';

const sponsorLogos = [
  '/logos/sponsor1.png',
  '/logos/sponsor2.png',
  '/logos/sponsor3.png',
  '/logos/sponsor4.png',
  '/logos/sponsor5.png',
  '/logos/sponsor6.png',
];

const partnerLogos = [
  '/logos/partner1.png',
  '/logos/partner2.png',
  '/logos/partner3.png',
  '/logos/partner4.png',
];

const LogoGrid = ({ logos, alt }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
   
    {logos.map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt={`${alt} ${index + 1}`}
        className="max-w-[120px] max-h-[80px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    ))}
  </div>
);

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center justify-center mb-12">
    <Icon size={32} className="text-blue-600 mr-4" />
    <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
  </div>
);

const SponsorsSection = () => (
  <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 font-inter">
    <div className="max-w-6xl mx-auto">
      <SectionTitle icon={Star} title="Our Sponsors" />
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We are grateful for the support of our esteemed sponsors who make Learning Utsav possible. 
        Their commitment to education and innovation drives our success.
      </p>
      <LogoGrid logos={sponsorLogos} alt="Sponsor logo" />
    </div>
  </section>
);

const PartnersSection = () => (
  <section className="bg-white py-20 px-4 font-inter">
    <div className="max-w-6xl mx-auto">
      <SectionTitle icon={Users} title="Our Partners" />
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Our partners play a crucial role in enhancing the Learning Utsav experience. 
        Together, we create opportunities for growth and innovation.
      </p>
      <LogoGrid logos={partnerLogos} alt="Partner logo" />
    </div>
  </section>
);

const SponsorsAndPartnersSection = () => (
  <>
    <SponsorsSection />
    <PartnersSection />
  </>
);

export default SponsorsAndPartnersSection;