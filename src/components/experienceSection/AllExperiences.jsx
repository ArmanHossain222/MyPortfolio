import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Senior Executive ERP & ICT",
    company: "JMC Group",
    date: "2021 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of ERP SOftware applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Junior Developer",
    company: "JMC FTS",
    date: "2024 - 2025",
    responsibilities: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "Digital Martketing Consultant",
    company: "AmigoFebric",
    date: "2024 - 2025 (Remotely",
    responsibilities: [
      "Develop and implement effective digital marketing strategies.",
      "Analyze campaign performance and generate actionable reports.",
      "Guide clients in choosing the right platforms for their target audience.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
