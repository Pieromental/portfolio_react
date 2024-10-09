import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { styled } from "@mui/system";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { LoadingButton } from "@mui/lab";
import { BiMailSend } from "react-icons/bi";

const CustomLoadingButton = styled(LoadingButton)(({ theme }) => ({
  backgroundColor: "#141414",
  fontWeight: "bold",
  fontFamily: "Beckman",
  color: "#d4d4d8",
  "&:hover": {
    backgroundColor: "#858585",
    color: "#1f1f1f",
  },
  "&.Mui-disabled": {
    backgroundColor: "#444444",
    color: "#888888",
  },
}));

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        "service_xeuqeaq", // paste your ServiceID here (you'll get one when your service is created).
        "template_ey9bds7", // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: "Piero Salazar Calle", // put your name here.
          from_email: form.email,
          to_email: "pieromental@gmail.com", //put your email here.
          message: form.message,
        },
        "jl86SG7UXBE2wpjbz" //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>¿Te interesa conocer más?</p>
        <h3 className={styles.sectionHeadTextLight}>Contáctame</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Tu nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cuál es tu nombre?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Tu correo</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cuál es tu correo?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Tu mensaje</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="¿Cuál es tu mensaje?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>
          <CustomLoadingButton
            size="large"
            onClick={handleSubmit}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            endIcon={<BiMailSend />}
            className="  sm:text-[20px] text-[16px] 
            w-[150px] h-[50px]  transition duration-[0.2s] ease-in-out"
          >
            {loading ? "Enviando..." : "Enviar"}
          </CustomLoadingButton>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
