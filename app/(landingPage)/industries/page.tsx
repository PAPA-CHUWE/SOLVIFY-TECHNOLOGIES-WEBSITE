'use client';

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndustriesWeServedList } from "@/app/constants/industriesServedList";

const IndustriesWeServed = () => {
  return (
    <section
      id="industries"
      className="w-full min-h-screen py-20 flex flex-col items-center justify-center bg-[#000066] text-white overflow-hidden"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#e3c53c] drop-shadow-[0_0_20px_#e3c53c]">
          Industries We Serve
        </h2>
        <p className="mt-3 text-slate-300 text-sm tracking-wider">
          Powering digital transformation across diverse sectors
        </p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-7xl relative"
      >
        <Swiper
          spaceBetween={40}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2.5}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
          className="pb-12!"
        >
          {IndustriesWeServedList.map((item, index) => (
            <SwiperSlide key={index} className="flex! justify-center">
              <Card className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl overflow-hidden hover:shadow-[0_0_25px_#00ffff] transition-all duration-500 w-80 group">
                <CardContent className="p-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48 opacity-90 group-hover:opacity-100 transition-all duration-500"
                  />
                </CardContent>

                <CardHeader className="absolute inset-0 bg-[#000066]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <CardTitle className="text-[#e3c53c] text-xl font-semibold drop-shadow-[0_0_12px_#e3c53c] text-center">
                    {item.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </SwiperSlide>
          ))}

          {/* Navigation Arrows */}
          <div className="swiper-button-next after:hidden">
            <ChevronRightIcon className="h-8 w-8 text-[#e3c53c]" />
          </div>
          <div className="swiper-button-prev after:hidden">
            <ChevronLeftIcon className="h-8 w-8 text-[#e3c53c]" />
          </div>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default IndustriesWeServed;
