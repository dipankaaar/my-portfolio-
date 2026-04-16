"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO at FintechX",
    content: "Johnathan is a brilliant developer who delivered our project ahead of schedule. Highly recommended for any complex web projects.",
    avatar: "https://i.pravatar.cc/150?u=alex",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    role: "Product Manager at CloudScale",
    content: "Incredible attention to detail and excellent communication throughout the development process. A true professional.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Founding Engineer at StartupLab",
    content: "His technical expertise in React and Next.js helped us scale our platform to thousands of users effortlessly.",
    avatar: "https://i.pravatar.cc/150?u=david",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 text-center">What People Say</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="pb-12"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-light-navy p-10 rounded-2xl border border-cyan/10 relative overflow-hidden">
              <Quote className="absolute top-6 right-8 text-cyan/10 w-24 h-24 -z-0" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan text-cyan" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-foreground italic mb-10 leading-relaxed font-light">
                  &quot;{t.content}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border-2 border-cyan/30 overflow-hidden relative">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    <p className="text-cyan text-sm font-mono">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #64ffda !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};
