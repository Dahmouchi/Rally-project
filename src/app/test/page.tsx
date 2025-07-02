"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Landing = () => {
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
  const budgetItems = [
    { item: "Frais d'inscription", amount: 205260 },
    { item: "Location / préparation du véhicule", amount: 80000 },
    { item: "Équipements & sécurité", amount: 40000 },
    { item: "Communication & goodies", amount: 15000 },
    { item: "Transport & logistique", amount: 11000 },
  ];
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

  const totalBudget = budgetItems.reduce(
    (total, item) => total + item.amount,
    0
  );

  // Calculer les pourcentages pour le graphique
  const calculatePercentage = (amount: any) => {
    return ((amount / totalBudget) * 100).toFixed(1);
  };
  return (
    <div className="">
      <section
        className="relative h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26, 58, 84, 0.7), rgba(26, 58, 84, 0.7)), url('/placeholder-desert-rally.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-dunes-pattern bg-repeat-x bg-bottom opacity-20"></div>
        <div className="container-custom relative z-10 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-white mb-4">
              <span className="text-primary block md:inline">LES JOUEUSES</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-montserrat font-semibold text-primary mb-6">
              RALLYE AÏCHA DES GAZELLES 2026
            </h2>
            <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0">
              Rejoignez-nous dans cette aventure unique au cœur du désert
              marocain. Un défi sportif, humain et solidaire qui porte haut les
              valeurs d&apos;engagement et de détermination.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a href="#formules" className="btn-primary">
                DEVENIR SPONSOR
              </a>
              <a
                href="#pourquoi"
                className="btn-outline text-white border-white hover:bg-white hover:text-secondary"
              >
                EN SAVOIR PLUS
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a
            href="#equipe"
            className="animate-bounce bg-primary rounded-full p-2 w-10 h-10 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>
      <section id="equipe" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">L&apos;ÉQUIPE</h2>
            <p className="section-subtitle">Rencontrez Les Joueuses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary">
                  <img
                    src="/placeholder-team-member1.jpg"
                    alt="Membre de l'équipe Les Joueuses"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary">
                  <img
                    src="/placeholder-team-member2.jpg"
                    alt="Membre de l'équipe Les Joueuses"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-secondary font-montserrat font-semibold">
                  Un binôme passionné et déterminé
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-dark">
                Notre équipe &quot;Les Joueuses&quot; est composée de deux
                passionnées de rallye, unies par l&apos;amour de l&apos;aventure
                et l&apos;engagement social. Avec une solide expérience en
                compétition, nous relevons le défi du Rallye Aïcha des Gazelles
                2026.
              </p>

              <div className="space-y-4">
                <div className="bg-light p-4 border-l-4 border-primary">
                  <p className="text-accent font-montserrat font-bold text-xl">
                    2024
                  </p>
                  <p className="font-semibold">
                    1ère place au classement général pour Mme NEJDI Narjisse au
                    Nour Rallye Raid
                  </p>
                </div>

                <div className="bg-light p-4 border-l-4 border-primary">
                  <p className="text-accent font-montserrat font-bold text-xl">
                    2025
                  </p>
                  <p className="font-semibold">
                    1ère place au classement général au M-Automotiv NourRallye
                    (Edition à 3 étapes : RoadBook, OffRoad, Dunes)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="engagement"
        className="section-padding bg-light relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-dunes-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-title">AU-DELÀ DE LA COURSE</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Au-delà de la course, &quot;Les Joueuses&quot; s&apos;engagent à
              mobiliser leur entourage, leur ville et leur pays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagements.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-montserrat font-bold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="text-dark">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <blockquote className="text-2xl font-montserrat italic text-secondary max-w-3xl mx-auto">
              &quot;Notre aventure est collective. Elle est faite pour inspirer,
              rassembler, soigner et redonner.&quot;
            </blockquote>
          </div>
        </div>
      </section>
      <section id="pourquoi" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">POURQUOI NOUS SPONSORISER ?</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Soutenez une équipe engagée et bénéficiez d&apos;une visibilité
              exceptionnelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-montserrat font-bold text-secondary mb-3">
                  {item.title}
                </h3>
                <p className="text-dark">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-montserrat font-semibold text-secondary">
              Associez votre image à la nôtre dans une aventure humaine à fort
              impact.
            </p>
            <div className="mt-8">
              <a href="#formules" className="btn-primary">
                DÉCOUVRIR NOS FORMULES
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-padding relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26, 58, 84, 0.85), rgba(26, 58, 84, 0.85)), url('/placeholder-desert-rally2.jpg')",
        }}
      >
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-extrabold mb-4 text-white">
              MAIS ENCORE...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="bg-secondary bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-primary border-opacity-30 hover:border-opacity-100 transition-all"
              >
                <div className="flex items-start">
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
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">NOUS PORTERONS VOS COULEURS</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Avant, pendant et après le rallye avec un habillage du véhicule
              personnalisé.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-light p-4 rounded-lg">
                <img
                  src="/placeholder-vehicle.jpg"
                  alt="Véhicule du rallye avec zones de sponsoring"
                  className="w-full h-auto rounded"
                />

                {/* Zones de sponsoring surlignées */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-primary rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-primary rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-primary rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-montserrat font-bold text-secondary">
                Maximisez votre visibilité
              </h3>

              <p className="text-lg">
                Nous valoriserons nos partenaires sur différents supports pour
                une visibilité optimale tout au long de l&apos;aventure.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-accent mr-3 mt-1">
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
                  <span className="text-dark">
                    Notre véhicule et nos tenues
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-accent mr-3 mt-1">
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
                  <span className="text-dark">
                    Nos réseaux sociaux et contenus vidéo
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-accent mr-3 mt-1">
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
                  <span className="text-dark">
                    Les médias et événements liés au rallye
                  </span>
                </li>
              </ul>

              <p className="text-secondary italic">
                Nous définirons avec vous en fonction de votre formule de
                sponsoring les emplacements qui vous seront dédiés.
              </p>

              <div className="pt-4">
                <a href="#formules" className="btn-primary">
                  VOIR LES FORMULES
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="budget" className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">BUDGET PRÉVISIONNEL</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Un investissement stratégique pour une aventure exceptionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-secondary text-white">
                      <th className="py-3 px-4 text-left">Poste de dépense</th>
                      <th className="py-3 px-4 text-right">Montant (DH)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {budgetItems.map((item, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-light"}
                      >
                        <td className="py-3 px-4 border-b border-gray-200">
                          {item.item}
                        </td>
                        <td className="py-3 px-4 text-right border-b border-gray-200 font-semibold">
                          {item.amount.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-primary">
                      <td className="py-3 px-4 font-montserrat font-bold text-secondary">
                        Total
                      </td>
                      <td className="py-3 px-4 text-right font-montserrat font-bold text-secondary">
                        {totalBudget.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-montserrat font-bold text-secondary mb-6">
                Répartition du budget
              </h3>

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
                      <div className="flex justify-between text-sm">
                        <span>{item.item}</span>
                        <span className="font-semibold">{percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full ${
                            colors[index % colors.length]
                          }`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-accent shadow-sm">
                <p className="text-dark">
                  <span className="font-semibold">Note:</span> Ce budget
                  prévisionnel est une estimation et peut être sujet à des
                  ajustements en fonction des conditions réelles et des
                  partenariats établis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="formules" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">FORMULES DE PARTENARIAT</h2>
            <p className="text-lg max-w-3xl mx-auto">
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
                    : "border-gray-200 bg-white shadow-md"
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
                        partnership.featured ? "text-white" : "text-secondary"
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
                        <li key={featureIndex} className="flex items-start">
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
                              partnership.featured ? "text-white" : "text-dark"
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
                          : "bg-secondary text-white hover:bg-opacity-90"
                      }`}
                    >
                      Nous contacter
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-dark mb-6">
              Vous souhaitez discuter d&apos;une formule personnalisée ?
              N&apos;hésitez pas à nous contacter.
            </p>
            <a href="#contact" className="btn-primary">
              CONTACTEZ-NOUS
            </a>
          </div>
        </div>
      </section>
      <section id="contact" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-extrabold mb-4 text-white">
              CONTACTEZ LE BINÔME
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Vous souhaitez nous soutenir ou obtenir plus d&apos;informations ?
              N&apos;hésitez pas à nous contacter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
              <h3 className="text-xl font-montserrat font-bold text-secondary mb-6">
                Envoyez-nous un message
              </h3>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-accent text-white font-montserrat font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300"
                  >
                    ENVOYER
                  </button>
                </div>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-montserrat font-bold text-white mb-6">
                  Informations de contact
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <a
                        href="mailto:happy.trip.voyage@gmail.com"
                        className="text-white/80 hover:text-primary"
                      >
                        happy.trip.voyage@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        Téléphone / WhatsApp
                      </p>
                      <a
                        href="tel:0628324880"
                        className="text-white/80 hover:text-primary"
                      >
                        0628324880
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-montserrat font-bold text-white mb-6">
                  Informations bancaires
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-white font-semibold">Banque</p>
                    <p className="text-white/80">Attijariwafa Bank</p>
                  </div>

                  <div>
                    <p className="text-white font-semibold">RIB</p>
                    <div className="flex items-center">
                      <p className="text-white/80 font-mono bg-white/5 py-1 px-2 rounded">
                        007 810 0004494000304008 16
                      </p>
                      <button
                        className="ml-2 text-primary hover:text-white transition-colors"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            "007 810 0004494000304008 16"
                          );
                          alert("RIB copié !");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                          <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-montserrat font-bold text-white mb-6">
                  Suivez-nous
                </h3>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-primary rounded-full p-3 text-white hover:bg-opacity-80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-primary rounded-full p-3 text-white hover:bg-opacity-80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-primary rounded-full p-3 text-white hover:bg-opacity-80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo et description */}
            <div className="space-y-4">
              <div className="text-2xl font-montserrat font-black">
                <span className="text-primary">Les</span> Joueuses
              </div>
              <p className="text-gray-300">
                Rallye Aïcha des Gazelles 2026 - Une aventure sportive, humaine
                et solidaire au cœur du désert marocain.
              </p>
            </div>

            {/* Liens rapides */}
            <div className="space-y-4">
              <h3 className="text-lg font-montserrat font-bold">
                Liens rapides
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#equipe"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    L&apos;Équipe
                  </a>
                </li>
                <li>
                  <a
                    href="#engagement"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Notre engagement
                  </a>
                </li>
                <li>
                  <a
                    href="#pourquoi"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Pourquoi nous sponsoriser
                  </a>
                </li>
                <li>
                  <a
                    href="#formules"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Formules de partenariat
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-montserrat font-bold">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="text-primary mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:happy.trip.voyage@gmail.com"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    happy.trip.voyage@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <div className="text-primary mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a
                    href="tel:0628324880"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    0628324880
                  </a>
                </li>
              </ul>

              <div className="pt-4">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Les Joueuses. Tous droits
              réservés.
            </p>

            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-primary text-sm transition-colors"
              >
                Mentions légales
              </a>
              <span className="mx-2 text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-400 hover:text-primary text-sm transition-colors"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>

        {/* Bouton retour en haut */}
        <div className="fixed bottom-8 right-8">
          <a
            href="#"
            className="bg-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
