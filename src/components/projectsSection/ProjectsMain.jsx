import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import lavogos from "../../assets/images/website-img-1.png";
import amigofabric from "../../assets/images/website-img-2.png";
import tourzania from "../../assets/images/website-img-3.jpg";
import bankofluck from "../../assets/images/website-img-4.jpg";

const projects = [
  {
    name: "LaVOGOS",
    year: "AUG2024",
    align: "right",
    image: lavogos,
    link: "https://lavogos.com/",
  },
  {
    name: "AmigoFebric",
    year: "JAN2025",
    align: "left",
    image: amigofabric,
    link: "https://amigofabric.com/",
  },
  {
    name: "Tourzania",
    year: "JAN2023",
    align: "right",
    image: tourzania,
    link: "#",
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: bankofluck,
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
