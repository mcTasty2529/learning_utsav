import { ChevronDown } from "lucide-react";
import { CountdownTimer } from "../Components/Timer";
import { Link } from "react-router-dom";

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
      <section className="bg-gray-100 py-16 px-4 font-inter">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            About the Event
          </h2>
          <p className="text-lg text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
