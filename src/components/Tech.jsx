import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { technologies } from '../constants';

const TechCard = ({ name, icon }) => (
  <Card
    sx={{
      height: '150px', // Fija la altura de la tarjeta
      width: '150px', // Fija el ancho de la tarjeta
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 1, // Ajusta el padding para que no sea muy grande
      boxShadow: 3,
    }}
  >
    <Avatar src={icon} alt={name} sx={{ width: 80, height: 80 }} /> {/* Ajusta el tamaño del icono */}
    <CardContent sx={{ padding: '8px 0 0 0' }}> {/* Reduce el padding interno */}
      <Typography variant="subtitle1" align="center" sx={{ fontSize: '0.8rem' }}>
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

      <Grid container spacing={2} sx={{ marginTop: 4 }}> {/* Ajusta el espaciado entre tarjetas */}
        {technologies.map((tech) => (
          <Grid item xs={6} sm={4} md={2} key={tech.name}> {/* Controla el tamaño de las tarjetas en diferentes pantallas */}
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

export default SectionWrapper(Tech, 'tech');
