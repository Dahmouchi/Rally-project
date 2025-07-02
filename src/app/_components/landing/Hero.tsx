"use client";

import * as React from "react";

export function Hero() {
  return (
    <div className="w-full lg:min-h-screen lg:pt-24 pt-20" id="hero">
      <div className="lg:p-8 p-2">
        <div
          className="bg-red-800 relative w-full bg-cover bg-center rounded-2xl lg:min-h-[80vh] py-10 flex items-center justify-center"
          style={{
            backgroundImage: 'url("/Picture2.jpg")',
          }}
        >
          <div className="bg-yellow-800/40 absolute w-full h-full rounded-2xl "></div>
          <div className="lg:w-1/2 z-10 px-4">
            <h1 className="lg:text-7xl font-semibold text-4xl text-center text-white ">
              LES JOUEUSES
            </h1>
            <h1 className="lg:text-lg text-sm text-center text-slate-200 mt-2">
              Rejoignez-nous dans cette aventure unique au cœur du désert
              marocain. Un défi sportif, humain et solidaire qui porte haut les
              valeurs d&apos;engagement et de détermination.
            </h1>
            <div className="flex gap-2 items-center justify-center mt-2">
              <div
                className="cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#our-services");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <div className="bg-gradient-to-r  font-semibold from-text2 via-text to-text2  px-4 py-2 rounded-full text-slate-100">
                  <div>EN SAVOIR PLUS</div>
                </div>
              </div>
              
              <div
                onClick={() => {
                  const section = document.querySelector("#contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border-2 cursor-pointer text-white font-semibold px-6 py-2 rounded-full border-white"
              >
                <div>Entrer en contact</div>
              </div>
            </div>
          </div>

          <div className="w-2/3 h-20 bg-white hidden lg:block absolute bottom-0 right-0 dark:bg-dark rounded-tl-full clip-path-custom">
            <div className="flex items-center justify-center w-full gap-4 h-full">
              <div className="w-1/2 h-full flex items-center justify-between mt-6">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-text2 text-3xl font-bold">33+</h1>
                  <h1 className="text-md font-semibold"> éditions </h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-text2 text-3xl font-bold">9+</h1>
                  <h1 className="text-md font-semibold">nationalités représentées  </h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-text2 text-3xl font-bold">160+</h1>
                  <h1 className="text-md font-semibold">équipages </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="about-uss"></div>
        <div className="lg:hidden py-4" >
          <div className="flex items-center justify-center w-full gap-4 h-full">
            <div className="w-full px-4 py-2 h-full flex items-center justify-between">
               <div className="flex flex-col items-center justify-center">
                  <h1 className="text-text2 text-3xl font-bold">33+</h1>
                  <h1 className="text-md font-semibold"> éditions </h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-text2 text-3xl font-bold">9+</h1>
                  <h1 className="text-md font-semibold">nationalités représentées  </h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-text2 text-3xl font-bold">160+</h1>
                  <h1 className="text-md font-semibold">équipages </h1>
                </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
