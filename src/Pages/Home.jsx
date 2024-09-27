import { ChevronDown } from "lucide-react";
import { CountdownTimer } from "../Components/Timer";
import { Link } from "react-router-dom";
import PartnerCards from "../Components/PartnerCards";
import SponsorCard from "../Components/SponsorCard";

const Home = () => {
  // Set your target date here
  const targetDate = "2024-10-08T00:00:00";

  return (
    <div className="min-h-screen flex flex-col">
      <section
        className="h-screen flex flex-col justify-center items-center text-center p-4 bg-cover bg-center text-white font-inter font-bold mt-16"
        style={{ backgroundImage: "url('assets/Initial.png')" }}
      >
        <div className="text-6xl md:text-8xl font-bold mb-4 font-bebas">
          Learning Utsav.
        </div>
        <p className="text-xl md:text-3xl mb-8 font-dancing">
          Break Limits. Build Skills.
        </p>
        <CountdownTimer targetDate={targetDate} />
        <p className="text-xl md:text-3xl mt-8 mb-8 font-bebas">To GO</p>

        <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-opacity-90 transition duration-300">
          <Link to={"/register"}>Register Now</Link>
        </button>
        <ChevronDown className="mt-12 animate-bounce" size={32} />
      </section>

      {/* Additional Content Section */}
      <section className="bg-gray-100 py-16 px-4 font-inter border-b-2">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            About this Event
          </h2>
          <p className="text-lg px-4 md:px-0 text-gray-700 text-center">
            <b>Learning Utsav</b> is a one-of-a-kind challenge designed to help
            you sharpen your skills in cutting-edge tech fields: Electronics,
            Software/Web Development, AI/Data Science, Cybersecurity, and Cloud
            Technologies. This innovative program offers a unique blend of
            learning and celebration, perfectly timed with the festive season.
          </p>
          <p className="text-lg px-4 md:px-0 text-gray-700 text-center">
            Use this festive season not only for celebration but also to elevate
            your skills, expand your professional network, and showcase your
            progress. Whether you&apos;re a working professional aiming to stay
            ahead in your field or a student laying the foundation for a tech
            career, Learning Utsav is the perfect way to learn, share, and grow.
            Join us in this exciting learning adventure and transform your tech
            skills while creating lasting connections. Don&apos;t miss this
            opportunity to make your festive season both enjoyable and
            intellectually rewarding!
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4 font-inter border-b-2">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
          <div className="flex justify-center items-center w-full">
            <PartnerCards />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4 font-inter border-b-2">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
          <div className="flex justify-center items-center w-full">
            <SponsorCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
