import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>

        <div>
          <h6 className={`${styles.heroHeadText} text-white  `}> 
            Hi, I'm <span className="text-[#915eff]"> Khizar Arif </span>{" "}
          </h6>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            I developed 3D visuals, user <br className="sm:block hidden"/> interfaces and web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-0 bottom-2 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-4 rounded-3xl border-secondary flex justify-center items-start p-2" >
            <motion.div  animate={{ y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: "loop" }} className="w-3 h-3 rounded-full mb-1 bg-secondary"/>

          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
