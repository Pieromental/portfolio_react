import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { styled } from "@mui/system";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { LoadingButton } from "@mui/lab";
import { BiMailSend } from "react-icons/bi";
import { Snackbar, Alert } from "@mui/material";
const CustomLoadingButton = styled(LoadingButton)(({ theme }) => ({
  backgroundColor: "#003785",
  fontWeight: "bold",
  fontFamily: "Beckman",
  color: "#f4f4f6",
  "&:hover": {
    backgroundColor: "#1465bb",
    color: "#1f1f1f",
  },
  "&.Mui-disabled": {
    backgroundColor: "#b9ffff",
    color: "#003785",
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
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Cerrar el Snackbar
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Enviar el correo usando emailjs
      await emailjs.send(
        "service_xeuqeaq", // Coloca tu ServiceID aquí
        "template_ey9bds7", // Coloca tu TemplateID aquí
        {
          from_name: form.name,
          to_name: "Piero Salazar Calle", // Pon tu nombre aquí
          from_email: form.email,
          to_email: "pieromental@gmail.com", // Pon tu correo aquí
          message: form.message,
        },
        "jl86SG7UXBE2wpjbz" // Coloca tu Public Key aquí
      );

      // Si el envío es exitoso
      setLoading(false);
      setSnackbarMessage("¡El mensaje fue enviado con éxito!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true); // Mostrar el Snackbar con mensaje de éxito

      // Reiniciar el formulario
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // Si ocurre un error en el envío del correo
      setLoading(false);
      setSnackbarMessage("Algo salió mal. Por favor, inténtalo de nuevo.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true); // Mostrar el Snackbar con mensaje de error
      console.error("Error al enviar el correo:", error);
    }
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-blue_4 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>¿Te interesa conocer más?</p>
        <h3 className={styles.sectionHeadTextLight}>Contáctame</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-blue_1 font-medium mb-4">Tu nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cuál es tu nombre?"
              className="bg-platinumLight py-4 px-6
              placeholder:text-taupe
              text-blue_1 rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-blue_1 font-medium mb-4">Tu correo</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cuál es tu correo?"
              className="bg-platinumLight py-4 px-6
              placeholder:text-taupe
              text-blue_1 rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-blue_1 font-medium mb-4">Tu mensaje</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="¿Cuál es tu mensaje?"
              className="bg-platinumLight py-4 px-6
              placeholder:text-taupe
              text-blue_1 rounded-lg outline-none
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} // Duración de la alerta (3 segundos)
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity} // Cambiar el color basado en la severidad
          sx={{ width: "100%" }}
        >
          {snackbarMessage} {/* Mostrar el mensaje del Snackbar */}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
