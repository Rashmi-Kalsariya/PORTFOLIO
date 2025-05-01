import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

// Categorize projects by their type
const categorizeProjects = (projects: TProject[]) => {
  const designingProjects = projects.filter((project) =>
    project.tags.some((tag) => tag.name.toLowerCase() === "css")
  );
  const fullStackProjects = projects.filter((project) =>
    project.tags.some((tag) =>
      ["react", "node", "mongodb"].includes(tag.name.toLowerCase())
    )
  );

  return { designingProjects, fullStackProjects };
};

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveLink,
}) => {
  return (
    <a href={liveLink} target="_blank" rel="noopener noreferrer">
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          glareEnable
          tiltEnable
          tiltMaxAngleX={30}
          tiltMaxAngleY={30}
          glareColor="#aaa6c3"
        >
          <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px] cursor-pointer">
            <div className="relative h-[230px] w-full">
              <img
                src={image}
                alt={name}
                className="h-full w-full rounded-2xl object-cover"
              />
              <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
                <div
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents opening the live link
                    window.open(sourceCodeLink, "_blank");
                  }}
                  className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-[24px] font-bold text-white">{name}</h3>
              <p className="text-secondary mt-2 text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </Tilt>
      </motion.div>
    </a>
  );
};

const Works = () => {
  const { designingProjects, fullStackProjects } = categorizeProjects(projects);

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 space-y-16">
        {/* Designing Projects Section */}
        <div>
          <h2 className="text-white text-[32px] font-bold mb-5">
            DESIGNING PROJECTS
          </h2>
          <div className="flex flex-wrap gap-20 justify-center">
            {designingProjects.map((project, index) => (
              <ProjectCard key={`designing-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>

        {/* Full Stack Projects Section */}
        <div>
          <h2 className="text-white text-[32px] font-bold mb-5">
            NODE PROJECTS
          </h2>
          <div className="flex flex-wrap gap-20 justify-center">
            {fullStackProjects.map((project, index) => (
              <ProjectCard key={`fullstack-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");