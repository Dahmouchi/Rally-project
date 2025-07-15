"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Join = () => {
  // Refs for scroll animations
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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
        ease: "easeOut",
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
        ease: "easeOut",
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
        ease: "easeOut",
      },
    },
  };
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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
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
          <motion.h1 className="lg:text-7xl text-3xl" variants={titleVariants}>
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

      <div className="w-full flex items-center lg:justify-start justify-center lg:p-0 ">
        <motion.div
          className="bg-gradient-to-r relative from-main2 via-main to-main2 w-full lg:w-5/6 lg:h-[500px] lg:rounded-r-full rounded-br-full rounded-bl-full lg:rounded-bl-none lg:rounded-tr-full flex lg:flex-row flex-col"
          initial="hidden"
          animate={mainControls}
          variants={cardVariants}
        >
          <div className="w-full flex flex-col lg:items-center items-center justify-center gap-8 lg:px-8 px-3 py-4">
            <div className="w-full text-white font-semibold text-3xl"><h1>Se lancer dans le Rallye Aicha des Gazelles du Maroc est un challenge mais aussi un engagement. </h1></div>
            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.div
                className="bg-light dark:bg-dark rounded-lg flex items-center gap-3 p-4 border-l-4 border-gray-600"
                variants={achievementVariants}
                whileHover={{
                  x: 5,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderLeftWidth: "6px",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.img
                  src="/icons/rally.png"
                  className="w-8 h-auto"
                  alt=""
                  whileHover={{
                    rotate: [0, 10, -10, 10, 0],
                    transition: { duration: 0.5 },
                  }}
                />
                <div>
                  <p className="font-semibold">
                    Navigation dans le désert marocain sans GPS, uniquement
                    carte et boussole.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-light dark:bg-dark rounded-lg flex items-center gap-3 p-4 border-l-4 border-gray-600"
                variants={achievementVariants}
                whileHover={{
                  x: 5,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderLeftWidth: "6px",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.img
                  src="/icons/competition.png"
                  className="w-8 h-auto"
                  alt=""
                  whileHover={{
                    rotate: [0, 10, -10, 10, 0],
                    transition: { duration: 0.5 },
                  }}
                />
                <div>
                  <p className="font-semibold">
                    33 éditions, 160 équipages, 9 nationalités, couverture
                    médiatique internationale.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="bg-light dark:bg-dark rounded-lg flex items-center gap-3 p-4 border-l-4 border-gray-600"
                variants={achievementVariants}
                whileHover={{
                  x: 5,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderLeftWidth: "6px",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.img
                  src="/icons/certification.png"
                  className="w-8 h-auto"
                  alt=""
                  whileHover={{
                    rotate: [0, 10, -10, 10, 0],
                    transition: { duration: 0.5 },
                  }}
                />
                <div>
                  <p className="font-semibold">
                    Événement certifié ISO 14001 pour son engagement
                    environnemental.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="bg-light dark:bg-dark rounded-lg flex items-center gap-3 p-4 border-l-4 border-gray-600"
                variants={achievementVariants}
                whileHover={{
                  x: 5,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderLeftWidth: "6px",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.img
                  src="/icons/target.png"
                  className="w-8 h-auto"
                  alt=""
                  whileHover={{
                    rotate: [0, 10, -10, 10, 0],
                    transition: { duration: 0.5 },
                  }}
                />
                <div>
                  <p className="font-semibold">
                    Les Joueuses relèvent un défi unique et partagent une
                    aventure solidaire.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.img
            src="/circle.png"
            alt=""
            className="h-full w-auto"
            variants={imageVariants}
            whileHover={{
              rotate: 5,
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Join;
