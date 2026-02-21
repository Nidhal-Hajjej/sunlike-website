"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

const stats : StatType[] = [
  { value: 1, label: "Years of Experience", icon: "/icons/expertise.png" },
  { value: 4, label: "Completed Projects", icon: "/icons/closure.png" },
  { value: 20, label: "Skilled Employees", icon: "/icons/engineer.png" },
  { value: 3, label: "Ongoing Projects", icon: "/icons/project.png" },
];

export default function FunFacts() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#0E1641] to-[#132C6B] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Delivering excellence in renewable energy with proven results and trusted expertise.
          </p>
        </div> */}
        <div className="text-white">
          <SectionTitle
            title="Our Achievements"
            subtitle="Delivering excellence in renewable energy with proven results and trusted expertise."
            titleColor="text-white"
            subtitleColor="text-blue-100" 
            />
        </div>
        {/* Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} stat={stat} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
}

type StatType = {
  value: number;
  label: string;
  icon: string;
};

function Card({ stat, start }: { stat: StatType; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = stat.value / 100;

    const counter = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(current));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [start, stat.value]);

  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 text-center transition-all duration-500 hover:-translate-y-3 hover:bg-white/10">
      <img
        src={stat.icon}
        alt={stat.label}
        className="w-14 mx-auto mb-6 brightness-0 invert"
      />
      <h3 className="text-4xl font-bold text-white mb-2">
        {count}+
      </h3>
      <p className="text-gray-300">{stat.label}</p>
    </div>
  );
}
