import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 pt-4">
        <div className="flex flex-row justify-start items-center">
          <Link to="/">
            <motion.img
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              className="w-[50px]"
              src="/assets/icon/breaking_bad_icon.png"
              alt=""
            />
          </Link>
          <motion.div
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="w-full"
          >
            <h1 className="text-white ms-4 text-[1.5rem] w-full border-b-2 pb-3 font-bold">
              Breaking Bad
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
