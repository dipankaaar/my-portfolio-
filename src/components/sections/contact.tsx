"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, MapPin, Phone } from "lucide-react";
import { FaGithub, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { HandButton } from "../ui/hand-button";
import { HandCard } from "../ui/hand-card";

const socials = [
  { name: "GitHub", icon: <FaGithub size={24} />, href: "#" },
  { name: "WhatsApp", icon: <FaWhatsapp size={24} />, href: "https://wa.me/917601852619" },
  { name: "Twitter", icon: <FaTwitter size={24} />, href: "#" },
  { name: "Email", icon: <Mail size={24} />, href: "mailto:dipankar200582@gmail.com" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto relative">
      <div className="flex flex-col items-center mb-12">
        <div className="relative inline-block">
          <motion.h2 
            layoutId="contact"
            className="text-4xl md:text-5xl font-mono font-bold text-[var(--fg-pencil)] text-center w-full px-4"
          >
            Let's Chat!
          </motion.h2>
          {/* Wobbly underline */}
          <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--accent-red)]" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,5 Q25,8 50,5 T100,5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      
      <p className="text-[var(--fg-pencil)] text-xl font-sans text-center max-w-2xl mx-auto mb-16 leading-relaxed">
        Have an idea or need an AI solution? Let's build something smart together.
        <br />
        I'm available for freelance work and collaborations.
      </p>

      <div className="flex flex-col items-center gap-12 w-full max-w-2xl mx-auto">
        {/* Contact Info */}
        <HandCard decoration="tack" className="-rotate-1 w-full">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 border-[3px] border-[var(--fg-pencil)] rounded-full bg-[var(--bg-post-it)] shadow-[2px_2px_0px_0px_var(--fg-pencil)]">
              <Mail className="text-[var(--fg-pencil)]" strokeWidth={3} />
            </div>
            <div>
              <h4 className="text-2xl font-mono font-bold text-[var(--fg-pencil)] mb-1">Email Me</h4>
              <p className="text-[var(--fg-pencil)] font-sans text-lg">dipankar200582@gmail.com</p>
              <a href="mailto:dipankar200582@gmail.com" className="text-[var(--accent-blue)] text-lg flex items-center gap-1 mt-1 hover:underline decoration-wavy">
                Send a message <ExternalLink size={14} strokeWidth={3} />
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 border-[3px] border-[var(--fg-pencil)] rounded-full bg-[var(--accent-red)] text-white shadow-[2px_2px_0px_0px_var(--fg-pencil)]">
              <Phone strokeWidth={3} />
            </div>
            <div>
              <h4 className="text-2xl font-mono font-bold text-[var(--fg-pencil)] mb-1">WhatsApp / Phone</h4>
              <p className="text-[var(--fg-pencil)] font-sans text-lg">+91 7601852619</p>
              <a href="https://wa.me/917601852619" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-blue)] text-lg flex items-center gap-1 mt-1 hover:underline decoration-wavy">
                Chat on WhatsApp <ExternalLink size={14} strokeWidth={3} />
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 border-[3px] border-[var(--fg-pencil)] rounded-full bg-white shadow-[2px_2px_0px_0px_var(--fg-pencil)]">
              <MapPin className="text-[var(--fg-pencil)]" strokeWidth={3} />
            </div>
            <div>
              <h4 className="text-2xl font-mono font-bold text-[var(--fg-pencil)] mb-1">Location</h4>
              <p className="text-[var(--fg-pencil)] font-sans text-lg">Durgapur, West Bengal</p>
              <p className="text-[var(--accent-red)] text-sm font-bold mt-1 uppercase tracking-wider">Available globally</p>
            </div>
          </div>
        </HandCard>

        <div className="pt-4 flex flex-col items-center">
          <h4 className="text-2xl font-mono font-bold text-[var(--fg-pencil)] mb-6 text-center">Find me online</h4>
          <div className="flex gap-6 justify-center">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ y: -5, rotate: 5 }}
                className="p-4 bg-white border-[3px] border-[var(--fg-pencil)] rounded-[var(--radius-wobbly)] shadow-[3px_3px_0px_0px_var(--fg-pencil)] text-[var(--fg-pencil)] hover:bg-[var(--bg-post-it)] transition-colors"
                style={{ borderRadius: "var(--radius-wobbly)" }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
