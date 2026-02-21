import { ShieldCheck, HardHat, Award, Leaf } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function HSESection() {
  return (
    <section id="hse" className="relative bg-gradient-to-b from-[#f5f9ff] to-[#eaf2ff] py-20 px-6 lg:px-12 xl:px-24 overflow-hidden">
      
      {/* Subtle Right Blue Glow */}
      <div className="absolute -right-[300px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,#2AB0FF_0%,transparent_70%)] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#0E1641] mb-4">
            HSE & Garantie
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Sunlike, safety, environmental responsibility, and long-term system performance 
            are at the heart of every solar installation we deliver.
          </p>
        </div> */}
        <SectionTitle
            title="HSE & Garantie"
            subtitle="Safety excellence, environmental responsibility and long-term performance are the pillars of every solar project we deliver."
        />

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <FeatureCard 
            Icon={HardHat}
            title="Health & Safety"
            text="Strict compliance with international safety standards ensuring zero-compromise job site protection."
          />

          <FeatureCard 
            Icon={Leaf}
            title="Environmental Care"
            text="Sustainable engineering practices minimizing environmental impact and maximizing clean energy output."
          />

          <FeatureCard 
            Icon={ShieldCheck}
            title="System Reliability"
            text="High-quality components and certified installation teams ensuring durable and secure systems."
          />

          <FeatureCard 
            Icon={Award}
            title="Performance Garantie"
            text="Long-term performance warranty ensuring optimal production and peace of mind for decades."
          />

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ Icon, title, text }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-blue-50">
      
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#2AB0FF]/10 mb-6 group-hover:bg-[#2AB0FF] transition-all">
        <Icon className="w-7 h-7 text-[#2AB0FF] group-hover:text-white transition-colors" />
      </div>

      <h3 className="text-lg font-semibold text-[#0E1641] mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}
