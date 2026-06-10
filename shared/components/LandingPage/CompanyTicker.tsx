import React from "react";

export default function CompanyTicker() {

  const logos = [
     { name: "Amazon", logo: "/amazon.png" },
     { name: "LinkedIn", logo: "/TCS.png" },
      { name: "adobe", logo: "/adobe.png" },
    { name: "Wipro", logo: "/Wipro.png" },
     { name: "Intel", logo: "/intel.png" },
    { name: "Infosys", logo: "/infosys.png" },
    { name: "Google", logo: "https://img.icons8.com/color/48/google-logo.png" },
    { name: "Cisco", logo: "/cisco.png" },
    { name: "Apple", logo: "https://img.icons8.com/glyph-neue/64/mac-os.png"},
    { name: "Microsoft", logo: "microsoft.png" },
    { name: "flipkart", logo: "https://img.icons8.com/bubbles/100/flipkart.png" },
     { name: "spotify", logo: "spotify.png" },
      { name: "Netflix", logo: "/netflix.png" },
      { name: "Atlassian", logo: "/atlassian.png" },
      { name: "Nvidia", logo: "/Nvidia.png" },
       { name: "paypal", logo: "/paypal.png" },
        { name: "LinkedIn", logo: "/linkedin.png" },
       
  ];

  // Duplicate list of logos exactly once for a seamless infinite loop using translate-x -50%
  const duplicatedLogos = [...logos, ...logos ,...logos,...logos];

  return (
    <section className="bg-white border-y border-slate-100 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">

        {/* Left Static Indicator */}
        <div className="flex items-center gap-4 shrink-0 pr-8 md:border-r border-slate-200">
          <div className="h-10 w-1.5 bg-indigo-600 rounded-full shrink-0" />
          <div className="flex flex-col">
            <span className="text-3xl font-light tracking-tight text-slate-900 leading-none">10K+</span>
            <span className="text-xs font-light text-slate-500 mt-1 uppercase tracking-wider">Openings daily</span>
          </div>
        </div>

        {/* Right Scrolling Ticker */}
        <div className="w-full overflow-hidden relative flex-1">
          {/* Fade overlays for smooth scrolling transition effect */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-24 w-max animate-marquee">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center shrink-0 w-48 h-20"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="max-h-14 max-w-full object-contain opacity-95 hover:opacity-100 hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

