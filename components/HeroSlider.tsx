"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import { motion } from "framer-motion"

export default function HeroSlider() {
  const images = [
    "/images/solar/solar-1.jpeg",
    "/images/solar/solar-2.jpeg",
    "/images/solar/solar-4.jpeg",
    "/images/solar/solar-7.jpeg",
    "/images/solar/solar-8.jpeg",
    "/images/solar/solar-5.avif",
  ]

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">

      {/* Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay radial (conservé tel quel) */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(
              circle at 100% 0%,
              rgba(0,0,0,0.2) 0%,
              rgba(0,0,0,0.3) 25%,
              rgba(0,0,0,0.9) 70%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div className="mb-6">
              <span className="px-4 py-1.5 text-sm uppercase tracking-widest bg-white/10 backdrop-blur-md text-green-400 border border-white/20 rounded-full">
                Renewable Energy & Industrial Services
              </span>
            </div>

            {/* Title */}
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1]">
              Powering Progress.
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Sustaining the Future.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Sunlike South Services delivers reliable renewable energy,
              infrastructure and industrial solutions with uncompromising
              standards of safety, performance and sustainability.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-wrap gap-6">
              <a
                href="#quote"
                className="bg-gradient-to-r from-green-400 to-cyan-400 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg shadow-green-900/40"
              >
                Get a Quote
              </a>

              <a
                href="#projects"
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition backdrop-blur-md"
              >
                Explore Our Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
