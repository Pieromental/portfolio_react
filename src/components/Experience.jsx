import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { styled } from "@mui/material/styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { resume } from "../assets";
import { textVariant } from "../utils/motion";
import { BiDownload } from "react-icons/bi";
import { urls } from "../constants";
import Button from "@mui/material/Button";

const downloadPDF = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("No se pudo descargar el archivo");
    }
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "PIERO_SALAZAR_CV.pdf"; // Cambia el nombre si lo deseas
    link.click();
    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error("Error al descargar el archivo PDF:", error);
  }
};

const ColorButton = styled(Button)(({ theme }) => ({
  border: "10px  ",
  fontFamily: "Beckman",
  fontWeight: "bold",
  color: "#d4d4d8",
  backgroundColor: "#333333",
  "&:hover": {
    backgroundColor: "#858585",
    color: "#1f1f1f",
  },
}));

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#eaeaec",
      color: "#292929",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid  #232631",
    }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          ¿Que empresas han apostado por mí?
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Experiencia Laboral.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: "#eaeaec",
              color: "#292929",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #232631",
            }}
            iconStyle={{ background: "#333333" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <ColorButton
              size="large"
              onClick={() => downloadPDF(urls.MYCV)}
              variant="contained"
              endIcon={<BiDownload />}
            >
              Mi Curriculum
            </ColorButton>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
