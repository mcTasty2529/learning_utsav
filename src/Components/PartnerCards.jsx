import { partners } from "../constants";

const PartnerCards = () => {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {partners.map((partner, i) => (
        <div key={i} className="bg-orange-500 p-5 rounded-md shadow-xl">
          <p>Name: {partner.name}</p>
          <p>Logo: {partner.logo}</p>
          <p>URL: {partner.url}</p>
        </div>
      ))}
    </div>
  );
};

export default PartnerCards;
