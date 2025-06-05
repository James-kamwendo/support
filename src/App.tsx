import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Coffee, Github, Linkedin } from "lucide-react";
import Profile from "@/assets/me.jpg"; // Assuming you have a profile image in your assets

// const supporters = [
//   { name: "Ava Smith", message: "Keep creating!", amount: "$5" },
//   { name: "John Doe", message: "Love your components!", amount: "$10" },
//   { name: "Liam N.", message: "Incredible work from Malawi!", amount: "$3" },
// ];

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
      className="h-screen justify-center bg-white p-6 flex flex-col items-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="mb-6">
        <img
          src={Profile}
          alt="James Kamwendo"
          className="rounded-full h-[6rem] w-[6rem] border-4 border-white shadow-xl object-cover"
        />
      </motion.div>

      <motion.h1
        variants={item}
        className="text-3xl font-semibold mb-4 text-center text-gray-700"
      >
        James Kamwendo
      </motion.h1>

      <motion.p
        variants={item}
        className="max-w-xl text-center text-gray-600 mb-6"
      >
        {/* Developer, designer, and maker of tools that empower creators and solve
        real-world problems. I build everything from slick Flutter UIs to
        open-source web tools — and your support fuels it all. */}
        Hie world❤️ Here is my personal support page. If you find value in what I build or want to fuel more innovation, feel free to support my work 🙏
      </motion.p>

      {/* Supporters */}
      {/* <div>
        <h2 className="text-xl font-semibold text-center mb-4">🥳🎉 To My Supporters</h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          A huge thank you to everyone who has and is about to <br /> support my work! Your
          contributions keep me thriving.
        </p>
      </div> */}

      <motion.div variants={item} className="flex gap-4 mb-8">
        <a
          href="https://www.paypal.com/paypalme/jameskamwendo"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="default" className="flex gap-2 items-center">
            <Coffee className="animate-spin text-8xl" /> Buy Me Coffee
          </Button>
        </a>
        <a href="mailto:jameskamwendo226@gmail.com">
          <Button variant="outline" className="flex gap-2 text-gray-700 items-center">
            <Mail size={18} /> Email Me
          </Button>
        </a>
      </motion.div>

      
      {/* <motion.div
        variants={item}
        className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-3xl w-full"
      >
        {supporters.map((s, i) => (
          <motion.div
            key={i}
            variants={item}
            className="bg-white/10 rounded-2xl p-4 backdrop-blur-md shadow-lg border border-white/10"
          >
            <p className="text-white font-semibold">{s.name}</p>
            <p className="text-gray-300 text-sm">“{s.message}”</p>
            <p className="text-sm text-yellow-400 font-semibold mt-1">
              {s.amount}
            </p>
          </motion.div>
        ))}
      </motion.div> */}

      <motion.div variants={item} className="mt-18 flex gap-6 text-gray-600">
        <a
          href="https://github.com/james-kamwendo"
          target="_blank"
          rel="noreferrer"
          className="rounded-full p-2 border"
        >
          <Github size={24} className="hover:text-gray-600 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/james-kamwendo"
          target="_blank"
          rel="noreferrer"
          className="rounded-full p-2 border"
        >
          <Linkedin className="hover:text-gray-600 transition" />
        </a>
      </motion.div>

      {/* Supporters */}
      <div className="mt-12 px-8 py-6 border-6 border-gray-200 rounded-lg ">
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">🥳🎉 To My Supporters 🎉🥳</h2>
        <div className="h-[.2px] mb-2 w-full bg-gray-200" />
        <p className="text-gray-600 text-base text-center">
          A huge thank you to everyone who has and is about to <br /> support my work! Your
          contributions keep me thriving.
        </p>
      </div>
    </motion.div>
  );
}

export default SupportPage;
