import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon }) => {
 return(
  <Tilt className="xs:w-[250px] w-full">
  <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className=" rounded-[20px] w-full green-pink-gradient p-[1px] shadow-card">
    <div 
    options={{
      max: 45,
      scale: 1,
      speed: 450
    }}
      className=" bg-tertiary rounded-[20px] flex flex-col justify-evenly items-center min-h-[280px] px-12 py-5"
    >
      <img src={icon} alt="title" className="w-16 h-16 object-contain" />
      <h3 className="text-white text-[20px] text-center font-bold"> { title } </h3>
    </div>
  </motion.div>
</Tilt>
 )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>      
        <p className={`${styles.sectionSubText}`}> Introduction </p>
        <h2 className={`${styles.sectionHeadText}`}> Overview. </h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17] max-w-3xl leading-[30px]">
        I'm a Junior Software Frontend Developer with Experience in javascript
        FrameWork like "React". I also have expertice in HTML, css and
        responsive Design. I also convert Figma Design and HTML templates into
        React .
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-20 ">
        {
          services.map((service, index) => (
            <ServiceCard key={service.title}  index={index}  {...service} />
          ))
        }
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
