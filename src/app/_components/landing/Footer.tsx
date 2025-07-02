/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const Footer = () => {
  return (
    <div className=" ">
      <div className="bg-gradient-to-b  from-main2 to-main w-full lg:w-3/4 lg:h-[400px] lg:rounded-r-full rounded-t-full lg:rounded-tl-none  flex lg:flex-row flex-col-reverse">
        <div className="w-full py-4 flex flex-col lg:items-start items-center gap-4 px-8 text-center justify-center">
          <div>
            <h1 className="lg:text-left text-center text-3xl lg:text-6xl text-white">
              Rejoignez l&apos;Aventure
            </h1>
            <h1 className="lg:text-left text-center text-3xl lg:text-6xl text-white">
              avec Les Joueuses
            </h1>
          </div>

          <h1 className="text-slate-200 text-md font-light">
            Soutenez une aventure 100% féminine, solidaire et engagée.
          </h1>
          <h1 className="text-slate-200 text-md font-light ">
            Entrez en contact et devenez partenaire de notre défi dans le désert marocain.
          </h1>
          <div className=" grid lg:grid-cols-2 grid-cols-1  w-full place-items-center gap-4">
            <input
              type="text"
              placeholder="Votre e-mail..."
              className=" bg-white rounded-full px-8 py-2 w-full"
            />
            <button className="bg-gradient-to-r from-text2 via-text to-text2 text-white w-2/3 text-xl font-semibold  px-8 py-2 rounded-full  ">
              <div>Nous Contacter</div>
            </button>
          </div>
        </div>
        <img src="/circle.png" alt="" className="h-full w-auto" />
      </div>
      <div className="bg-gradient-to-t relative from-main2 to-main text-white lg:pt-16 lg:px-16 px-4 py-4 bg-cover lg:bg-end">
        <img
          src="/images/Lines.png"
          alt=""
          className="w-full h-full absolute top-0 "
        />

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          <div className="flex flex-col justify-center lg:items-start items-center ">
            <div className="bg-white p-3 rounded-lg w-1/2"><img src="/Picture1.jpg" alt="Les Joueuses Logo" className="w-full h-auto" /></div>
          </div>
          <div className="flex flex-col gap-8 justify-center lg:items-start items-center">
            <div className="flex flex-row gap-8">
              <h1
                className="text-white text-lg font-light cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#equipage");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                L&apos;Équipage
              </h1>
              <h1
                className="text-white text-lg font-light cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#rallye");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Le Rallye
              </h1>
              <h1
                className="text-white text-lg font-light cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact
              </h1>
            </div>
            <div className="flex flex-row gap-8">
              <h1
                className="text-white text-lg font-light cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#cause");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Notre Cause
              </h1>
              <h1
                className="text-white text-lg font-light cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#sponsoring");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Sponsoring
              </h1>
              <h1
                className="text-white text-lg font-light cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#faq");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                FAQ
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center lg:px-16 px-4">
            <div className="flex flex-row p-1 bg-white/15 gap-4 rounded-full items-center">
              <img src="/icons/facebook.png" alt="" className="w-16 h-16" />
              <h1 className="text-white text-xl">Suivez-nous sur Facebook</h1>
            </div>
            <div className="flex flex-row p-1 bg-white/15 gap-4 rounded-full items-center">
              <img src="/icons/instagram.png" alt="" className="w-16 h-16" />
              <h1 className="text-white text-xl">Suivez-nous sur Instagram</h1>
            </div>
            <div className="flex flex-row p-1 bg-white/15 gap-4 rounded-full items-center">
              <img src="/icons/linkedIn.png" alt="" className="w-16 h-16" />
              <h1 className="text-white text-xl">Suivez-nous sur LinkedIn</h1>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-8">
          <h1 className="font-light">
            © 2025 Les Joueuses Rallye Aïcha des Gazelles. Tous droits réservés.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
