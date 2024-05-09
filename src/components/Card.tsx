import { Link } from "react-router-dom";
import { motion } from "framer-motion";
type CardType = {
  actor: {
    id: number;
    name: string;
    quote: string;
    forWhat: string;
    img: string;
    sound: string;
  };
};
const Card = ({ actor }: CardType) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <Link to={`/actor/${actor.id}`}>
        {" "}
        <motion.img
          initial={{
            scale: 1,
            rotate: 0,
          }}
          whileHover={{
            scale: 1.2,
            rotate: 10,
          }}
          className="w-full h-[270px] object-cover "
          src={actor.img}
          alt={actor.name}
        />
      </Link>
    </div>
  );
};

export default Card;
