import { team } from "../constants";

const TeamCard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 font-inter">
      {team.map((member, index) => {
        return (
          <div
            key={index}
            className="bg-[#111111] flex flex-col justify-center items-center w-48 h-48  rounded-lg text-white"
          >
            <p>Name: {member.name}</p>
            <p>Logo: {member.logo}</p>
            <p>URL: {member.url}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TeamCard;
