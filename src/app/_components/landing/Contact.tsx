/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import React from "react";
import "react-phone-input-2/lib/style.css";
import { PhoneInput } from "@/components/phone-input";
import { toast } from "react-toastify";
const Contact = () => {
const { register, handleSubmit, control,reset } = useForm();
const [loading, setLoading] = useState(false);
const onSubmit = async (data: any) => {
  setLoading(true);
   try {
    const response = await fetch('https://happytrip.ma/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: "contact@lesjoueusesrallye.ma",
        subject: `Nouvelle demande de partenariat: ${data.businessName || 'No company name'}`,
        html: createStaffEmailTemplate(data)
      }),
    });
    
    if (response.ok) {
      reset();
      toast.success("DEMANDE ENVOYÉE AVEC SUCCÉS");
    } else {
      
      throw new Error('');
    }
  } catch (error) {
    console.log(error)
    toast.error("Échec de l'envoi de l'e-mail");
  }
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
            Contactez-nous
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
                required
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
              required
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
                  required
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

const createStaffEmailTemplate = (data: any) => {
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
    <div style="font-family: 'Poppins', Arial, sans-serif; color: #222; max-width: 600px; margin: 0 auto;">
      <!-- Header with logo and accent -->
      <div style="background-color: #fff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; border-bottom: 4px solid #f59e0b;">
        <img src="https://lesjoueusesrallye.ma/icons/LOGO2.png" alt="les joueusesrallye Logo" style="max-height: 80px; display: block; margin: 0 auto;">
        <h1 style="color: #f59e0b; margin-bottom: 0;">Nouvelle demande de partenariat</h1>
        <p style="color: #6b7280; margin-top: 4px;">${currentDate}</p>
      </div>
      
      <!-- Email content -->
      <div style="padding: 25px; background-color: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <!-- Main message -->
        <p style="font-size: 16px; line-height: 1.5;">
          Une nouvelle demande de partenariat a été soumise.
        </p>
        
        <!-- Partner details card -->
        <div style="margin: 20px 0; padding: 20px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #f59e0b;">
          <h3 style="color: #f59e0b; margin-top: 0; margin-bottom: 16px; font-size: 18px;">
            🔹 Informations du partenaire
          </h3>
          
          <p style="margin: 10px 0;"><strong>Nom complet :</strong> ${data.fullName || 'Non spécifié'}</p>
          <p style="margin: 10px 0;"><strong>Entreprise :</strong> ${data.businessName || 'Non spécifié'}</p>
          <p style="margin: 10px 0;"><strong>Email :</strong> <a href="mailto:${data.email}" style="color: #f59e0b;">${data.email || 'Non spécifié'}</a></p>
          <p style="margin: 10px 0;"><strong>Téléphone :</strong> <a href="tel:${data.phone}" style="color: #f59e0b;">${data.phone || 'Non spécifié'}</a></p>
          <p style="margin: 10px 0;"><strong>Type de partenariat :</strong> 
            <span style="background-color: #fef3c7; padding: 2px 8px; border-radius: 4px; display: inline-block;">
              ${data.partnership || 'Non spécifié'}
            </span>
          </p>
        </div>
        
        <!-- Message section -->
        ${data.message ? `
        <div style="margin: 25px 0; padding: 18px; background-color: #f1f5f9; border-radius: 8px;">
          <h4 style="color: #f59e0b; margin-top: 0; margin-bottom: 12px; font-size: 16px;">📝 Message additionnel</h4>
          <p style="margin: 0; font-style: italic;">"${data.message}"</p>
        </div>
        ` : ''}
        
        <!-- Action buttons -->
        <div style="margin: 30px 0; text-align: center;">
          <a href="mailto:${data.email}" style="
            background-color: #f59e0b;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            display: inline-block;
            margin: 0 10px;
          ">Répondre au partenaire</a>       
        </div>       
      </div>      
    </div>
  `;
};