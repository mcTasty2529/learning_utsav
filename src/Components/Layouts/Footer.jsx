import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/learning-utsav",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/learningutsav",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/learningutsav",
    },
    {
      name: "Tiktok",
      icon: FaTiktok ,
      url: "https://www.tiktok.com/",
    },
    {
      name: "Twitter",
      icon: FaXTwitter  ,
      url: "https://www.x.com/",
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
