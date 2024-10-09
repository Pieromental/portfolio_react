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
import { download, downloadHover, resume } from "../assets";
import { textVariant } from "../utils/motion";
import { BiDownload } from "react-icons/bi";
import Button from "@mui/material/Button";

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
              href="https://firebasestorage.googleapis.com/v0/b/personal-storage-7264b.appspot.com/o/CV%20PIERO%20SALAZAR.pdf?alt=media&token=a6f0baf0-1ec9-4093-8d19-fb2c46e5e801"
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
