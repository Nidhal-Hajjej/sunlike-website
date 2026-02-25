"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import SectionTitle from "./SectionTitle"

const projects = [
  {
    title: "GAMA Construction Project",
    image:
      "/gama.jpg",
    description:
      "The Gama Project in Sidi Bouzid is a large-scale 60 MW photovoltaic power plant designed to harness the region’s strong solar potential. This project significantly contributes to clean energy production in Tunisia, supporting national renewable energy goals and reducing carbon emissions.",
  },
  {
    title: "NR Sol Project",
    image:
      "/nr_sol.jpeg",
    description:
      "The NR Sol Project in Kairouan is a 1 MW solar installation developed to provide reliable and sustainable energy. The project supports local energy needs while promoting environmental responsibility through renewable power generation.",
  },
  {
    title: "NTC Power Project",
    image:
      "/ntc_power.jpeg",
    description:
      "The NTC Power Project in Medenine is a 3 MW photovoltaic plant built to deliver efficient and stable solar energy in southern Tunisia. It strengthens the regional energy supply and contributes to a cleaner and more sustainable future.",
  },
    {
    title: "ETELEC Project",
    image:
      "/etelec.png",
    description:
      "The ETELEC Project in Medenine is a 1 MW solar power system designed to enhance local renewable energy production. The project reflects a commitment to sustainable development and energy efficiency in the region.",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-blue-50 py-28 px-8 lg:px-16 overflow-hidden">

      {/* SECTION HEADER
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-5xl font-light mb-6">
          Achieved <span className="font-semibold text-blue-600">Projects</span>
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Discover how Sunlike is transforming businesses through
          innovative solar solutions designed for performance, reliability,
          and a greener future.
        </p>
      </motion.div> */}
        <SectionTitle
            title="Achieved Projects"
            subtitle="Discover how Sunlike is transforming businesses through
          innovative solar solutions designed for performance, reliability,
          and a greener future."
        />
      {/* CUSTOM ARROWS */}
      <div className="absolute top-1/2 left-4 z-20 hidden md:block">
        <button className="swiper-button-prev-custom bg-white/20 backdrop-blur-lg border border-white/30 p-4 rounded-full shadow-lg hover:scale-110 transition">
          <ArrowLeft className="text-blue-700" />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 z-20 hidden md:block">
        <button className="swiper-button-next-custom bg-white/20 backdrop-blur-lg border border-white/30 p-4 rounded-full shadow-lg hover:scale-110 transition">
          <ArrowRight className="text-blue-700" />
        </button>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="!overflow-visible"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >

              {/* CARD */}
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl">

                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* TOP TITLE */}
                <div className="absolute top-6 left-6 right-6">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white drop-shadow-lg">
                    {project.title}
                  </h3>
                </div>

                {/* BOTTOM CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">

                  <div className="bg-black/70 rounded-xl p-4">

                    <p className="text-white text-sm mb-4">
                      {project.description}
                    </p>

                  </div>

                </div>

              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
