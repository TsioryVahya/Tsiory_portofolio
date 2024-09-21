"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    description: "(+261) 34 67 395 92",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tsioryvahyarabearivony@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "Linkedin",
    description: "Tsiory Vahya Rabearivony",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
      } else {
        setStatus("Une erreur s'est produite, veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Une erreur s'est produite, veuillez réessayer.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
              <p className="text-white/60">
                Vous avez un projet en tête ou vous cherchez à collaborer sur une nouvelle opportunité ? Remplissez le formulaire ci-dessous pour me contacter.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Nom" value={formData.firstname} onChange={handleChange} />
                <Input type="text" name="lastname" placeholder="Prénom" value={formData.lastname} onChange={handleChange} />
                <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <Input type="text" name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleChange} />
              </div>

              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Écrivez votre message ici"
                value={formData.message}
                onChange={handleChange}
              />

              <Button type="submit" className="px-4 py-2 max-w-60 w-full">
                Envoyez le message
              </Button>

              {status && <p className="text-white mt-4">{status}</p>}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="break-all max-w-[488px] md:max-w-full text-wrap">
                      {item.description}
                    </h3>


                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
