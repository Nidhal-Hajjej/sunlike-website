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
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        speed={1200}
        className="h-full w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div className="mb-6">
              <span className="px-4 py-1.5 text-xs md:text-sm uppercase tracking-widest bg-white/10 backdrop-blur-md text-green-400 border border-white/20 rounded-full">
                Renewable Energy Services
              </span>
            </div>

            {/* Title */}
            <h1 className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Powering The Progress
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Of A Greener Tunisia.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Sunlike South Services delivers reliable renewable energy,
              infrastructure and industrial solutions with uncompising
              standards of safety, performance and sustainability.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#quote"
                className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition hover:opacity-90 text-center"
              >
                Get a Quote
              </a>

              <a
                href="#projects"
                className="border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white/10 transition backdrop-blur-md text-center"
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