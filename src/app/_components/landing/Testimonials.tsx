"use client";
import React from "react";


const Testimonials = () => {
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

  return (
    <section id="formules" className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
           <h1 className="lg:text-7xl text-3xl">FORMULES DE PARTENARIAT</h1>
            <p className="text-lg max-w-3xl mx-auto dark:text-gray-50 text-gray-500 mt-3">
              Choisissez la formule qui correspond le mieux à vos objectifs et à
              votre budget
            </p>
          </div>

          <div className="space-y-6">
            {partnerships.map((partnership, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden border ${
                  partnership.featured
                    ? "border-primary bg-secondary shadow-xl"
                    : "border-gray-200 bg-white dark:bg-dark shadow-md"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 items-center">
                  <div
                    className={`p-6 md:border-r ${
                      partnership.featured
                        ? "border-primary/30"
                        : "border-gray-200"
                    }`}
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
                  </div>

                  <div className="p-6 md:col-span-2">
                    <ul className="space-y-2">
                      {partnership.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start ">
                          <div
                            className={`mr-2 mt-1 ${
                              partnership.featured
                                ? "text-primary"
                                : "text-accent"
                            }`}
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
                          </div>
                          <span
                            className={
                              partnership.featured ? "text-white" : "text-dark dark:text-white"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 text-center">
                    <a
                      href="#contact"
                      className={`inline-block px-6 py-3 rounded-md font-montserrat font-bold transition-colors ${
                        partnership.featured
                          ? "bg-primary text-secondary hover:bg-opacity-90"
                          : "bg-secondary dark:bg-gray-300 dark:text-slate-600 text-white hover:bg-opacity-90"
                      }`}
                    >
                      Nous contacter
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>
  );
};

export default Testimonials;
