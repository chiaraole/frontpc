import React from 'react';
import { motion } from 'framer-motion';

const BookCarousel = ({ books }) => {
    // Nuevo tamaño de las imágenes
    const widthOfSingleImage = '150px'; // Ancho de cada imagen
    const heightOfSingleImage = 200; // Altura de cada imagen en píxeles
    const gapBetweenImages = 10;
  
    // Duplica los libros en cada grupo para asegurar la continuidad de la animación.
    const duplicatedBooks = books.map(group => [...group, ...group, ...group]);
  
    // Actualiza la altura total del contenedor en función del nuevo tamaño de las imágenes.
    const totalHeight = (duplicatedBooks[0].length * (heightOfSingleImage + gapBetweenImages)) - gapBetweenImages;
  
    // Variante para la animación.
    const bookVariants = index => ({
    animate: {
      y: index === 1 ? [-totalHeight / 2, 0] : [0, -totalHeight], // Ajusta el inicio para el grupo del medio para mostrar más libros
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60, // Duración de 1 minuto para el ciclo completo de animación
          ease: "linear"
        }
      }
    }
  });

  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      overflow: 'hidden', 
      height: '500px', // Altura visible del contenedor
    }}>
      {duplicatedBooks.map((group, index) => (
        <motion.div
          key={index}
          style={{
            marginRight: '30px',
            position: 'relative',
            display: 'flex', 
            flexDirection: 'column',
            height: `${totalHeight}px`, // Altura total para la animación
          }}
          variants={bookVariants(index)}
          animate="animate"
        >
            {group.map((cover, bookIndex) => (
            <img
              key={bookIndex}
              src={cover}
              alt={`Cover ${bookIndex + 1}`}
              style={{
                width: widthOfSingleImage, // Aplica el ancho aquí
                height: heightOfSingleImage, // Aplica la altura aquí
                marginBottom: `${gapBetweenImages}px`
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default BookCarousel;
