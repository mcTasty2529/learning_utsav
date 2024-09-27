import TeamCard from "../Components/TeamCard";



const Team = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 font-inter border-b-2">
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-5xl font-bold text-center mb-8 font-bebas ">
          Meet our Team
        </h2>
        <div className="flex justify-center items-center w-full">
          <TeamCard />
        </div>
      </div>
    </section>
  );
};

export default Team;
