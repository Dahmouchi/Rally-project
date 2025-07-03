/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Quotes = () => {
  // Refs for scroll animations
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const mainControls = useAnimation();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };
  
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      },
    },
  };
  
  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      },
    },
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
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
        delay: 0.2,
        ease: "easeOut" 
      },
    },
  };
  
  const achievementVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      },
    },
  };
  
  const signatureVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.6,
        ease: "easeOut" 
      },
    },
  };
  
  const backgroundLinesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
      transition: { 
        duration: 1.2,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
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
    <div className="lg:py-8 lg:px-8 py-4 px-4" ref={containerRef}>
      <motion.div
        className="bg-gradient-to-r relative from-main2 via-main to-main2 lg:rounded-3xl rounded-xl lg:py-8 lg:px-8 px-4 py-4 bg-cover lg:bg-center"
        initial="hidden"
        animate={mainControls}
        variants={containerVariants}
      >
        <motion.img 
          src="/images/Lines.png" 
          alt="" 
          className="w-full h-full absolute top-0"
          variants={backgroundLinesVariants}
        />
        
        <div className="flex lg:flex-row flex-col gap-4 items-center">
          <motion.img
            src="/Picture3.png"
            alt=""
            className="lg:w-1/3 md:w-1/2 h-auto rounded-xl"
            variants={imageVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          />
          
          <motion.div 
            className="flex flex-col gap-4 lg:px-32 md:px-10"
            variants={contentVariants}
          >
            <motion.h1 
              className="lg:text-5xl text-second text-4xl"
              variants={titleVariants}
            >
              <motion.span 
                className="bg-gradient-to-r from-[#7B4019] to-[#FFEEA9] inline-block text-transparent bg-clip-text mr-2"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                Welcome to 
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-[#7B4019] to-[#FFEEA9] via-[#7B4019] inline-block text-transparent bg-clip-text font-bold"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              >
                Les Joueuses
              </motion.span>
            </motion.h1>
            
            <motion.h1 
              className="text-slate-100 lg:text-xl text-md"
              variants={textVariants}
            >
              Notre équipe &quot;Les Joueuses&quot; est composée de deux
              passionnées de rallye, unies par l&apos;amour de l&apos;aventure
              et l&apos;engagement social. Avec une solide expérience en
              compétition, nous relevons le défi du Rallye Aïcha des Gazelles
              2026.
            </motion.h1>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              <motion.div 
                className="bg-light dark:bg-dark rounded-lg flex items-center gap-3 p-4 border-l-4 border-gray-600"
                variants={achievementVariants}
                whileHover={{ 
                  x: 5, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderLeftWidth: "6px",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.img 
                  src="/medaille-Photoroom.png" 
                  className="w-8 h-auto" 
                  alt=""
                  whileHover={{ 
                    rotate: [0, 10, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                />
                <div>
                  <p className="text-accent font-montserrat font-bold text-xl">
                    2024
                  </p>
                  <p className="font-semibold">
                    1ère place au classement général pour Mme NEJDI Narjisse au
                    Nour Rallye Raid
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-light dark:bg-dark rounded-lg p-4 flex items-center gap-3 border-l-4 border-gray-600"
                variants={achievementVariants}
                whileHover={{ 
                  x: 5, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderLeftWidth: "6px",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.img 
                  src="/medaille-Photoroom.png" 
                  className="w-8 h-auto" 
                  alt=""
                  whileHover={{ 
                    rotate: [0, 10, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                />
                <div>
                  <p className="text-accent font-montserrat font-bold text-xl">
                    2025
                  </p>
                  <p className="font-semibold">
                    1ère place au classement général au M-Automotiv NourRallye
                    (Edition à 3 étapes : RoadBook, OffRoad, Dunes)
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-right lg:text-2xl text-xl text-slate-50"
              variants={signatureVariants}
            >
              - Nejdi Narjisse et Farah Hussein
            </motion.h1>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Quotes;
