/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
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
  return (
    <div className="lg:py-8 lg:px-8 py-4 px-4" id="about-us">
      <div className="bg-gradient-to-r relative from-main2 via-main to-main2 lg:rounded-3xl rounded-xl text-white lg:py-16 lg:px-16 px-4 py-4 bg-cover lg:bg-center">
        <img
          src="/images/Lines.png"
          alt=""
          className="w-full h-full absolute top-0 "
        />
        <div>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-second"></div>
            <h1 className="text-lg"> MAIS ENCORE...</h1>
          </div>

          <div className="w-full h-[2px] bg-white lg:my-4 my-2"></div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="bg-secondary bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-primary border-opacity-30 hover:border-opacity-100 transition-all"
              >
                <div className="flex items-start lg:flex-row flex-col gap-2">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-montserrat font-bold">
                      {item.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-montserrat font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white text-opacity-90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
