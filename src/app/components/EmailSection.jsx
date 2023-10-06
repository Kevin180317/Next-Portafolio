"use client"
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailData, setEmailData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        console.log("Correo electrónico enviado correctamente");
        // Limpia los campos del formulario o muestra un mensaje de éxito
        setEmailData({
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Error al enviar el correo electrónico");
        // Maneja el error adecuadamente (por ejemplo, muestra un mensaje de error)
      }
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
      // Maneja el error adecuadamente (por ejemplo, muestra un mensaje de error)
    }
  };

  return (
    <section
      id="contact"
      className="relative grid gap-4 py-24 my-12 md:grid-cols-2 md:my-12"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-white">
          Lets Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Im currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I
          try my best to get back to you!
        </p>
        <div className="flex flex-row gap-2 socials">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="mail@google.com"
              value={emailData.email}
              onChange={(e) =>
                setEmailData({ ...emailData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              value={emailData.subject}
              onChange={(e) =>
                setEmailData({ ...emailData, subject: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              value={emailData.message}
              onChange={(e) =>
                setEmailData({ ...emailData, message: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
