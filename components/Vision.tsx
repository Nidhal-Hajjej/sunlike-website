import Image from "next/image"
import SectionTitle from "./SectionTitle"

const points = [
  {
    title: "Premium Quality",
    text: "High-efficiency solar panels tested for durability.",
    icon: "https://images.ctfassets.net/k6ot5nj1c6f9/2rzFvdxUtuH4P7KQwC58ul/1eebac8670ec4d469be8a95d94e15a43/exclusive.svg"
  },
//   {
//     title: "Unmatched Experience",
//     text: "The SunPower name represents decades of solar innovation.",
//     icon: "https://images.ctfassets.net/k6ot5nj1c6f9/72mevNe8g5b1cl9WjmeaIK/68048e850437442601ba1435beadb9ff/customer-experience.svg"
//   },
  {
    title: "Custom Solutions",
    text: "Solar systems tailored to your business’s unique needs.",
    icon: "https://images.ctfassets.net/k6ot5nj1c6f9/2UWanDb90tcJevFtKxNle7/a1aea0c5ac1426658240bee4122232d7/bulb.svg"
  },
  {
    title: "Seamless Process",
    text: "Expert support from consultation to installation.",
    icon: "https://images.ctfassets.net/k6ot5nj1c6f9/1G8XIrihQNLVdsb44R2Ogx/6a4daa4d5185b4a48babaaeb4fef9a7f/checking.svg"
  },
//   {
//     title: "25-Year Manufacturer Warranty ",
//     text: "Industry-leading warranties and guarantees for peace of mind.",
//     icon: "https://images.ctfassets.net/k6ot5nj1c6f9/2EmEicVvmG0mfOB4FWfWYp/d465d019e92ae0f686115571778cdd5a/guarantee.svg"
//   },
]

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto">

        {/* Section principale: image + titre + paragraphe */}
        <div className="grid grid-cols-1 md:grid-cols-5 items-start mb-28 gap-12">

        {/* <div className="grid grid-cols-1 md:grid-cols-4 items-center mb-28 gap-8"> */}
  
        {/* Image à gauche : 1/4 */}
            {/* <div className="md:col-span-2 flex justify-center md:justify-start ">
                <Image
                src="/images/vision.jpg"
                alt="Our Vision"
                width={320}
                height={520}
                className="rounded-3xl object-cover"
                priority
                />
            </div> */}
            <div className="w-[400px] h-[240px] relative md:col-span-2 flex justify-center md:justify-start">
            <Image
                src="/images/vision.jpg"
                alt="Our Vision"
                fill
                className="object-cover rounded-3xl"
            />
            </div>

            {/* Texte à droite : 3/4 */}
            <div className="md:col-span-3">
                {/* <h2 className="text-4xl font-bold text-slate-900 font-title">
                Our Vision
                </h2>
                <p className="lg:text-xl text-lg leading-lg lg:leading-lg font-figtree u-Text--base text-gray-500 text-start mt-12">
                Sunlike South Services aims to be a regional leader in renewable energy
                and infrastructure development, recognized for its technical expertise,
                innovation, and commitment to sustainable growth.
                </p> */}
              <SectionTitle
                title="Our Vision"
                subtitle=" Sunlike South Services aims to be a regional leader in renewable energy
                and infrastructure development, recognized for its technical expertise,
                innovation, and commitment to sustainable growth."
              />
            </div>

        </div>


        {/* Points clés sous la section principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-48 gap-y-12">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4">
                <Image src={point.icon} alt={point.title} width={64} height={64} />
              </div>
              <p className="lg:text-[1.625rem] text-[1.375rem] lg:leading-md leading-lg tracking-snug font-figtree u-Text--base text-gray-500 text-start last:mb-0 mb-6">{point.title}</p>
              <p className="lg:text-xl text-lg leading-lg lg:leading-lg font-figtree u-Text--base text-gray-500 text-start last:mb-0 mb-6">{point.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
