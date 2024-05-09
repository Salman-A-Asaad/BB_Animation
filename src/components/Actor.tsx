import { useParams } from "react-router-dom";
import { ActorsType, data } from "../data/data";
import { useState, useEffect } from "react";
import { MdLibraryMusic } from "react-icons/md";
import { motion } from "framer-motion";
const Actor = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", delay: 0.5 },
    },
    exit: {
      x: "-100vh",
      transition: { ease: "easeInOut" },
    },
  };
  const textVariants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 1,
        staggerDirection: -1,
      },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const id: string = useParams().id!;
  const actor: ActorsType = data.find((ele: ActorsType) => ele.id === +id)!;

  const playSound = () => {
    if (audio) {
      if (!isPlaying) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } else {
      const newAudio = new Audio(actor.sound);
      setAudio(newAudio);
      newAudio.play();
      setIsPlaying(true);

      newAudio.onended = () => {
        setIsPlaying(false);
        setAudio(null);
      };
    }
  };

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        setIsPlaying(false);
        setAudio(null);
      }
    };
  }, [audio]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row pt-5 gap-4 ">
          <motion.img
            initial={{
              opacity: 0,
              x: "-100vw",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1,
              type: "spring",
            }}
            className="md:h-[450px] lg:h-[500px] rounded-lg"
            src={actor.img}
            alt={actor.name}
          />
          <motion.div
            variants={textVariants}
            className="flex flex-col text-white md:pt-6 gap-5 w-full"
          >
            <h1 className="font-bold text-xl">
              {actor.name}{" "}
              <span
                onClick={playSound}
                className="main-color cursor-pointer text-xl ms-4 inline-block"
              >
                <MdLibraryMusic />
              </span>
            </h1>
            <motion.p
              variants={infoVariants}
              className="italic"
            >{`" ${actor.quote} "`}</motion.p>
            <motion.h3 variants={infoVariants} className="sm:text-end text-sm ">
              {actor.forWhat}
            </motion.h3>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Actor;
