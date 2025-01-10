// // import React from 'react';
// // import { motion } from 'framer-motion';

// // const ScrollAnimationLeftRight = () => {
// //   const leftVariants = {
// //     hidden: { opacity: 0, x: -100 },
// //     visible: {
// //       opacity: 1,
// //       x: 0,
// //       transition: { duration: 0.8, ease: 'easeOut' },
// //     },
// //   };

// //   const rightVariants = {
// //     hidden: { opacity: 0, x: 100 },
// //     visible: {
// //       opacity: 1,
// //       x: 0,
// //       transition: { duration: 0.8, ease: 'easeOut' },
// //     },
// //   };

// //   return (
// //     <div style={styles.container}>
// //       {/* Element Coming From Left */}
// //       <motion.div
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% visible
// //         variants={leftVariants}
// //         style={styles.boxLeft}
// //       >
// //         Coming from Left
// //       </motion.div>

// //       {/* Element Coming From Right */}
// //       <motion.div
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% visible
// //         variants={rightVariants}
// //         style={styles.boxRight}
// //       >
// //         Coming from Right
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default ScrollAnimationLeftRight;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const ScrollAnimation = () => {
//   const [ref1, inView1] = useInView({ threshold: 0.5 });
//   const [ref2, inView2] = useInView({ threshold: 0.5 });

//   return (
//     <div style={styles.container}>
//       {/* Element coming from the left */}
//       <motion.div
//         ref={ref1}
//         initial={{ x: '-100vw', opacity: 0 }} // Start from the left side
//         animate={{
//           x: inView1 ? 0 : '-100vw', // Animate to original position if in view
//           opacity: inView1 ? 1 : 0,
//         }}
//         transition={{ duration: 1, ease: 'easeOut' }}
//         style={styles.box}
//       >
//         From Left
//       </motion.div>

//       {/* Element zooming in */}
//       <motion.div
//         ref={ref2}
//         initial={{ scale: 0, opacity: 0 }} // Start as smaller element
//         animate={{
//           scale: inView2 ? 1 : 0, // Zoom in when in view
//           opacity: inView2 ? 1 : 0,
//         }}
//         transition={{ duration: 1, ease: 'easeOut' }}
//         style={styles.box}
//       >
//         Zoom In
//       </motion.div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     height: '200vh', // Make the container scrollable
//     padding: '50px',
//   },
//   box: {
//     height: '100px',
//     width: '100%',
//     marginBottom: '50px',
//     backgroundColor: '#f4f4f4',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '1.5rem',
//   },
// };

// export default ScrollAnimation;

{
  /* <AnimatePresence>
            <motion.div
              key={currentSlide} 
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${slides[currentSlide]})`,
              }}
              initial={{ opacity: 0.3, x: 100 }} 
              animate={{ opacity: 0.8, x: 0 }} 
              exit={{ opacity: 0, x: -100 }} 
              transition={{
                duration: 1, 
                ease: "easeInOut", 
              }}
           
            />
          </AnimatePresence> */
}
{
  /* <AnimatePresence>
        <motion.div
          key={currentSlide} // Key to trigger animation when currentSlide changes
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
          }}
          initial={{ opacity: 0, x: '100%' }} // Start from the right
          animate={{ opacity: 1, x: 0 }} // Slide in to the center with full opacity
          exit={{ opacity: 0, x: '-100%' }} // Slide out to the left
          transition={{
            duration: 1, // Transition duration
            ease: 'easeInOut', // Easing for smooth transition
          }}
        />
      </AnimatePresence> */
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollPopup = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Use the intersection observer hook to detect when a section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Triggers only once when in view
    threshold: 0.5, // Trigger when 50% of the section is in view
  });

  // Show modal when the section is in view
  React.useEffect(() => {
    if (inView) {
      setModalVisible(true); // Show modal when in view
    }
  }, [inView]);

  const closeModal = () => setModalVisible(false);

  return (
    <div>
      {/* Trigger section for modal */}
      <div ref={ref}>Scroll to this section to trigger modal</div>

      {/* Pop-up Modal */}
      {modalVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ y: "-50vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h2>Welcome to the Modal!</h2>
            <p>This pop-up appears when you scroll to the specific section.</p>
            <button onClick={closeModal}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ScrollPopup;
