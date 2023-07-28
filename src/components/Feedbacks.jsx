import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const FeedbackCards = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl sm:w-[320px] w-full"
  >
    <div className="text-white font-black text-[48px]"> " </div>
    <div className="mt-1">
      <p className="text-white text-[18px] tracking-wider"> {testimonial} </p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white text-[16px] font-medium">
            <span className=" blue-text-gradient"> @ </span> {name}
          </p>
          <p className="text-[12px] mt-1 text-secondary ">
            {" "}
            {designation} of {company}{" "}
          </p>
        </div>

        <img
          src={image}
          alt="image"
          className=" rounded-full w-10 h-10 object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <motion.div>
          <p className={`${styles.sectionSubText}`}> WHAT OTHERS SAY </p>
          <h2 className={`${styles.sectionHeadText}`}> Testimonials. </h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCards
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
