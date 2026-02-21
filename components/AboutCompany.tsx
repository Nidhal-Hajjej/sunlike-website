import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import SectionTitle from "./SectionTitle"

export default function AboutCompany() {
  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <SectionTitle
          title="About Us"
          subtitle="Engineering excellence powering renewable energy development across Tunisia and Africa."
        />

        {/* ROW 1 : INTRO + MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">

          {/* Intro Text */}
          <div className="space-y-8">
            <p className="text-slate-700 leading-relaxed text-lg">
              Sunlike South Services is a Tunisian engineering and service company
              specialized in renewable energy, site preparation, equipment hire,
              and HSE management. Based in Gabès, we support photovoltaic and
              industrial projects with a strong commitment to safety, quality,
              and sustainability.
            </p>

            <p className="text-slate-700 leading-relaxed text-lg">
              Through technical expertise, innovation and strict compliance with
              international standards, we actively contribute to the development
              of the renewable energy sector in Tunisia and across Africa,
              delivering high-performance and reliable energy solutions.
            </p>
          </div>

          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-blue-100">
            <iframe
              title="Sunlike South Services Location"
              src="https://www.google.com/maps?q=Sunlike%20South%20Services@33.888494,10.067720&z=16&output=embed"
              className="w-full h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 border-2 border-white/30 rounded-2xl pointer-events-none"></div>
          </div>

        </div>

        {/* ROW 2 : LOGO + CONTACT */}
        <div className="mt-20 flex justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-10 bg-white/70 backdrop-blur-md px-12 py-10 rounded-2xl shadow-lg border border-blue-100">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="p-6 bg-white rounded-2xl shadow-xl shadow-blue-100/40 border border-blue-100">
              <Image
                src="/images/sunlike-logo.jpg"
                alt="Sunlike South Services"
                width={240}
                height={240}
                className="opacity-95"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-center lg:text-left">

            <div className="flex items-start gap-4 justify-center lg:justify-start">
              <MapPin className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-slate-800">Head Office</p>
                <p className="text-slate-600 text-sm">
                  Gabes, Tunisia <br />
                  Skhira – Main Road 6030
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center lg:justify-start">
              <Phone className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-slate-800">Phone</p>
                <p className="text-slate-600 text-sm">
                  +216 58 860 000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center lg:justify-start">
              <Mail className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-slate-800">Email</p>
                <p className="text-slate-600 text-sm">
                  sunlike@sunlikeserv.com
                </p>
              </div>
            </div>

          </div>

        </div>
        </div>

      </div>
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-blue-100 pointer-events-none"></div>

    </section>
  )
}
