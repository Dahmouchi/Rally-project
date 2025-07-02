/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

const Veuccul = () => {
  // Refs for scroll animations
  const vehicleRef = useRef(null);
  const budgetRef = useRef(null);
  const isVehicleInView = useInView(vehicleRef, { once: false, amount: 0.2 });
  const isBudgetInView = useInView(budgetRef, { once: false, amount: 0.2 });
  const vehicleControls = useAnimation();
  const budgetControls = useAnimation();
  
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
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.7, 
        delay: 0.4,
        ease: "easeOut" 
      },
    },
  };
  
  const contentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.5,
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
        delayChildren: 0.6,
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
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 1.2,
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
  
  const tableContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.4,
        ease: "easeOut" 
      },
    },
  };
  
  const tableHeaderVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.6,
        ease: "easeOut" 
      },
    },
  };
  
  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i:any) => ({
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.7 + (i * 0.1),
        ease: "easeOut" 
      },
    }),
  };
  
  const chartContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.6,
        ease: "easeOut" 
      },
    },
  };
  
  const barLabelVariants = {
    hidden: { opacity: 0 },
    visible: (i:any) => ({
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.8 + (i * 0.1),
        ease: "easeOut" 
      },
    }),
  };
  
  const barVariants = {
    hidden: { width: 0 },
    visible: (percentage:any) => ({
      width: `${percentage}%`,
      transition: { 
        duration: 0.8, 
        delay: 1.0,
        ease: "easeOut" 
      },
    }),
  };
  
  const noteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 1.5,
        ease: "easeOut" 
      },
    },
  };

  const budgetItems = [
    { item: "Frais d'inscription", amount: 205260 },
    { item: "Location / préparation du véhicule", amount: 80000 },
    { item: "Équipements & sécurité", amount: 40000 },
    { item: "Communication & goodies", amount: 15000 },
    { item: "Transport & logistique", amount: 11000 },
  ];
  
  const totalBudget = budgetItems.reduce(
    (total, item) => total + item.amount,
    0
  );
  
  const calculatePercentage = (amount: any) => {
    return ((amount / totalBudget) * 100).toFixed(1);
  };

  // Trigger animations when sections come into view
  useEffect(() => {
    if (isVehicleInView) {
      vehicleControls.start("visible");
    } else {
      vehicleControls.start("hidden");
    }
    
    if (isBudgetInView) {
      budgetControls.start("visible");
    } else {
      budgetControls.start("hidden");
    }
  }, [isVehicleInView, isBudgetInView, vehicleControls, budgetControls]);

  return (
    <div>
      <motion.section 
        className="section-padding bg-white dark:bg-dark"
        ref={vehicleRef}
        initial="hidden"
        animate={vehicleControls}
        variants={sectionVariants}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2 
              className="lg:text-7xl text-3xl"
              variants={titleVariants}
            >
              NOUS PORTERONS VOS COULEURS
            </motion.h2>
            <motion.p 
              className="text-lg max-w-3xl mx-auto text-gray-400 dark:text-gray-50 mt-4"
              variants={textVariants}
            >
              Avant, pendant et après le rallye avec un habillage du véhicule
              personnalisé.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center lg:px-10">
            <motion.div 
              className="relative"
              variants={imageVariants}
            >
              <div className="bg-light p-4 rounded-lg">
                <motion.img
                  src="/veuccul.png"
                  alt="Véhicule du rallye avec zones de sponsoring"
                  className="w-full h-auto rounded"
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="space-y-6 lg:col-span-2"
              variants={contentVariants}
            >
              <motion.h3 
                className="text-2xl font-montserrat font-bold text-secondary dark:text-gray-50"
                variants={titleVariants}
              >
                Maximisez votre visibilité
              </motion.h3>

              <motion.p 
                className="text-lg"
                variants={textVariants}
              >
                Nous valoriserons nos partenaires sur différents supports pour
                une visibilité optimale tout au long de l&apos;aventure.
              </motion.p>

              <motion.ul 
                className="space-y-4"
                variants={listContainerVariants}
              >
                <motion.li 
                  className="flex items-start"
                  variants={listItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="text-accent mr-3 mt-1"
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
                  <span className="text-dark dark:text-gray-50">
                    Notre véhicule et nos tenues
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={listItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="text-accent mr-3 mt-1"
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
                  <span className="text-dark dark:text-gray-50">
                    Nos réseaux sociaux et contenus vidéo
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={listItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="text-accent mr-3 mt-1"
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
                  <span className="text-dark dark:text-gray-50">
                    Les médias et événements liés au rallye
                  </span>
                </motion.li>
              </motion.ul>

              <motion.p 
                className="text-secondary dark:text-gray-50 italic"
                variants={textVariants}
              >
                Nous définirons avec vous en fonction de votre formule de
                sponsoring les emplacements qui vous seront dédiés.
              </motion.p>

              <motion.div 
                className="pt-4"
                variants={buttonVariants}
              >
                <motion.a 
                  href="#formules" 
                  className="btn-primary inline-block bg-gradient-to-r from-text2 via-text to-text2 px-6 py-3 rounded-full text-white font-semibold"
                  whileHover="hover"
                  whileTap="tap"
                >
                  VOIR LES FORMULES
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        id="budget" 
        className="section-padding bg-light dark:bg-dark"
        ref={budgetRef}
        initial="hidden"
        animate={budgetControls}
        variants={sectionVariants}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2 
              className="lg:text-7xl text-3xl"
              variants={titleVariants}
            >
              BUDGET PRÉVISIONNEL
            </motion.h2>
            <motion.p 
              className="text-lg max-w-3xl mx-auto mt-4 text-gray-500 dark:text-gray-50"
              variants={textVariants}
            >
              Un investissement stratégique pour une aventure exceptionnelle
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:py-8 lg:px-8 py-4 px-4">
            <motion.div 
              className="overflow-hidden"
              variants={tableContainerVariants}
            >
              <div className="bg-white dark:bg-dark rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <motion.thead variants={tableHeaderVariants}>
                    <tr className="bg-secondary text-white">
                      <th className="py-3 px-4 text-left">Poste de dépense</th>
                      <th className="py-3 px-4 text-right">Montant (DH)</th>
                    </tr>
                  </motion.thead>
                  <tbody>
                    {budgetItems.map((item, index) => (
                      <motion.tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white dark:bg-dark" : "bg-light dark:bg-slate-900"}
                        custom={index}
                        variants={tableRowVariants}
                        whileHover={{ 
                          backgroundColor: index % 2 === 0 ? "rgba(252, 186, 3, 0.05)" : "rgba(252, 186, 3, 0.1)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <td className="py-3 px-4 border-b border-gray-200">
                          {item.item}
                        </td>
                        <td className="py-3 px-4 text-right border-b border-gray-200 font-semibold">
                          {item.amount.toLocaleString()}
                        </td>
                      </motion.tr>
                    ))}
                    <motion.tr 
                      className="bg-primary"
                      variants={tableRowVariants}
                      custom={budgetItems.length}
                      whileHover={{ 
                        scale: 1.01,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <td className="py-3 px-4 font-montserrat font-bold text-secondary">
                        Total
                      </td>
                      <td className="py-3 px-4 text-right font-montserrat font-bold text-secondary">
                        {totalBudget.toLocaleString()}
                      </td>
                    </motion.tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div variants={chartContainerVariants}>
              <motion.h3 
                className="text-xl font-montserrat font-bold text-secondary mb-6"
                variants={titleVariants}
              >
                Répartition du budget
              </motion.h3>

              {/* Graphique de répartition du budget */}
              <div className="space-y-4">
                {budgetItems.map((item, index) => {
                  const percentage = calculatePercentage(item.amount);
                  const colors = [
                    "bg-primary",
                    "bg-secondary",
                    "bg-accent",
                    "bg-blue-400",
                    "bg-green-500",
                  ];

                  return (
                    <div key={index} className="space-y-1">
                      <motion.div 
                        className="flex justify-between text-sm"
                        custom={index}
                        variants={barLabelVariants}
                      >
                        <span>{item.item}</span>
                        <span className="font-semibold">{percentage}%</span>
                      </motion.div>
                      <div className="w-full bg-gray-200 dark:bg-slate-900 rounded-full h-2.5">
                        <motion.div
                          className={`h-2.5 rounded-full ${
                            colors[index % colors.length]
                          }`}
                          style={{ width: 0 }}
                          custom={percentage}
                          variants={barVariants}
                          whileHover={{ 
                            height: "12px",
                            y: "-2px",
                            transition: { duration: 0.2 }
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <motion.div 
                className="mt-8 p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-accent shadow-sm"
                variants={noteVariants}
                whileHover={{ 
                  x: 5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  borderLeftWidth: "6px",
                  transition: { duration: 0.2 }
                }}
              >
                <p className="text-dark dark:text-gray-50">
                  <span className="font-semibold">Note:</span> Ce budget
                  prévisionnel est une estimation et peut être sujet à des
                  ajustements en fonction des conditions réelles et des
                  partenariats établis.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Veuccul;
