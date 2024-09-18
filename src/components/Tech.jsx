import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Typography, Avatar, Grid } from "@mui/material"; // Usamos el Grid estable
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { technologies } from "../constants";

const TechCard = ({ name, icon }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 1, // Ajusta el padding para que no sea muy grande
      boxShadow: 3,
      background: 'rgb(244,244,246)',  // Color base
      backgroundImage: 'linear-gradient(165deg, rgba(244,244,246,1) 0%, rgba(198,206,210,1) 45%)',  // Gradiente
    }}
  >
    <Avatar src={icon} alt={name} sx={{ width: 80, height: 80 }} />
    <CardContent sx={{ padding: "0 0 0 0" }}>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ fontSize: "0.8rem" }}
      >
        {name}
      </Typography>
    </CardContent>
  </Card>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Mis Habilidades</p>
        <h2 className={styles.sectionHeadTextLight}>Tecnológicas.</h2>
      </motion.div>

      <Grid container spacing={4}>
        {technologies.map((tech, index) => (
          <Grid item xs={6} sm={3} md={2} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TechCard name={tech.name} icon={tech.icon} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
