import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full bg-tertiary rounded-2xl p-2 flex sm:w-[360px] flex-col"
      >
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt={name}
            className=" rounded-2xl w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
            className="w-10 h-10 flex justify-center rounded-full black-gradient items-center cursor-pointer">
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-[24px] text-white font-bold"> {name} </h3>
          <p className=" text-secondary text-[14px] mt-2"> {description}  </p>
        </div>

        <div className="flex flex-wrap mt-4 gap-4">
          {
            tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}> #{tag.name} </p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}> My Work </p>
        <h2 className={`${styles.sectionHeadText}`}> Projects. </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          Following Project showcase my skills and experience through real-world
          example of my work. Each project is briefly described with links to
          code repositories and live demo in it.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
