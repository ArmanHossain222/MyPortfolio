import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Software Engineer | ERP TSS Expart
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Md Arman <br className="sm:hidden md:block" />
        Hossain
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A Passionate ERP Expert and MERN Stack Web Developer<br />
        with 4+ years of experience in ERP Management and Full-Stack Web Development.
      </motion.p>
    </div>
  );
};

export default HeroText;
