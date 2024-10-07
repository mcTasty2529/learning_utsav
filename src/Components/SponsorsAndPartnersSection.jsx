/* eslint-disable react/prop-types */
import { Star, Users, Building, Handshake } from "lucide-react";

const sponsorLogos = [
  "assets/sponsors/evolve.png",
  "assets/sponsors/programiz.png",
  "assets/sponsors/broadway-logo.png",
];

const communityPartnerLogos = [
  "assets/partners/askbuddie.png",
  "assets/partners/aws.png",
];

const collaboratorLogos = [
  "/assets/collaborators/ascol.png",
  "/assets/collaborators/collabyte.png",
  "/assets/collaborators/ecs.png",
  "/assets/collaborators/excess.png",
  "/assets/collaborators/hrc.png",
  "/assets/collaborators/ices.png",
  "/assets/collaborators/kathfoss.png",
  "/assets/collaborators/kuaic.png",
  "/assets/collaborators/nec.png",
  "/assets/collaborators/pkit.png",
  "/assets/collaborators/robokath.png",
  "/assets/collaborators/seis.png",
  "/assets/collaborators/sitc.png",
  "/assets/collaborators/pnc.png",
  "/assets/collaborators/shetech.png",
  "/assets/collaborators/csit.png",
  "/assets/collaborators/bcaa.png",
];

const LogoGrid = ({ logos, alt }) => (
  <div
    className={`grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center`}
  >
    {logos.map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt={`${alt} ${index + 1}`}
        className="max-w-[140px] max-h-[90px] object-contain transform hover:scale-110 transition-transform duration-300"
      />
    ))}
  </div>
);

const TwoLogoLayout = ({ logos, alt }) => (
  <div className="flex justify-center items-center space-x-8">
    {logos.map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt={`${alt} ${index + 1}`}
        className="max-w-[140px] max-h-[90px] object-contain transform hover:scale-110 transition-transform duration-300"
      />
    ))}
  </div>
);

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center justify-center mb-8">
    <Icon size={32} className="text-blue-600 mr-4" />
    <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
  </div>
);

const SubsectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center justify-center mb-6">
    <div className="bg-blue-50 p-3 rounded-full">
      <Icon className="text-blue-500" size={24} />
    </div>
    <h3 className="text-2xl font-semibold text-gray-700 ml-3">{title}</h3>
  </div>
);

const SectionDescription = ({ text }) => (
  <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">{text}</p>
);

const Divider = () => (
  <div className="flex items-center justify-center my-10">
    <div className="h-px w-32 bg-gray-200"></div>
    <div className="mx-4 text-gray-400">×</div>
    <div className="h-px w-32 bg-gray-200"></div>
  </div>
);

const SponsorsSection = () => (
  <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 font-inter">
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
        <SubsectionTitle icon={Star} title="Our Sponsors" />
        <SectionDescription text="We are grateful for the support of our esteemed sponsors who make Learning Utsav possible. Their commitment to education and innovation drives our success." />
        <TwoLogoLayout logos={sponsorLogos} alt="Sponsor logo" />
      </div>
    </div>
  </section>
);

const PartnersSection = () => (
  <section className="bg-white py-10 px-4 font-inter">
    <div className="max-w-6xl mx-auto">
      <SectionTitle icon={Users} title="Our Partners" />

      <div className="space-y-10">
        {/* Community Partners Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
          <SubsectionTitle icon={Building} title="Community Partners" />
          <SectionDescription text="Local communities and institutions that support our mission and help us connect with the community." />
          <TwoLogoLayout
            logos={communityPartnerLogos}
            alt="Community Partner logo"
          />
        </div>

        <Divider />

        {/* Collaborators Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
          <SubsectionTitle icon={Handshake} title="Collaborators" />
          <SectionDescription text="Industry experts and organizations that contribute their expertise to enrich our programs." />
          <LogoGrid logos={collaboratorLogos} alt="Collaborator logo" />
        </div>
      </div>
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
