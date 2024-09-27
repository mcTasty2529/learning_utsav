import { sponsors } from "../constants";

const SponsorCard = () => {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {sponsors.map((sponsor, i) => (
        <div key={i} className="bg-orange-500 p-5 rounded-md shadow-xl">
          <p>Name: {sponsor.name}</p>
          <p>Logo: {sponsor.logo}</p>
          <p>URL: {sponsor.url}</p>
        </div>
      ))}
    </div>
  );
};

export default SponsorCard;
