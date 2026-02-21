import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0E1641] text-white">

      {/* Call-to-Action Section */}
      <section className="px-6 lg:px-12 xl:px-24 py-14 md:py-20 flex flex-col lg:flex-row items-center lg:justify-between relative overflow-hidden">
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className="text-4xl lg:text-[2.75rem] font-light font-figtree leading-snug mb-6">
            Find Your Custom <br /> Solar Solution
          </h2>
          <button className="bg-[#2AB0FF] text-white font-bold py-3 px-6 rounded-xl transition-all hover:bg-white hover:text-[#0E1641] hover:ring-2 hover:ring-[#2AB0FF] active:bg-white active:text-[#0E1641]">
            Start Your Quote
          </button>
        </div>

       {/* Grand cercle principal */}
<div className="absolute -right-[500px] top-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-bl from-blue-600 via-blue-800 to-black opacity-70 pointer-events-none"></div>

{/* Cercle secondaire plus léger */}
<div className="absolute -right-[380px] top-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-gradient-to-bl from-blue-400/30 to-transparent pointer-events-none"></div>

        {/* <div className="flex-1 relative hidden sm:block">
          <div className="w-[330px] h-[330px] lg:w-[380px] lg:h-[380px] xl:w-[430px] xl:h-[430px] absolute bottom-[-35%] xl:bottom-[-50%] left-1/2 -translate-x-1/2 -rotate-45 pointer-events-none select-none">
            <img
              src="/O_daylight_evening_evening_daylight_520px.webp"
              alt="Solar Graphic"
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}
      </section>

      {/* Main Footer Content */}
      <section className="px-6 lg:px-12 xl:px-24 border-t border-[#52606D] py-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10">

          {/* Logo & Contact */}
          <div className="flex-1 min-w-[250px]">
            <img src="/images/sunlike-logo.jpg" alt="Sunlike Logo" className="w-36 mb-5"/>
            <address className="not-italic text-gray-300 mb-5">
              <a href="https://maps.app.goo.gl/rbxxnmVYBDqrVVYL6" target="_blank" rel="noreferrer" className="hover:text-[#2AB0FF]">
                Nahal,<br />Gabès, TUNISIA
              </a><br/>
              <a href="tel:+21658860000" className="hover:text-[#2AB0FF]">+216 58 860 000</a><br />
            </address>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <SocialIcon href="#" Icon={FaFacebookF} />
              <SocialIcon href="https://www.linkedin.com/company/sunlike-south-services" Icon={FaLinkedinIn} />
              <SocialIcon href="mailto:sunlike@sunlikeserv.com" Icon={FaEnvelope} />
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-10 flex-1 justify-between min-w-[250px]">
            <FooterLinks title="About Us" links={[
              { label: "About", href: "#about" },
              { label: "Our Vision", href: "#vision" }
            ]} />

            <FooterLinks title="Solar Solutions" links={[
              { label: "Get a Quote", href: "#quote" },
              { label: "Projects Achived", href: "#projects" },
              { label: "HSE & Garantie", href: "#hse" }
            ]} />

          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="px-6 lg:px-12 xl:px-24 border-t border-[#52606D] py-4 text-center text-gray-400 text-xs flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© 2026 Sunlike. All rights reserved.</p>
      </section>
    </footer>
  );
}

function SocialIcon({ href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#2AB0FF] transition-colors"
    >
      <Icon className="text-[#0E1641] w-4 h-4" />
    </a>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div className="min-w-[120px]">
      <h3 className="font-bold text-gray-300 mb-3">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              className="text-white hover:text-[#2AB0FF] text-sm"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
