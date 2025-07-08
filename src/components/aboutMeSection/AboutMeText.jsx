import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I`m Md. Arman Hossain — a dedicated Software Engineer and MERN Stack Developer with 4+ years of experience.
         I work as a Senior Executive (ERP & ICT) at JMC Group, 
         managing ERP systems and solving technical issues. 
         I`m also a web development instructor and run a YouTube channel called Ar-tech,
          where I share real-world coding tutorials. 
          I`m passionate about continuous learning and helping others grow in tech.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
