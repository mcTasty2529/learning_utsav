import { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  const socialLinks = [
    {
      name: "Facebook",
      image: "/assets/fb-logo.png",
      href: "https://www.facebook.com/learningutsav",
    },
    {
      name: "LinkedIn",
      image: "/assets/li-logo.png",
      href: "https://www.linkedin.com/company/learning-utsav",
    },
    {
      name: "Instagram",
      image: "/assets/ig-logo.png",
      href: "https://www.instagram.com/learningutsav",
    },
    {
      name: "TikTok",
      image: "/assets/tt-logo.png",
      href: "https://www.tiktok.com/@learningutsav",
    },
    {
      name: "Twitter",
      image: "/assets/x-logo.png",
      href: "https://x.com/learning_utsav",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl ">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We&apos;d love to hear from you! Please fill out the form below or
            connect with us on social media.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Form section remains unchanged */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form inputs remain unchanged */}
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.447 10.553a1 1 0 000-1.788l-14-7a1 1 0 00-1.409 1.169l1.429 5A1 1 0 004.429 9H9a1 1 0 110 2H4.429a1 1 0 00-.962.725l-1.428 5a1 1 0 001.408 1.17l14-7z" />
                  </svg>
                </button>
              </form>
              {submitted && (
                <div
                  className="mt-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
                  role="alert"
                >
                  <p className="font-bold">Thank you for your message!</p>
                  <p>We&apos;ll get back to you soon.</p>
                </div>
              )}
              {error && (
                <div
                  className="mt-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                  role="alert"
                >
                  <p className="font-bold">Error</p>
                  <p>{error}</p>
                </div>
              )}
            </div>
          </div>

          {/* Updated Connect With Us section */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Connect With Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-600">learningutsav@gmail.com</span>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Follow Us
                  </h4>
                  <div className="grid grid-cols-5 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="transform hover:scale-110 transition-transform duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={social.image}
                          alt={`${social.name} logo`}
                          className="h-8 w-8 object-contain"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Join our Discord.
                  </h4>
                  <div className="grid grid-cols-5 gap-4">
                    <Link
                      to={"https://discord.gg/RzubQrbzzw"}
                      className="transform hover:scale-110 transition-transform duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="assets/dis-logo.png"
                        alt="discord"
                        height={40}
                        width={40}
                      />
                    </Link>
                  </div>
                </div>

                <div className="mt-6 ">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Visit our Linktree.
                  </h4>
                  <div className="grid grid-cols-5 gap-4">
                    <Link
                      to={"https://linktr.ee/learningutsav"}
                      className="transform hover:scale-110 transition-transform duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="assets/linktree-logo.png"
                        alt="discord"
                        height={60}
                        width={60}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
