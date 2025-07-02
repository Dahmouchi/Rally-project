/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Veuccul = () => {
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
  return (
    <div>
          <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="lg:text-7xl text-3xl">NOUS PORTERONS VOS COULEURS</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-400 dark:text-gray-50 mt-4">
              Avant, pendant et après le rallye avec un habillage du véhicule
              personnalisé.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center lg:px-10">
            <div className="relative">
              <div className="bg-light p-4 rounded-lg">
                <img
                  src="/veuccul.png"
                  alt="Véhicule du rallye avec zones de sponsoring"
                  className="w-full h-auto rounded"
                />

                 </div>
            </div>

            <div className="space-y-6 lg:col-span-2
            ">
              <h3 className="text-2xl font-montserrat font-bold text-secondary dark:text-gray-50">
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
                  <span className="text-dark dark:text-gray-50">
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
                  <span className="text-dark dark:text-gray-50">
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
                  <span className="text-dark dark:text-gray-50">
                    Les médias et événements liés au rallye
                  </span>
                </li>
              </ul>

              <p className="text-secondary dark:text-gray-50 italic">
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
            <h2 className="lg:text-7xl text-3xl">BUDGET PRÉVISIONNEL</h2>
            <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-500 dark:text-gray-50">
              Un investissement stratégique pour une aventure exceptionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:py-8 lg:px-8 py-4 px-4">
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
    </div>
  )
}

export default Veuccul