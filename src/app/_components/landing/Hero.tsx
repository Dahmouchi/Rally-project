/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Globe, Medal, Users } from "lucide-react";

export function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 1.2,
      },
    },
  };

  const statsItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const numberAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Counter animation for statistics
  const Counter = ({ from = 0, to, duration = 2, className }: any) => {
    const [count, setCount] = React.useState(from);

    React.useEffect(() => {
      let startTime: number;
      let animationFrame: number;

      const updateCount = (timestamp: any) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * (to - from) + from));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);

      return () => cancelAnimationFrame(animationFrame);
    }, [from, to, duration]);

    return <span className={className}>{count}+</span>;
  };
  // Données des statistiques
  const statsData = [
    {
      icon: Medal,
      value: 33,
      suffix: "+",
      label: "éditions",
      description: "Années d'expérience",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      icon: Globe,
      value: 9,
      suffix: "+",
      label: "nationalités",
      description: "Représentées",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      value: 160,
      suffix: "+",
      label: "équipages",
      description: "Participants actifs",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
  ];

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="w-full lg:min-h-screen lg:pt-24 pt-24"
      id="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="lg:p-x p-2">
        <motion.div
          className="bg-red-800 hidden lg:flex relative w-full bg-cover bg-center rounded-2xl lg:min-h-[80vh] min-h-[45vh] py-10  items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url("/hero.png")',
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2 },
          }}
        >
          {/*<motion.div
            className="w-2/3 h-20 bg-white hidden lg:block absolute bottom-0 right-0 dark:bg-dark rounded-tl-full clip-path-custom"
            initial={{ x: "100%" }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 0.8,
                ease: "easeOut",
              },
            }}
          >
            <motion.div
              className="flex items-center justify-center w-full gap-4 h-full"
              variants={statsContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="w-1/2 h-full flex items-center justify-between mt-6">
                <motion.div
                  className="flex flex-col items-center justify-center"
                  variants={statsItemVariants}
                >
                  <motion.h1
                    className="text-text2 text-3xl font-bold"
                    variants={numberAnimation}
                  >
                    <Counter
                      from={0}
                      to={33}
                      duration={2}
                      className="text-text2 text-3xl font-bold"
                    />
                  </motion.h1>
                  <h1 className="text-md font-semibold"> éditions </h1>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center justify-center"
                  variants={statsItemVariants}
                >
                  <motion.h1
                    className="text-text2 text-3xl font-bold"
                    variants={numberAnimation}
                  >
                    <Counter
                      from={0}
                      to={9}
                      duration={2}
                      className="text-text2 text-3xl font-bold"
                    />
                  </motion.h1>
                  <h1 className="text-md font-semibold">
                    nationalités représentées
                  </h1>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center justify-center"
                  variants={statsItemVariants}
                >
                  <motion.h1
                    className="text-text2 text-3xl font-bold"
                    variants={numberAnimation}
                  >
                    <Counter
                      from={0}
                      to={160}
                      duration={2}
                      className="text-text2 text-3xl font-bold"
                    />
                  </motion.h1>
                  <h1 className="text-md font-semibold">équipages</h1>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>*/}
        </motion.div>
         <motion.div
          className="bg-red-800 lg:hidden relative w-full bg-cover bg-top rounded-2xl lg:min-h-[100vh] min-h-[45vh] py-10 flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url("/hero2.png")',
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2 },
          }}
        >
         
        </motion.div>
        <div className="w-full flex items-center justify-center py-4 lg:py-8">
          <motion.div
            className="lg:w-1/2 z-10 px-4"
            variants={containerVariants}
          >
           
            <motion.h1
              className="lg:text-lg text-sm text-slate-700 dark:text-white rounded-md p-2 mt-2 text-center"
              variants={itemVariants}
            >
              Rejoignez-nous dans cette aventure unique au cœur du désert
              marocain. Un défi sportif, humain et solidaire qui porte haut les
              valeurs d&apos;engagement et de détermination.
            </motion.h1>

            <motion.div
              className="flex gap-2 items-center justify-center mt-2"
              variants={containerVariants}
            >
              <motion.div
                className="cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#our-services");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="bg-gradient-to-r font-semibold from-text2 via-text to-text2 px-4 py-2 rounded-full text-center text-slate-100 relative overflow-hidden group">
                  <motion.span
                    className="absolute inset-0 bg-white/20 translate-y-full"
                    initial={{ translateY: "100%" }}
                    whileHover={{
                      translateY: "0%",
                      transition: { duration: 0.3 },
                    }}
                  />
                  <div className="relative z-10">EN SAVOIR PLUS</div>
                </div>
              </motion.div>

              <motion.div
                onClick={() => {
                  const section = document.querySelector("#contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border-2 cursor-pointer text-slate-700 dark:text-gray-50 dark:border-white font-semibold text-center px-6 py-2 rounded-full border-slate-700 relative overflow-hidden group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20 translate-y-full"
                  initial={{ translateY: "100%" }}
                  whileHover={{
                    translateY: "0%",
                    transition: { duration: 0.3 },
                  }}
                />
                <div className="relative z-10">Entrer en contact</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div id="about-uss"></div>

       
      </div>
    </motion.div>
  );
}
