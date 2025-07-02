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
          <p className="text-gray-600 dark:text-gray-200 text-sm mt-2 font-light">
            Nous serions ravis de vous entendre ! Que vous souhaitez en savoir
            plus sur nous ou que vous souhaitiez faire passer votre entreprise
            au niveau supérieur, notre équipe est là pour vous aider.{" "}
          </p>

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
