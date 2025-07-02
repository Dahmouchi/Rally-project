/* eslint-disable @next/next/no-img-element */
"use client";
import { BadgeCheck } from "lucide-react";
import React from "react";

const Join = () => {
  return (
    <div className="py-8" style={{ backgroundImage: 'url("/images/bg3.png")' }}>
      <div className="w-full text-center flex items-center justify-center">
        <div>
          <h1 className="lg:text-7xl text-3xl">
            Le projet Rallye Aïcha des Gazelles 2026
          </h1>
          <div className="flex items-center justify-center">
            <div
              onClick={() => {
                const section = document.querySelector("#contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r cursor-pointer from-text2 via-text to-text2 text-xl my-8 font-semibold text-white  px-8 py-2 rounded-full "
            ></div>
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center lg:justify-start justify-center lg:p-0 lg:p-2">
        <div className="bg-gradient-to-r relative from-main2 via-main to-main2 w-full lg:w-3/4 lg:h-[400px] lg:rounded-r-full rounded-br-full rounded-bl-full  lg:rounded-bl-none lg:rounded-tr-full flex lg:flex-row flex-col">
          <div className="w-full py-4 flex flex-col lg:items-center items-center justify-center gap-8 lg:px-8 px-3">
            <div>
              <p className="text-slate-200 text-lg text-center lg:text-right">
                Le Rallye Aïcha des Gazelles est un événement 100% féminin créé
                en 1990 :
              </p>
              <ul className="lg:ml-3 text-white font-semibold space-y-4 mt-4">
                <li className="flex items-center gap-2 lg:flex-row flex-col justify-center text-center lg:text-start">
                  <BadgeCheck className="w-6 h-6"/>
                  {" "}
                  Navigation dans le désert marocain sans GPS, uniquement carte
                  et boussole.{" "}
                </li>
                 <li className="flex items-center gap-2 lg:flex-row flex-col justify-center text-center lg:text-start">
                  <BadgeCheck className="w-6 h-6"/>
                  33 éditions, 160 équipages, 9 nationalités, couverture
                  médiatique internationale.
                </li>
                 <li className="flex items-center gap-2 lg:flex-row flex-col justify-center text-center lg:text-start">
                  <BadgeCheck className="w-6 h-6"/>
                  Événement certifié ISO 14001 pour son engagement
                  environnemental.
                </li>
                 <li className="flex items-center gap-2 lg:flex-row flex-col justify-center text-center lg:text-start">
                  <BadgeCheck className="w-6 h-6"/>
                  Les Joueuses relèvent un défi unique et partagent une aventure solidaire.
                </li>
              </ul>
              
            </div>
          </div>
          <img src="/circle.png" alt="" className="h-full w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Join;
