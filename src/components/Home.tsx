import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  const buttonVariants = {
    hover: {
      backgroundColor: "#33691e",
      color: "white",
      borderColor: "white",
      scale: 1.1,
      transition: {
        duration: 0.5,
        repeat: 2,
      },
    },
  };
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      x: "-100vh",
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full h-home"
    >
      <div className="container mx-auto px-4 pt-4 text-white  w-full flex flex-col items-start justify-center h-home gap-10">
        <h1 className="text-[1.4rem] font-bold">
          Information about all characters
        </h1>
        <Link to={"/actors"}>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="border-2 p-5 ms-6 rounded-xl main-color main-color-border font-bold main-box-shadow"
          >
            Choose your character
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
