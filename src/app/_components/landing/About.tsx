"use client"
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      },
    },
  };
  
  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: { 
        duration: 0.8, 
        delay: 0.4,
        ease: "easeOut" 
      },
    },
  };
  
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      },
    },
  };
  
  const numberVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1
      },
    },
  };
  
  const backgroundImageVariants = {
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

  const advantages = [
    {
      number: "01",
      title: "L'ORIGINALITÉ DU SPONSORING D'UN CHALLENGE FÉMININ",
      description:
        "Communiquez sur l'engagement de votre entreprise à promouvoir le sport féminin ainsi qu'à l'association du RAG cœur des gazelles tournée vers la protection des femmes. Notre équipage est engagée envers les enfants nomades pour leur scolarité et aboutissement de leurs cursus universitaires et les inclusions et indépendances financières.",
    },
    {
      number: "02",
      title: "LA COUVERTURE MÉDIA DE NOTRE ÉQUIPAGE",
      description:
        "Bénéficiez d'une visibilité sur les supports médias : Réseaux sociaux, site internet, newsletters, visuel sur nos véhicules, articles dans journaux locaux, et plus encore.",
    },
    {
      number: "03",
      title: "UN AVANTAGE FISCAL",
      description:
        "Les sommes versées par les entreprises sont considérées comme des dépenses destinées à promouvoir l'image de leur entreprise et sont des charges déductibles de leur revenu imposable.",
    },
    {
      number: "04",
      title:
        "L'ASSOCIATION DE L'IMAGE DU SPONSOR À UN CONCEPT VALORISANT ET DYNAMIQUE",
      description:
        "Le Rallye Aïcha des Gazelles est reconnu mondialement pour son concept unique de navigation à l'ancienne, seul rallye automobile certifié ISO 14001.",
    },
  ];

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div className="lg:py-8 lg:px-8 py-4 px-4" id="about-us" ref={sectionRef}>
      <motion.div 
        className="bg-gradient-to-r relative from-main2 via-main to-main2 lg:rounded-3xl rounded-xl text-white lg:py-16 lg:px-16 px-4 py-4 bg-cover lg:bg-center"
        initial="hidden"
        animate={mainControls}
        variants={containerVariants}
      >
        <motion.img
          src="/images/Lines.png"
          alt=""
          className="w-full h-full absolute top-0"
          variants={backgroundImageVariants}
        />
        <div>
          <motion.div 
            className="flex gap-2 items-center"
            variants={headerVariants}
          >
            <motion.div 
              className="w-3 h-3 rounded-full bg-second"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 10
              }}
            ></motion.div>
            <h1 className="text-lg"> MAIS ENCORE...</h1>
          </motion.div>

          <motion.div 
            className="w-full h-[2px] bg-white lg:my-4 my-2"
            variants={lineVariants}
          ></motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={gridVariants}
        >
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              className="bg-secondary bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-primary border-opacity-30 hover:border-opacity-100 transition-all"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                backgroundColor: "rgba(30, 41, 59, 0.6)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start lg:flex-row flex-col gap-2">
                <motion.div 
                  className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0"
                  variants={numberVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <span className="text-white font-montserrat font-bold">
                    {item.number}
                  </span>
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-lg font-montserrat font-bold text-white mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.3 + (index * 0.1)
                    }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-white text-opacity-90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + (index * 0.1)
                    }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
