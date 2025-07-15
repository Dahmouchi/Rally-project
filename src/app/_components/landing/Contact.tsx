/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import React from "react";
import "react-phone-input-2/lib/style.css";
import { PhoneInput } from "@/components/phone-input";
const Contact = () => {
  const { register, handleSubmit, control } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log(data);
    // Here you can send the data to your API
    setLoading(false);
  };
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
    {
      title: "Autre",
      price: "",
      features: ["Nom de la marque cité dans notre communication"],
      featured: false,
    },
  ];

  return (
    <div id="contact">
      <div className="relative lg:py-8 lg:min-h-screen p-2">
        <div
          className="w-3/4 h-[500px] bg-cover relative bg-left hidden lg:block"
          style={{ backgroundImage: 'url("/Picture5.png")' }}
        >
          <div className="bg-yellow-800/40 absolute w-full h-full hidden"></div>
        </div>
        <div className="bg-white lg:border-4 border-2 border-second rounded-lg dark:bg-dark lg:p-8 p-4 lg:w-2/3 lg:absolute right-16 top-32">
          <h2 className="text-yellow-500 lg:text-4xl text-2xl font-semibold">
            Contacez-Nous
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 grid md:grid-cols-2 gap-4"
          >
            {/* Full Name */}
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Nom et prénom
              </label>
              <input
                {...register("fullName", { required: "Full name is required" })}
                placeholder="Veuillez entrer votre nom complet"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Adresse email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Veuillez fournir une adresse e-mail valide"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            {/* Business Name */}
            <div className="">
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Numéro de téléphone
              </label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry="MA"
                    placeholder="Votre numéro de téléphone"
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Nom de l&apos;entreprise
              </label>
              <input
                {...register("businessName", {
                  required: "Business name is required",
                })}
                placeholder="Entrez le nom de votre entreprise"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Type de partenariat
              </label>
              <select
                {...register("partnership", {
                  required: "Le partenariat est requis",
                })}
                className="w-full p-2 border border-gray-300 rounded-md"
                defaultValue=""
              >
                <option value="" disabled>
                  Veuillez choisir un partenariat
                </option>
                {partnerships.map((p) => (
                  <option key={p.title} value={p.title}>
                    {p.title} {p.price}
                  </option>
                ))}
              </select>
            </div>
            {/* Message */}
            <div className="md:col-span-2">
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                {...register("message")}
                placeholder="Le texte du message va ici"
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-text2 via-text to-text2 lg:w-1/2 w-full  text-white px-6 py-2 rounded-md"
              >
                {loading ? "Postuler..." : "Postuler"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
