/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Award, 
  Palette, 
  Stethoscope, 
  Trophy, 
  Baby, 
  Shield, 
  Target,
  Star,
  MapPin,
  Calendar,
  Briefcase,
  Activity
} from 'lucide-react';

// Données des profils
const teamMembers = [
     {
    id: 2,
    name: "Farah Mahmoud Hussein",
    title: "Gynécologue Obstétricienne",
    subtitle: "Joueuse de Padel Compétition",
    image: "/Picture4.jpg",
    description: "Maman de 3 enfants, Dr. Farah combine son expertise médicale en gynécologie-obstétrique avec sa passion pour le sport. Joueuse de padel au niveau compétition, elle incarne l'équilibre entre excellence professionnelle et épanouissement personnel.",
    highlights: [
         {
        icon: Baby,
        title: "Maman de 3 enfants",
        description: "Expérience personnelle de la maternité"
      },
      {
        icon: Stethoscope,
        title: "Gynécologue Obstétricienne",
        description: "Expertise médicale spécialisée"
      },
      {
        icon: Activity,
        title: "Padel Compétition",
        description: "Joueuse niveau compétition"
      },
     
      {
        icon: Award,
        title: "Excellence Médicale",
        description: "Soins de qualité et bienveillance"
      }
    ],
    stats: [
      { label: "Années de pratique", value: "12+" },
      { label: "Patientes suivies", value: "2000+" },
      { label: "Tournois de padel", value: "25+" }
    ],
    color: "from-main to-main2"
  },
  {
    id: 1,
    name: "Narjisse Nejdi",
    title: "Experte Conformité & Audit",
    subtitle: "Artiste & Ancienne Joueuse de Tennis",
    image: "/Picture22.jpg",
    description: "Maman de 2 enfants, Narjisse apporte son expertise pointue dans les domaines de la conformité, audit et management des risques. Passionnée d'art, elle exprime sa créativité à travers la peinture et a évolué au niveau compétition en tennis.",
    highlights: [
        {
        icon: Heart,
        title: "Maman de 2 enfants",
        description: "Équilibre vie professionnelle et familiale"
      },
      {
        icon: Shield,
        title: "Conformité & Audit",
        description: "Expertise en management des risques"
      },
      {
        icon: Palette,
        title: "Artiste Peintre",
        description: "Expression créative et artistique"
      },
      {
        icon: Trophy,
        title: "Tennis Compétition",
        description: "Ancienne joueuse niveau compétition"
      },
      
    ],
    stats: [
      { label: "Années d'expérience", value: "15+" },
      { label: "Projets d'audit", value: "200+" },
      { label: "Œuvres artistiques", value: "50+" }
    ],
    color: "from-main2 to-main"
  },
 
];

const AboutUsSection = ({ team = teamMembers }) => {
  // Animations variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const highlightVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      className=" bg-slate-50 dark:bg-dark"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="lg:max-w-7xl mx-auto lg:px-6">
        
        {/* Header de la section */}
        <motion.div 
          className="text-center mb-8"
          variants={itemVariants}
        >

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Qui sommes-nous ?
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Découvrez les femmes exceptionnelles qui portent ce projet avec passion, 
            alliant expertise professionnelle et épanouissement personnel dans un équilibre inspirant.
          </p>
        </motion.div>

        {/* Grille des profils */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              className="group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl h-full overflow-hidden hover:shadow-2xl transition-all duration-500">
                
                {/* Header avec image et gradient */}
                <div className={`relative h-54 bg-gradient-to-br ${member.color} lg:p-8 p-4 flex items-end `}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Image de profil */}
                  <div className="relative z-10 flex lg:items-center flex-col lg:flex-row lg:space-x-6 gap-3 ">
                    <motion.div
                      className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                       
                      />
                    </motion.div>
                    
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-white/90 text-lg font-medium">{member.title}</p>
                      <p className="text-white/80 text-sm">{member.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Contenu de la carte */}
                <div className="p-8">
                  
                 

                  {/* Points forts */}
                  <motion.div 
                    className="space-y-4 mb-8"
                    variants={containerVariants}
                  >
                    
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {member.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                          variants={highlightVariants}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${member.color}`}>
                            <highlight.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 text-sm mb-1">
                              {highlight.title}
                            </h5>
                            <p className="text-gray-600 text-xs leading-relaxed">
                              {highlight.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Statistiques */}
                  <motion.div 
                    className="border-t pt-6"
                    variants={itemVariants}
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {member.stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          className="text-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className={`text-2xl font-bold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-1`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600 leading-tight">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </motion.section>
  );
};

export default AboutUsSection;