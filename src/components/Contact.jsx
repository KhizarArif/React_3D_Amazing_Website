import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_185puxq",
        "template_500mlka",
        {
          from_name: form.name,
          to_name: "Khizar",
          from_email: form.email,
          to_email: "khizararif112233@gmail.com",
          message: form.message,
        },
        "XWcRLJB7ceoDF6Get"
      )
      .then(() => {
        setLoading(false);
        alert("Everything Fine! we Will Contact You As Soon As Possible!");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Something went wrong!");
      });
  };

  return (
    <div className=" xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=" bg-black-100 rounded-2xl flex-[0.75] p-8 w-full"
      >
        <p className={styles.sectionSubText}> GET IN TOUCH. </p>
        <p className={styles.sectionHeadText}> Contact. </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col mt-12 gap-8"
        >
          <label className=" flex flex-col">
            <span className=" text-white mb-4 font-medium"> Your Name </span>
            <input
              type="text"
              name="name"
              placeholder="What's Your Name"
              value={form.name}
              onChange={handleChange}
              className=" outline-none border-none rounded-lg bg-tertiary font-medium py-4 px-6 placeholder:text-secondary text-white"
            />
          </label>
          <label className=" flex flex-col">
            <span className=" text-white mb-4 font-medium"> Your Email </span>
            <input
              type="email"
              name="email"
              placeholder="what's Your Email"
              value={form.email}
              onChange={handleChange}
              className=" outline-none border-none rounded-lg bg-tertiary font-medium py-4 px-6 placeholder:text-secondary text-white"
            />
          </label>
          <label className=" flex flex-col">
            <span className=" text-white mb-4 font-medium"> Your Message </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              placeholder="What do you want to say"
              onChange={handleChange}
              className=" outline-none border-none rounded-lg bg-tertiary font-medium py-4 px-6 placeholder:text-secondary text-white"
            />
          </label>

          <button
            type="submit"
            className=" w-fit py-3 px-8 bg-tertiary rounded-xl cursor-pointer shadow-md shadow-primary text-white outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=" xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
