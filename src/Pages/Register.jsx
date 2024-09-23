import GoogleForm from "../Components/GoogleForm";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <section
        className="flex-grow flex items-center justify-center p-4 bg-cover bg-center text-white font-inter"
        style={{ backgroundImage: "url('assets/Initial.png')" }}
      >
        <div className="container mx-auto px-4 py-16 mt-8 md:mt-12 lg:mt-16">
          <div className="flex flex-col lg:flex-row items-stretch border-2 border-[#fff7f741] rounded-lg">
            {/* Form Section */}
            <div className="flex-1 bg-white shadow-lg rounded-lg lg:rounded-r-none  overflow-hidden ">
              <h2 className="text-2xl font-bold text-gray-800 p-6 bg-gray-50 border-b">
                Registration Form
              </h2>
              <div className="p-6">
                <GoogleForm
                  src="https://docs.google.com/forms/d/e/1FAIpQLSetQyq7WKJHVY9ToffIARW4sN3s7liRC1vnfEYX5f3_n9I-gA/viewform?usp=sf_link"
                  width="100%"
                  height="600"
                />
              </div>
            </div>

            {/* Typography Section */}
            <div
              className="flex-1 bg-cover bg-no-repeat bg-center rounded-r-lg shadow-lg p-8 items-center justify-center hidden lg:flex flex-col"
              style={{ backgroundImage: "url('assets/form_bg.png')" }}
            >
              <div className="text-6xl md:text-8xl font-bold mb-4 font-bebas">
                Learning Utsav.
              </div>
              <p className="text-xl md:text-3xl mb-8 font-dancing">
                Break Limits. Build Skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="bg-white py-16 px-4 font-inter">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Sample Text
          </h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            Our event is designed to inspire, educate, and connect. With a
            lineup of world-class speakers, interactive workshops, and
            networking opportunities, you will gain valuable insights and forge
            lasting connections. Whether you are a seasoned professional or just
            starting your journey, there is something here for everyone. Join us
            and be part of shaping the future of our industry.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;
