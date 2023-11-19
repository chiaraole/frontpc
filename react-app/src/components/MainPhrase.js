import React from 'react';
import { motion } from 'framer-motion';

const MainPhrase = () => {
    return (
      <motion.h1
        style={{
          fontSize: '4em', 
          textAlign: 'left', 
          position: 'relative', // Añade posición relativa
          top: '-20px', // Ajusta este valor para mover la frase hacia arriba
          margin: '0px 50px' // Margen de 0px en la parte superior e inferior, y 40px a los lados
        }}
      >
        Viajes en Tinta: Historias que Merecen ser Contadas de Nuevo
      </motion.h1>
    );
  };
  
  export default MainPhrase;
  
  
