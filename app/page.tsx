import AboutCompany from "@/components/AboutCompany"
import FunFacts from "@/components/FunFacts"
import Footer from "@/components/Footer"
import HeroSlider from "@/components/HeroSlider"
import HSE from "@/components/HSE"
import Projects from "@/components/Projects"
import QuoteForm from "@/components/QuoteForm"
import Vision from "@/components/Vision"

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutCompany />
      {/* <div className="pt-10"> */}
        <Vision />
        <QuoteForm />
        <Projects />
        <FunFacts />
        <HSE />
      {/* </div> */}
      <Footer />
    </>
  )
}
