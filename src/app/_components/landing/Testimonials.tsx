/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Testimonials = () => {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const mainControls = useAnimation();
  
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
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
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.3,
        ease: "easeOut" 
      },
    },
  };
  

  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i:any) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.1 * i,
        ease: "easeOut" 
      },
    }),
  };
  
  const titlePriceVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.2,
        ease: "easeOut" 
      },
    },
  };
  
  const featureListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  
  const featureItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.4, 
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
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.5,
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

  const partnerships = [
    {
      title: "Sponsor Exclusif",
      price: "Prise en charge de tous les frais",
      features: [
        "Habillage exclusif du véhicule dans les couleurs du Sponsor",
        "Vidéos sur les réseaux sociaux pour la promotion de la marque",
        "Choix du nom de l'équipage sur une liste de proposition",
        "Logo sur les tenues, réseaux sociaux, presse",
        "Invitation à la soirée de remise des prix à Essaouira",
      ],
      featured: true,
    },
    {
      title: "Sponsor Platine",
      price: "100 000 DH et +",
      features: [
        "Logo véhicule, tenues, réseaux sociaux, presse",
        "Présence dans nos vidéos et événements",
      ],
      featured: false,
    },
    {
      title: "Sponsor Or",
      price: "50 000 DH et +",
      features: [
        "Logo véhicule et réseaux sociaux",
        "Logo sur nos gilets",
        "Mention dans nos interviews",
      ],
      featured: false,
    },
    {
      title: "Sponsor Argent",
      price: "30 000 DH et +",
      features: ["Visibilité réseaux sociaux", "Logo sur nos gilets"],
      featured: false,
    },
    {
      title: "Partenaire Ami",
      price: "Contribution libre",
      features: ["Nom de la marque cité dans notre communication"],
      featured: false,
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
    <motion.section 
      id="formules" 
      className="section-padding bg-white dark:bg-dark"
      ref={sectionRef}
      initial="hidden"
      animate={mainControls}
      variants={sectionVariants}
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h1 
            className="lg:text-7xl text-3xl"
            variants={titleVariants}
          >
            FORMULES DE PARTENARIAT
          </motion.h1>
          <motion.p 
            className="text-lg max-w-3xl mx-auto dark:text-gray-50 text-gray-500 mt-3"
            variants={textVariants}
          >
            Choisissez la formule qui correspond le mieux à vos objectifs et à
            votre budget
          </motion.p>
        </div>

        <motion.div 
          className="space-y-6"
          
        >
          {partnerships.map((partnership, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
             
              className={`rounded-lg overflow-hidden border ${
                partnership.featured
                  ? "border-primary bg-secondary shadow-xl"
                  : "border-gray-200 bg-white dark:bg-dark shadow-md"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 items-center">
                <motion.div
                  className={`p-6 md:border-r ${
                    partnership.featured
                      ? "border-primary/30"
                      : "border-gray-200"
                  }`}
                  variants={titlePriceVariants}
                >
                  <h3
                    className={`text-xl font-montserrat font-bold mb-2 ${
                      partnership.featured ? "text-white" : "text-secondary dark:text-white"
                    }`}
                  >
                    {partnership.title}
                  </h3>
                  <div
                    className={`text-2xl font-montserrat font-black ${
                      partnership.featured ? "text-primary" : "text-accent"
                    }`}
                  >
                    {partnership.price}
                  </div>
                </motion.div>

                <motion.div 
                  className="p-6 md:col-span-2"
                  variants={featureListVariants}
                >
                  <ul className="space-y-2">
                    {partnership.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start"
                        variants={featureItemVariants}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <motion.div
                          className={`mr-2 mt-1 ${
                            partnership.featured
                              ? "text-primary"
                              : "text-accent"
                          }`}
                          variants={iconVariants}
                          whileHover={{ 
                            rotate: 360,
                            scale: 1.2,
                            transition: { duration: 0.5 }
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.div>
                        <span
                          className={
                            partnership.featured ? "text-white" : "text-dark dark:text-white"
                          }
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
                  className="p-6 text-center"
                  variants={buttonVariants}
                >
                  <motion.a
                    href="#contact"
                    className={`inline-block px-6 py-3 rounded-md font-montserrat font-bold transition-colors ${
                      partnership.featured
                        ? "bg-primary text-secondary hover:bg-opacity-90"
                        : "bg-secondary dark:bg-gray-300 dark:text-slate-600 text-white hover:bg-opacity-90"
                    }`}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Nous contacter
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
