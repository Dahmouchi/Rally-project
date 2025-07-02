/* eslint-disable @next/next/no-img-element */
"use client";
import { BadgeCheck } from "lucide-react";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Join = () => {
  // Refs for scroll animations
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const mainControls = useAnimation();
  
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      },
    },
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.3,
        ease: "easeOut" 
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.4,
        ease: "easeOut" 
      },
    },
  };
  
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.6, 
        delay: 0.6,
        ease: "easeOut" 
      },
    },
  };
  
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };
  
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      },
    },
  };
  
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1
      },
    },
  };
  
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.6,
        ease: "easeOut" 
      },
    },
  };

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div 
      className="py-8" 
      style={{ backgroundImage: 'url("/images/bg3.png")' }}
      ref={containerRef}
    >
      <motion.div 
        className="w-full text-center flex items-center justify-center"
        initial="hidden"
        animate={mainControls}
        variants={titleVariants}
      >
        <div>
          <motion.h1 
            className="lg:text-7xl text-3xl"
            variants={titleVariants}
          >
            Le projet Rallye Aïcha des Gazelles 2026
          </motion.h1>
          <div className="flex items-center justify-center">
            <motion.div
              onClick={() => {
                const section = document.querySelector("#contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r cursor-pointer from-text2 via-text to-text2 text-xl my-8 font-semibold text-white px-8 py-2 rounded-full"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Contactez-nous
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <div className="w-full flex items-center lg:justify-start justify-center lg:p-0 lg:p-2">
        <motion.div 
          className="bg-gradient-to-r relative from-main2 via-main to-main2 w-full lg:w-3/4 lg:h-[400px] lg:rounded-r-full rounded-br-full rounded-bl-full lg:rounded-bl-none lg:rounded-tr-full flex lg:flex-row flex-col"
          initial="hidden"
          animate={mainControls}
          variants={cardVariants}
        >
          <div className="w-full py-4 flex flex-col lg:items-center items-center justify-center gap-8 lg:px-8 px-3">
            <div>
              <motion.p 
                className="text-slate-200 text-lg text-center lg:text-right"
                variants={textVariants}
              >
                Le Rallye Aïcha des Gazelles est un événement 100% féminin créé
                en 1990 :
              </motion.p>
              
              <motion.ul 
                className="lg:ml-3 text-white font-semibold space-y-4 mt-4"
                variants={listContainerVariants}
              >
                <motion.li 
                  className="flex items-center gap-2 lg:flex-row flex-col justify-center text-center lg:text-start"
                  variants={listItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div variants={iconVariants}>
                    <BadgeCheck className="w-6 h-6 text-yellow-300" />
                  </motion.div>
                  Navigation dans le désert marocain sans GPS, uniquement carte
                  et boussole.
                </motion.li>
                
                <motion.li 
                  className="flex items-center gap-2 lg:flex-row flex-col justify-center text-center lg:text-start"
                  variants={listItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div variants={iconVariants}>
                    <BadgeCheck className="w-6 h-6 text-yellow-300" />
                  </motion.div>
                  33 éditions, 160 équipages, 9 nationalités, couverture
                  médiatique internationale.
                </motion.li>
                
                <motion.li 
                  className="flex items-center gap-2 lg:flex-row flex-col justify-center text-center lg:text-start"
                  variants={listItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div variants={iconVariants}>
                    <BadgeCheck className="w-6 h-6 text-yellow-300" />
                  </motion.div>
                  Événement certifié ISO 14001 pour son engagement
                  environnemental.
                </motion.li>
                
                <motion.li 
                  className="flex items-center gap-2 lg:flex-row flex-col justify-center text-center lg:text-start"
                  variants={listItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div variants={iconVariants}>
                    <BadgeCheck className="w-6 h-6 text-yellow-300" />
                  </motion.div>
                  Les Joueuses relèvent un défi unique et partagent une aventure solidaire.
                </motion.li>
              </motion.ul>
            </div>
          </div>
          
          <motion.img 
            src="/circle.png" 
            alt="" 
            className="h-full w-auto"
            variants={imageVariants}
            whileHover={{ 
              rotate: 5, 
              scale: 1.05,
              transition: { duration: 0.3 } 
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Join;
