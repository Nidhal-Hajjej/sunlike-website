interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  titleColor?: string;
  subtitleColor?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  titleColor = "text-[#0E1641]",
  subtitleColor = "text-gray-600",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`relative mb-20 ${
        isCenter ? "text-center mx-auto" : ""
      } max-w-3xl`}
    >
      {/* Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-72 h-72 bg-[radial-gradient(circle,#2AB0FF_0%,transparent_70%)] opacity-10 blur-3xl"></div>
      </div>

      {/* Label */}
      {/* <div className="relative z-10 mb-5">
        <span className="text-xs tracking-[0.4em] uppercase text-[#2AB0FF] font-semibold">
          Sunlike Energy
        </span>
      </div> */}

      {/* Title */}
      <h2
        className={`relative z-10 text-4xl lg:text-5xl xl:text-6xl font-extralight leading-tight ${titleColor}`}
      >
        {title}
      </h2>

      {/* Divider */}
      <div
        className={`relative z-10 mt-8 flex ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#2AB0FF] to-transparent"></div>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`relative z-10 mt-8 text-lg leading-relaxed ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
