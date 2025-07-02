"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
const faqs = [
  {
    question: "Qui sont Les Joueuses ?",
    answer:
      "Les Joueuses est un équipage féminin composé de Nejdi Narjisse, experte en conformité et audit, et Farah Mahmoud Hussein, médecin gynécologue-obstétricienne. Elles participent ensemble au Rallye Aïcha des Gazelles 2026 pour porter un message de détermination, solidarité et dépassement de soi.",
  },
  {
    question: "Qu'est-ce que le Rallye Aïcha des Gazelles ?",
    answer:
      "Le Rallye Aïcha des Gazelles est un rallye 100% féminin créé en 1990. Il se déroule dans le désert marocain sans GPS, uniquement avec carte et boussole. Cet événement a une forte portée médiatique et un engagement environnemental certifié ISO 14001.",
  },
  {
    question: "Quelle est la cause soutenue par Les Joueuses ?",
    answer:
      "Les Joueuses participent pour soutenir les enfants nomades du désert marocain. Leur objectif est de mettre en lumière leurs défis quotidiens et d'améliorer leurs conditions de vie grâce à des actions concrètes et solidaires.",
  },
  {
    question: "Pourquoi sponsoriser Les Joueuses ?",
    answer:
      "Sponsoriser Les Joueuses, c’est associer votre marque à une aventure unique, engagée et humaine. Vous bénéficiez d’une visibilité forte à l’international, d’un projet à impact social et environnemental, et vous soutenez la promotion du sport féminin.",
  },
  {
    question: "Quels sont les avantages pour les sponsors ?",
    answer:
      "Les sponsors profitent d’une visibilité sur le véhicule, les tenues officielles, les réseaux sociaux, et les événements liés au rallye. De plus, les dépenses de sponsoring sont déductibles fiscalement. Plusieurs formules sont proposées pour s’adapter à chaque partenaire.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:p-24 p-4" id="FAQ">
      <div>
        <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-second"></div>
            <h1 className="text-lg">FAQ</h1>
        </div>
        
        <div className="w-full h-[2px] bg-second lg:my-4 my-2"></div>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-2 py-8">
        <div className="flex flex-col justify-between ">
          <h1 className="lg:text-5xl text-2xl bg-gradient-to-r from-main3 to-gray-500 inline-block text-transparent bg-clip-text lg:w-2/3">
            Réponses aux questions fréquemment posées.
          </h1>
          <div
           onClick={() => {
            const section = document.querySelector("#contact");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }} className="bg-gradient-to-r text-center cursor-pointer from-text2 text-white via-text to-text2 hidden lg:block text-xl my-8 lg:w-2/6 font-semibold  px-8 py-2 rounded-full ">
            <div>Entrer en contact</div>
          </div>
        </div>
        <div className="space-y-4 mt-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                className="w-full flex justify-between items-center text-left  text-lg py-3"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              {openIndex === index && (
                <p className="text-gray-600 dark:text-gray-300 mt-2 font-light">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <button className="bg-gradient-to-r from-text2 text-white via-text to-text2 lg:hidden text-xl my-8 lg:w-1/4 font-semibold  px-8 py-2 rounded-full ">
            <div>Entrer en contact</div>
          </button>
      </div>
    </div>
  );
};

export default Faq;
