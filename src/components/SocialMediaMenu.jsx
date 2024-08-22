import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaPlus, FaTimes, FaGithub } from 'react-icons/fa';

const menuVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  closed: {
    clipPath: "inset(100% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3
    }
  }
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const SocialMediaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center">
      {/* Menú de redes sociales */}
      <motion.div
        className="mb-4 flex flex-col items-center space-y-4 bg-white rounded-full p-2"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.a
          href="https://www.linkedin.com/in/pierosalazarpro/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
          variants={itemVariants}
        >
          <FaLinkedin size={24} />
        </motion.a>
        <motion.a
          href="https://wa.me/51923937155"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
          variants={itemVariants}
        >
          <FaWhatsapp size={24} />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/salazarcallepiero/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
          variants={itemVariants}
        >
          <FaInstagram size={24} />
        </motion.a>
        <motion.a
          href="https://github.com/Pieromental"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-4 rounded-full shadow-lg flex items-center justify-center"
          variants={itemVariants}
        >
          <FaGithub size={24} />
        </motion.a>
      </motion.div>

      {/* Botón principal */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={toggleMenu}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg focus:outline-none"
      >
        {isOpen ? <FaTimes size={24} /> : <FaPlus size={24} />}
      </motion.button>
    </div>
  );
};

export default SocialMediaMenu;
