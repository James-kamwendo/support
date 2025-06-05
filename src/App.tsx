import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Profile from "@/assets/me.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function SupportPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center bg-white"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={item}
        className="fixed top-0 left-0 right-0 p-6 border-b border-gray-200"
      >
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <div className="flex gap-4 ml-4">
            <a
              href="https://github.com/james-kamwendo"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-600 transition rounded-full p-2 border"
            >
              <Github size={20} className="text-gray-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/james-kamwendo"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-600 transition rounded-full p-2 border"
            >
              <Linkedin size={20} className="text-gray-600" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div variants={item} className="w-full mt-[8%] max-w-lg px-8 py-16 rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-18">👋 James 🖐️</h1>
          <h2 className="text-[20px] font-medium mb-4 text-[#2c2e2f]">
            As you support my work 
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4 text-[#2c2e2f]">
            <span className="text-lg font-normal">
              For your every penny, I am able to do
              <br /> more. Thank you for seeing my work.
            </span>
          </div>
        </div>

        <a
          href="https://www.paypal.com/paypalme/jameskamwendo"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="default"
            className="w-full hover:bg-blue-500 bg-[#6f4e37ac] h-[50px] rounded-3xl mb-4 text-base"  
          >
            <img
          src={Profile}
          alt="James Kamwendo"
          className="rounded-full h-[2.3rem] w-[2.3rem] border-4 border-white shadow-xl object-cover"
        /> Buy Me Coffee
          </Button>
        </a>

        <div className="text-center">
          <a
            href="mailto:jameskamwendo226@gmail.com"
            className="text-[#0070ba] hover:underline text-base flex justify-center items-center gap-2 font-medium"
          >
            Just talk to me by Email
          </a>
        </div>

        <div className="text-center mt-8 text-sm text-gray-600 max-w-sm mx-auto">
          🎉🥳 A huge thank you to everyone who has and is about to <br />{" "}
          support my work! Your contributions keep me thriving. 🥳🎉
        </div>
      </motion.div>

      <motion.div variants={item} className="fixed bottom-0 left-0 right-0">
        <div className="bg-gray-100 p-6 blur text-center w-full">
          Thank you!
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SupportPage;
