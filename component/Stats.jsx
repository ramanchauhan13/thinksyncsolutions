import React from "react";

const Stats = () => {
  const stats = [
    { value: "100+", label: "Products Shipped", sub: "Global Delivery" },
    { value: "02hr", label: "Support Response", sub: "High Priority" },
    { value: "100%", label: "In-House Engineering", sub: "Zero Outsourcing" },
  ];

  return (
    <section className="py-12 bg-blue-600 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((item, idx) => (
            <div key={idx} className="group relative">
              {/* Decorative Glass Background - Visible on Hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:-rotate-1 rounded-3xl transition-all duration-500 border border-white/10 backdrop-blur-sm" />

              {/* Main Card Content */}
              <div className="relative p-8 rounded-3xl transition-transform duration-500 group-hover:-translate-y-2">
                {/* Accent Line */}
                <div className="flex justify-center mb-6">
                  <div className="h-1 w-10 bg-blue-300/30 group-hover:w-24 group-hover:bg-white transition-all duration-700" />
                </div>

                <div className="text-center">
                  {/* Number with subtle shadow */}
                  <div className="text-7xl lg:text-8xl font-black mb-2 tracking-tighter drop-shadow-2xl">
                    {item.value}
                  </div>

                  {/* Label with increased letter spacing */}
                  <div className="uppercase tracking-[0.3em] font-black text-[10px] text-blue-100 mb-2 opacity-80 group-hover:opacity-100">
                    {item.label}
                  </div>

                  {/* Creative sub-detail tag */}
                  <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] font-bold uppercase tracking-widest text-blue-200 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {item.sub}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Text - Kept your original logic */}
      <div className="absolute -bottom-10 right-0 text-[15vw] font-black opacity-10 pointer-events-none select-none tracking-tighter">
        RELIABLE
      </div>
    </section>
  );
};

export default Stats;
