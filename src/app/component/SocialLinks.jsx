import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex justify-center mt-8 space-x-4">
      <a
        href="https://www.linkedin.com/in/your-linkedin"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-white transition transform hover:text-pink-500 hover:scale-110"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/your-github"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-white transition transform hover:text-pink-500 hover:scale-110"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/your-facebook"
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
