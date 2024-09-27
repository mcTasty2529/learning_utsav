import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/",
    },
    {
      name: "Facebook",
      icon: FaFacebookSquare,
      url: "https://www.facebook.com/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/",
    },
  ];

  return (
    <footer className="bg-[#111111]  text-white">
      <div className=" mx-auto w-full">
        <div className=" py-8 flex flex-col justify-center items-center space-y-6">
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                to={link.url}
                className="text-white hover:text-gray-300 transition-colors duration-300"
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <p>Follow us on our socials for Updates.</p>
        </div>
        <div className=" py-4 ">
          <p className="text-sm text-center">
            &copy; 2024 KEC Electronics Club. All rights reserved.
          </p>
          <p className="text-sm text-center mt-2">
            Developed and maintained by{" "}
            <Link
              to={"https://github.com/mcTasty2529"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className=" underline">Subodh Pokhrel</span>
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
