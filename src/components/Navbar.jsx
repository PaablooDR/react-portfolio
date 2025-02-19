import logo from "../assets/pabloDRLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        {/* Left Logo */}
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-12" src={ logo } alt="logo" />
        </div>
        {/* Social Media */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a 
              href="https://www.linkedin.com/in/pablo-de-gregorio-2769b8327" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/PaablooDR" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-gray-400"
            >
              <FaGithub />
            </a>
        </div>
    </nav>
  )
}

export default Navbar