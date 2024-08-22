
import { motion,AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";
import "./About.css";
import PropTypes from "prop-types";


const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <AnimatePresence>
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="  service-card w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" tilt-container bg-blue_1 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <div className="content">
          <div className="card-front">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-flashWhite text-[22px] font-bold text-center">
              {title}
            </h3>
          </div>
          <div className="card-back">
            <p className="text-flashWhite text-[18px] font-bold text-center">{description}</p>
          </div>
        </div>
      </Tilt>
    </motion.div>
    </AnimatePresence>
  );
};
ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Sobre mí</p>
        <h2 className={styles.sectionHeadText}>Resumen Profesional.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-eerieBlack text-[18px] max-w-3xl leading-[30px]"
      >
        Soy Piero Salazar, Bachiller en Ingeniería en Computación e Informática
        con una sólida experiencia en desarrollo web, móvil y de escritorio.
        Especializado en frameworks backend como Laravel y Django, y frontend
        como VueJS, React y Angular. He colaborado con múltiples empresas,
        aportando soluciones innovadoras y eficientes en cada proyecto. Además,
        tengo experiencia como analista de desarrollo, donde visité clientes
        para entender sus necesidades y obtener requerimientos clave para el
        éxito de los proyectos. Mi pasión por la tecnología me impulsa a crear
        aplicaciones escalables y centradas en la experiencia del usuario,
        siempre buscando mejorar y aprender nuevas tecnologías para ofrecer lo
        mejor en cada desafío.
      </motion.p>

      {/* Grid System */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
