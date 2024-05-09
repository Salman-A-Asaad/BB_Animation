import { ActorsType, data } from "../data/data";
import Card from "./Card";
import { motion } from "framer-motion";
const Actors = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
      transition: {
        staggerChildren: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.3,
        mass: 0.4,
        damping: 8,
        staggerChildren: 0.25,
        when: "beforeChildren",
      },
    },
    exit: {
      x: "-100vh",
      transition: { ease: "easeInOut" },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full"
    >
      <div className="container mx-auto px-4 pt-4">
        {" "}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3 py-4">
          {data.map((ele: ActorsType) => {
            return (
              <motion.div key={ele.id} variants={cardVariants}>
                <Card actor={ele} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Actors;
