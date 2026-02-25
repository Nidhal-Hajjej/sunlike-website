import Image from "next/image"
import SectionTitle from "./SectionTitle"

type Point = {
  title: string
  text: string
  icon: string
}

const points: Point[] = [
  {
    title: "Premium Quality",
    text: "High-efficiency solar panels tested for durability.",
    icon: "https://images.ctfassets.net/k6ot5nj1c6f9/2rzFvdxUtuH4P7KQwC58ul/1eebac8670ec4d469be8a95d94e15a43/exclusive.svg",
  },
  {
    title: "Custom Solutions",
    text: "Solar systems tailored to your business’s unique needs.",
    icon: "https://images.ctfassets.net/k6ot5nj1c6f9/2UWanDb90tcJevFtKxNle7/a1aea0c5ac1426658240bee4122232d7/bulb.svg",
  },
  {
    title: "Seamless Process",
    text: "Expert support from consultation to installation.",
    icon: "https://images.ctfassets.net/k6ot5nj1c6f9/1G8XIrihQNLVdsb44R2Ogx/6a4daa4d5185b4a48babaaeb4fef9a7f/checking.svg",
  },
]

export default function Vision() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-10 mb-16 md:mb-24">

          {/* Image */}
          <div className="relative w-full h-56 md:h-72 md:col-span-2">
            <Image
              src="/images/vision.jpg"
              alt="Our Vision"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>

          {/* Text */}
          <div className="md:col-span-3 text-center md:text-left">
            <SectionTitle
              title="Our Vision"
              subtitle="Sunlike South Services aims to be a regional leader in renewable energy and infrastructure development, recognized for its technical expertise, innovation, and commitment to sustainable growth."
            />
          </div>
        </div>

        {/* Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 mb-4">
                <Image
                  src={point.icon}
                  alt={point.title}
                  width={64}
                  height={64}
                />
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {point.title}
              </h3>

              <p className="text-gray-600 text-base">
                {point.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}