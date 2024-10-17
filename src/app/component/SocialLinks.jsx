import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="fixed flex flex-col space-y-4 top-1/3 right-4">
      <a
        href="https://www.linkedin.com/in/saima-alam-tanni-677464207/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-white transition transform hover:text-pink-500 hover:scale-110"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/saimatanni"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-white transition transform hover:text-pink-500 hover:scale-110"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/sayma.alam.773/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-white transition transform hover:text-pink-500 hover:scale-110"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialLinks;
