"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, ExternalLink, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { cn } from "@/lib/utils";

const socials = [
  { name: "GitHub", icon: <FaGithub size={20} />, href: "#" },
  { name: "LinkedIn", icon: <FaLinkedin size={20} />, href: "#" },
  { name: "Twitter", icon: <FaTwitter size={20} />, href: "#" },
  { name: "Email", icon: <Mail size={20} />, href: "mailto:dipankar200582@gmail.com" },
];

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Get In Touch</h2>
      <p className="text-slate text-center max-w-lg mx-auto mb-16 leading-relaxed">
        Have an idea or need an AI solution? Let&apos;s build something smart together.
        <br />
        I&apos;m available for freelance work and collaborations.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-light-navy rounded-xl border border-cyan/10">
              <Mail className="text-cyan" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground mb-1">Email Me</h4>
              <p className="text-slate">dipankar200582@gmail.com</p>
              <a href="mailto:dipankar200582@gmail.com" className="text-cyan text-sm flex items-center gap-1 mt-2 hover:underline">
                Send a message <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-4 bg-light-navy rounded-xl border border-cyan/10">
              <Phone className="text-cyan" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground mb-1">WhatsApp / Phone</h4>
              <p className="text-slate">+91 7601852619</p>
              <a href="https://wa.me/917601852619" target="_blank" rel="noopener noreferrer" className="text-cyan text-sm flex items-center gap-1 mt-2 hover:underline">
                Chat on WhatsApp <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-4 bg-light-navy rounded-xl border border-cyan/10">
              <MapPin className="text-cyan" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground mb-1">Location</h4>
              <p className="text-slate">Durgapur, West Bengal</p>
              <p className="text-sm text-cyan mt-1">Available for remote work</p>
            </div>
          </div>

          <div className="pt-8 border-t border-lightest-navy/50">
            <h4 className="text-lg font-bold text-foreground mb-6">Connect with me</h4>
            <div className="flex gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-4 bg-lightest-navy/20 backdrop-blur-sm rounded-xl border border-cyan/10 text-slate hover:text-cyan hover:border-cyan/30 hover:shadow-[0_0_15px_rgba(255,111,97,0.2)] transition-all shadow-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-light-navy p-8 rounded-2xl border border-cyan/10 shadow-2xl relative"
        >
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-20 bg-light-navy rounded-2xl flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-cyan/10 rounded-full flex items-center justify-center mb-6">
                  <Send className="text-cyan w-10 h-10 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-slate mb-8">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-cyan text-navy font-bold rounded-lg"
                >
                  Send another
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-cyan uppercase tracking-widest ml-1">Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-lightest-navy/20 backdrop-blur-sm border border-cyan/20 rounded-lg p-4 text-foreground placeholder-slate outline-none focus:border-cyan transition-colors"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-cyan uppercase tracking-widest ml-1">Email</label>
                <input
                  required
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-lightest-navy/20 backdrop-blur-sm border border-cyan/20 rounded-lg p-4 text-foreground placeholder-slate outline-none focus:border-cyan transition-colors"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-cyan uppercase tracking-widest ml-1">Subject</label>
              <input
                required
                type="text"
                placeholder="Topic of interest"
                className="w-full bg-lightest-navy/20 backdrop-blur-sm border border-cyan/20 rounded-lg p-4 text-foreground placeholder-slate outline-none focus:border-cyan transition-colors"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-cyan uppercase tracking-widest ml-1">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Your detailed message..."
                className="w-full bg-lightest-navy/20 backdrop-blur-sm border border-cyan/20 rounded-lg p-4 text-foreground placeholder-slate outline-none focus:border-cyan transition-colors resize-none"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className={cn(
                "w-full py-4 bg-cyan text-navy font-bold rounded-lg hover:bg-cyan/80 transition-all flex items-center justify-center gap-2",
                isSubmitting && "opacity-50 cursor-not-allowed"
              )}
            >
              {isSubmitting ? "Sending..." : <>Send Message <Send size={18} /></>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
