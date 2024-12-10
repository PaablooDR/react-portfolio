import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        {/* Title */}
        <h2 className="my-20 text-center text-4xl">
            About
            <span className="text-neutral-500"> Me</span>
        </h2>
        {/* Content */}
        <div className="flex flex-wrap">
            {/* About Me Image */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5}}
                className="w-full lg:w-1/2 lg:p-8"
            >
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={ aboutImg } alt="about" />
                </div>             
            </motion.div>
            {/* About Me Text */}
            <div className="w-full lg:w-1/2">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5}}
                    className="flex justify-center lg:justify-start"
                >
                    <p className="my-2 max-w-xl py-6">{ ABOUT_TEXT }</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About