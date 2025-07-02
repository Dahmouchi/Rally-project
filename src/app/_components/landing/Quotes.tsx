/* eslint-disable @next/next/no-img-element */
import React from "react";

const Quotes = () => {
  return (
    <div className="lg:py-8 lg:px-8 py-4 px-4" >
      <div
        className="bg-gradient-to-r relative from-main2 via-main to-main2 lg:rounded-3xl rounded-xl lg:py-8 lg:px-8 px-4 py-4 bg-cover lg:bg-center"
       
      >
        <img src="/images/Lines.png" alt="" className="w-full h-full absolute top-0 "/>
        <div className="flex lg:flex-row flex-col gap-4 items-center">
          <img
            src="/Picture3.png"
            alt=""
            className="lg:w-1/3 md:w-1/2 h-auto rounded-xl"
          />
          <div className="flex flex-col gap-4 lg:px-32 md:px-10">
            <h1 className="lg:text-5xl text-second text-4xl ">

              <span className="bg-gradient-to-r from-white to-gray-500 inline-block text-transparent bg-clip-text mr-2">Welcome to </span><span className="bg-gradient-to-r from-gray-600 via-white to-gray-700 inline-block text-transparent bg-clip-text font-bold"> Les Joueuses</span>{" "}
            </h1>
            <h1 className="text-slate-100 lg:text-xl text-md">
                Notre équipe &quot;Les Joueuses&quot; est composée de deux
                passionnées de rallye, unies par l&apos;amour de l&apos;aventure
                et l&apos;engagement social. Avec une solide expérience en
                compétition, nous relevons le défi du Rallye Aïcha des Gazelles
                2026.{" "}
              
            </h1>
           <div className="space-y-4">
                <div className="bg-light dark:bg-dark rounded-lg p-4 border-l-4 border-gray-600">
                  <p className="text-accent font-montserrat font-bold text-xl">
                    2024
                  </p>
                  <p className="font-semibold">
                    1ère place au classement général pour Mme NEJDI Narjisse au
                    Nour Rallye Raid
                  </p>
                </div>

                <div className="bg-light dark:bg-dark rounded-lg p-4 border-l-4 border-gray-600">
                  <p className="text-accent font-montserrat font-bold text-xl">
                    2025
                  </p>
                  <p className="font-semibold">
                    1ère place au classement général au M-Automotiv NourRallye
                    (Edition à 3 étapes : RoadBook, OffRoad, Dunes)
                  </p>
                </div>
              </div>
            <h1 className="text-right lg:text-2xl text-xl text-slate-50">
              - Nejdi Narjisse et Farah Hussein
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
