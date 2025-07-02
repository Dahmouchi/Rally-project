/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";



const Services = () => {
const engagements = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Événements solidaires locaux",
      description:
        "Organisation d'événements pour sensibiliser et mobiliser notre communauté locale.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
      title: "Actions de sensibilisation",
      description:
        "Campagnes d'information sur les enjeux environnementaux et sociaux.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
      title: "Partage d'expérience",
      description:
        "Interventions auprès des jeunes, des écoles et des associations pour inspirer.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Soutien médical",
      description:
        "Accès aux soins médicaux de base dans les zones reculées, en partenariat avec des structures locales.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Marraines d'étudiantes",
      description:
        "Soutien à deux étudiantes du Lycée Merzouga pour l'accès aux grandes écoles et cursus universitaires.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Aventure collective",
      description:
        "Notre projet est fait pour inspirer, rassembler, soigner et redonner.",
    },
  ];
  const benefits = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
      title: "Couverture médiatique internationale",
      description:
        "TV, presse, réseaux sociaux... votre marque sera mise en avant dans un contexte positif, engagé et inspirant.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Visibilité sur nos supports",
      description:
        "Notre véhicule et nos tenues, nos réseaux sociaux et contenus vidéo, les médias et événements liés au rallye.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      ),
      title: "Impact positif",
      description:
        "Associez votre image à la nôtre dans une aventure humaine à fort impact social et environnemental.",
    },
  ];
  return (
    <div id="our-services" className="">
      <section
        id="engagement"
        className="section-padding bg-light dark:bg-gray-700 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-dunes-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="lg:text-7xl text-3xl">AU-DELÀ DE LA COURSE</h2>
            <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-500 dark:text-gray-50">
              Au-delà de la course, &quot;Les Joueuses&quot; s&apos;engagent à
              mobiliser leur entourage, leur ville et leur pays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:py-8 lg:px-8 py-4 px-4">
            {engagements.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-montserrat font-bold text-secondary dark:text-gray-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-dark dark:text-slate-50">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <blockquote className="text-2xl font-montserrat italic text-secondary dark:text-slate-50 max-w-3xl mx-auto">
              &quot;Notre aventure est collective. Elle est faite pour inspirer,
              rassembler, soigner et redonner.&quot;
            </blockquote>
          </div>
        </div>
      </section>
      <section id="pourquoi" className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="text-center my-12">
            <h1 className="lg:text-7xl text-3xl">POURQUOI NOUS SPONSORISER ?</h1>
            <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-500 dark:text-white">
              Soutenez une équipe engagée et bénéficiez d&apos;une visibilité
              exceptionnelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:py-8 lg:px-8 py-4 px-4">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="text-center shadow-lg p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 hover:border-primary transition-colors"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-montserrat font-bold text-secondary dark:text-slate-50 mb-3">
                  {item.title}
                </h3>
                <p className="text-dark dark:text-gray-50">{item.description}</p>
              </div>
            ))}
          </div>

         
        </div>
      </section>
    </div>
  );
};

export default Services;
