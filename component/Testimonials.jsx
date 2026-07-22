"use client";

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const reviews = [
    {
      quote:
        "Working with ThinkSync Solutions was super easy. They listened to what I needed and turned my ideas into a really smooth, modern website. It honestly made my job a lot easier.",
      client: "Ayush Gaur",
      position: "Event Manager",
      metric: "Smooth Delivery",
    },
    {
      quote:
        "I wanted a site that looked clean and loaded fast, and that’s exactly what they delivered. The team kept me updated the whole time and finished earlier than I expected.",
      client: "Lalit Singh Mehta",
      position: "Architect",
      metric: "Fast & Optimized",
    },
    {
      quote:
        "I’m not very tech-savvy, but these guys explained everything simply and built a site my students love using. It feels smooth and professional without being complicated.",
      client: "Dzine Tech Solution",
      position: "Coaching Center Owner",
      metric: "User Experience",
    },
    {
      quote:
        "ThinkSync Solutions really got what I wanted. They created a website that’s not only beautiful but also super easy to manage. It’s been a great experience working with them.",
      client: "Pulkit Goel",
      position: "Exporter",
      metric: "Beautiful & Manageable",
    },
    {
      quote:
        "I needed a website that could handle a lot of traffic and still look great. ThinkSync Solutions delivered exactly that, and they were great to work with throughout the process.",
      client: "QCD Globals",
      position: "Travel Agency",
      metric: "Scalable & Stunning",
    },
    {
      quote: "ThinkSync Solutions took my vision and made it a reality. The App they built is not only visually appealing but also really easy to navigate. I couldn’t be happier.",
      client:"Abhishek Singh Thakur",
      position:"Fitness Center",
      metric:"Engaging & Dynamic"
    },
  ];

  const next = () =>
    setActive((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setActive((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Graphic - Responsive font size */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] md:text-[25vw] font-black text-slate-50 select-none pointer-events-none -z-10 leading-none">
        REVIEWS
      </div>

      <div className="max-w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl md:text-left">
            <div className="flex items-center gap-4 mb-2">
  <div className="flex flex-col gap-1">
    <span className="h-1 w-12 bg-blue-600 rounded-full"></span>
    <span className="h-1 w-6 bg-blue-600/30 rounded-full"></span>
  </div>
  
  <span className="text-slate-900 font-black tracking-[0.3em] text-xs uppercase relative">
    Testimonials
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-700 group-hover:w-full"></span>
  </span>
</div>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.8] uppercase">
              CLIENT <br />
              <span className="text-blue-600">VOICES.</span>
            </h2>
          </div>

          <div className="flex justify-center gap-4 mt-4 md:mt-0">
            <button
              onClick={prev}
              className="p-4 md:p-6 border border-slate-100 hover:cursor-pointer rounded-full hover:bg-blue-600 hover:text-white transition-all group"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-4 md:p-6 bg-blue-600 text-white hover:cursor-pointer rounded-full hover:bg-slate-900 transition-all shadow-xl shadow-blue-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Interactive Carousel Box */}
        <div className="relative">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-in-out flex flex-col md:grid md:grid-cols-12 items-center gap-8 md:gap-12 ${
                i === active
                  ? "opacity-100 translate-x-0 relative z-10"
                  : "opacity-0 translate-x-10 absolute inset-0 pointer-events-none"
              }`}
            >
              {/* Quote Content */}
              <div className="md:col-span-7 lg:col-span-8">
                <Quote size={40} className="text-blue-600 mb-6 opacity-20" />
                <p className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-slate-900 mb-8">
                  "{r.quote}"
                </p>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg md:text-xl font-black uppercase tracking-tighter">
                    {r.client}
                  </h4>
                  <p className="text-blue-600 font-black uppercase tracking-widest text-[10px]">
                    {r.position}
                  </p>
                </div>
              </div>

              {/* Metric Card */}
              <div className="md:col-span-5 lg:col-span-4 w-full">
                <div className="w-full bg-slate-950 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-white relative overflow-hidden group border border-white/5 shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                        <Star className="text-blue-400 fill-blue-400" size={18} />
                      </div>
                      <div className="flex gap-0.5">
                         {[...Array(5)].map((_, starI) => (
                           <Star key={starI} size={10} className="text-yellow-400 fill-yellow-400" />
                         ))}
                      </div>
                    </div>

                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-2">
                      Success Metric
                    </p>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
                      {r.metric}
                    </h3>

                    <div className="mt-6 flex gap-1">
                      {[...Array(4)].map((_, barI) => (
                        <div key={barI} className="h-1 w-6 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 w-full animate-pulse" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Navigation */}
        <div className="mt-16 md:mt-24 flex items-center justify-center md:justify-start gap-2 md:gap-4">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === active
                  ? "w-12 md:w-24 bg-blue-600"
                  : "w-4 md:w-8 bg-slate-100 hover:bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



// "use client";

// import React, { useState, useMemo } from "react";
// import {
//   Quote,
//   Star,
//   Sparkles,
//   CheckCircle2,
//   ArrowUpRight,
//   ChevronDown,
//   Building2,
//   Users,
//   Award,
//   SlidersHorizontal,
// } from "lucide-react";

// // Easily add as many reviews as you want here!
// const ALL_REVIEWS = [
//   {
//     id: 0,
//     quote:
//       "Working with ThinkSync Solutions was super easy. They listened to what I needed and turned my ideas into a really smooth, modern website. It honestly made my job a lot easier.",
//     client: "Ayush Gaur",
//     position: "Event Manager",
//     company: "Live Events Co.",
//     category: "Events & Fitness",
//     metric: "Smooth Delivery",
//     rating: 5,
//   },
//   {
//     id: 1,
//     quote:
//       "I wanted a site that looked clean and loaded fast, and that’s exactly what they delivered. The team kept me updated the whole time and finished earlier than I expected.",
//     client: "Lalit Singh Mehta",
//     position: "Architect",
//     company: "LSM Architecture",
//     category: "Architecture",
//     metric: "Fast & Optimized",
//     rating: 5,
//   },
//   {
//     id: 2,
//     quote:
//       "I’m not very tech-savvy, but these guys explained everything simply and built a site my students love using. It feels smooth and professional without being complicated.",
//     client: "Dzine Tech Solution",
//     position: "Coaching Center Owner",
//     company: "Dzine Tech",
//     category: "EdTech",
//     metric: "User Experience",
//     rating: 5,
//   },
//   {
//     id: 3,
//     quote:
//       "ThinkSync Solutions really got what I wanted. They created a website that’s not only beautiful but also super easy to manage. It’s been a great experience working with them.",
//     client: "Pulkit Goel",
//     position: "Exporter",
//     company: "Goel Exports",
//     category: "E-Commerce & Travel",
//     metric: "Easy to Manage",
//     rating: 5,
//   },
//   {
//     id: 4,
//     quote:
//       "I needed a website that could handle a lot of traffic and still look great. ThinkSync Solutions delivered exactly that, and they were great to work with throughout the process.",
//     client: "QCD Globals",
//     position: "Travel Agency",
//     company: "QCD Globals",
//     category: "E-Commerce & Travel",
//     metric: "Scalable & High Traffic",
//     rating: 5,
//   },
//   {
//     id: 5,
//     quote:
//       "ThinkSync Solutions took my vision and made it a reality. The App they built is not only visually appealing but also really easy to navigate. I couldn’t be happier.",
//     client: "Abhishek Singh Thakur",
//     position: "Fitness Center Owner",
//     company: "FitLife Studio",
//     category: "Events & Fitness",
//     metric: "Engaging & Dynamic",
//     rating: 5,
//   },
// ];

// const CATEGORIES = [
//   "All",
//   "Events & Fitness",
//   "Architecture",
//   "EdTech",
//   "E-Commerce & Travel",
// ];

// const Testimonials = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [activeFeaturedId, setActiveFeaturedId] = useState(0);
//   const [showAllCards, setShowAllCards] = useState(false);

//   // Filter reviews based on selected category
//   const filteredReviews = useMemo(() => {
//     if (selectedCategory === "All") return ALL_REVIEWS;
//     return ALL_REVIEWS.filter((r) => r.category === selectedCategory);
//   }, [selectedCategory]);

//   // Current featured story (falls back to first filtered item if current ID isn't in current category)
//   const currentFeatured =
//     filteredReviews.find((r) => r.id === activeFeaturedId) ||
//     filteredReviews[0] ||
//     ALL_REVIEWS[0];

//   return (
//     <section
//       id="testimonials"
//       className="py-20 lg:py-28 bg-white relative overflow-hidden"
//     >
//       {/* Background Subtle Grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* --- Header & Title --- */}
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
//           <div>
//             <div className="flex items-center gap-3 mb-3">
//               <div className="flex flex-col gap-1">
//                 <span className="h-1 w-10 bg-blue-600 rounded-full" />
//                 <span className="h-1 w-5 bg-blue-600/30 rounded-full" />
//               </div>
//               <span className="text-slate-900 font-black tracking-[0.25em] text-xs uppercase">
//                 Client Success Stories
//               </span>
//             </div>

//             <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] uppercase">
//               Client <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">
//                 Feedback.
//               </span>
//             </h2>
//           </div>

//           {/* Social Proof Badge Stack */}
//           <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 p-3 rounded-2xl self-start lg:self-auto shadow-sm">
//             <div className="flex -space-x-2">
//               {ALL_REVIEWS.slice(0, 4).map((r, i) => (
//                 <div
//                   key={i}
//                   className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border-2 border-white flex items-center justify-center text-white text-[11px] font-black"
//                 >
//                   {r.client[0]}
//                 </div>
//               ))}
//             </div>
//             <div className="text-xs">
//               <div className="flex items-center gap-1">
//                 <p className="font-extrabold text-slate-900 leading-none">
//                   5.0 Rating
//                 </p>
//                 <div className="flex text-amber-400">
//                   <Star size={10} className="fill-amber-400" />
//                 </div>
//               </div>
//               <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mt-0.5">
//                 From {ALL_REVIEWS.length}+ Verified Clients
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* --- Key Metrics Bar --- */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
//           <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
//             <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-600">
//               <Award size={20} />
//             </div>
//             <div>
//               <p className="text-lg font-black text-slate-900 leading-tight">
//                 100%
//               </p>
//               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
//                 Satisfaction
//               </p>
//             </div>
//           </div>

//           <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
//             <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-600">
//               <CheckCircle2 size={20} />
//             </div>
//             <div>
//               <p className="text-lg font-black text-slate-900 leading-tight">
//                 50+
//               </p>
//               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
//                 Projects Shipped
//               </p>
//             </div>
//           </div>

//           <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
//             <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-600">
//               <Users size={20} />
//             </div>
//             <div>
//               <p className="text-lg font-black text-slate-900 leading-tight">
//                 98%
//               </p>
//               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
//                 Client Retention
//               </p>
//             </div>
//           </div>

//           <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
//             <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-600">
//               <Building2 size={20} />
//             </div>
//             <div>
//               <p className="text-lg font-black text-slate-900 leading-tight">
//                 6+
//               </p>
//               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
//                 Industries Served
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* --- Filter Category Tabs --- */}
//         <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
//           <div className="flex items-center gap-1.5 text-xs font-black uppercase text-slate-400 mr-2 shrink-0">
//             <SlidersHorizontal size={14} />
//             <span>Filter:</span>
//           </div>

//           {CATEGORIES.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => {
//                 setSelectedCategory(cat);
//                 setShowAllCards(false);
//               }}
//               className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
//                 selectedCategory === cat
//                   ? "bg-slate-900 text-white shadow-md"
//                   : "bg-slate-100 text-slate-600 hover:bg-slate-200/70"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* --- Primary Interactive Section (Featured Card + Selector List) --- */}
//         <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
//           {/* Left Column: Featured Hero Card */}
//           <div className="lg:col-span-7 bg-slate-950 text-white rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl border border-slate-800">
//             {/* Ambient Glowing Lighting */}
//             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

//             {/* Top Bar */}
//             <div className="relative z-10 flex items-center justify-between mb-8">
//               <span className="px-3.5 py-1.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
//                 <Sparkles size={12} />
//                 {currentFeatured.category}
//               </span>

//               <div className="flex gap-1">
//                 {[...Array(currentFeatured.rating)].map((_, i) => (
//                   <Star
//                     key={i}
//                     size={14}
//                     className="text-amber-400 fill-amber-400"
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Main Quote */}
//             <div className="relative z-10 my-auto">
//               <Quote size={36} className="text-blue-500 opacity-40 mb-3" />
//               <p className="text-lg sm:text-2xl font-semibold leading-relaxed tracking-tight text-slate-100">
//                 "{currentFeatured.quote}"
//               </p>
//             </div>

//             {/* Footer Metadata */}
//             <div className="relative z-10 pt-8 mt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
//               <div>
//                 <h3 className="text-lg font-black uppercase tracking-tight text-white">
//                   {currentFeatured.client}
//                 </h3>
//                 <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">
//                   {currentFeatured.position}
//                 </p>
//               </div>

//               <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800">
//                 <CheckCircle2 size={14} className="text-blue-400" />
//                 <span className="text-xs font-black uppercase tracking-wider text-slate-300">
//                   {currentFeatured.metric}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Tab Selector List */}
//           <div className="lg:col-span-5 flex flex-col justify-between gap-3">
//             {filteredReviews.map((r, i) => {
//               const isSelected = currentFeatured.id === r.id;

//               return (
//                 <button
//                   key={r.id}
//                   onClick={() => setActiveFeaturedId(r.id)}
//                   className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
//                     isSelected
//                       ? "bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/20 translate-x-1 sm:translate-x-2"
//                       : "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/60"
//                   }`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <div
//                       className={`w-10 h-10 rounded-xl font-black text-xs flex items-center justify-center transition-colors ${
//                         isSelected
//                           ? "bg-white text-blue-600"
//                           : "bg-slate-200/80 text-slate-700"
//                       }`}
//                     >
//                       0{i + 1}
//                     </div>

//                     <div>
//                       <h4 className="font-black text-sm uppercase tracking-tight leading-tight">
//                         {r.client}
//                       </h4>
//                       <p
//                         className={`text-[10px] font-bold uppercase tracking-wider ${
//                           isSelected ? "text-blue-100" : "text-slate-500"
//                         }`}
//                       >
//                         {r.position}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <span
//                       className={`hidden sm:inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg ${
//                         isSelected
//                           ? "bg-blue-700 text-white"
//                           : "bg-slate-200/60 text-slate-600"
//                       }`}
//                     >
//                       {r.metric}
//                     </span>
//                     <ArrowUpRight
//                       size={16}
//                       className={`transition-transform duration-300 ${
//                         isSelected ? "rotate-45 text-white" : "text-slate-400"
//                       }`}
//                     />
//                   </div>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* --- Secondary Expandable Grid Layout ("Load More" feature for large quantities) --- */}
//         {showAllCards && (
//           <div className="mt-12 pt-12 border-t border-slate-200/80 animate-in fade-in duration-500">
//             <h3 className="text-xl font-black uppercase text-slate-900 tracking-tight mb-6">
//               All Client Testimonials ({filteredReviews.length})
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredReviews.map((review) => (
//                 <div
//                   key={review.id}
//                   className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl flex flex-col justify-between hover:border-blue-300 hover:bg-white hover:shadow-xl transition-all"
//                 >
//                   <div>
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex gap-0.5 text-amber-400">
//                         {[...Array(review.rating)].map((_, i) => (
//                           <Star key={i} size={12} className="fill-amber-400" />
//                         ))}
//                       </div>
//                       <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-slate-200/70 text-slate-700">
//                         {review.category}
//                       </span>
//                     </div>

//                     <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed mb-6">
//                       "{review.quote}"
//                     </p>
//                   </div>

//                   <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
//                     <div>
//                       <h4 className="font-black text-xs uppercase text-slate-900">
//                         {review.client}
//                       </h4>
//                       <p className="text-[10px] font-bold text-blue-600 uppercase">
//                         {review.position}
//                       </p>
//                     </div>

//                     <span className="text-[10px] font-black text-slate-500 uppercase bg-white border border-slate-200 px-2 py-1 rounded-md">
//                       {review.metric}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* View All Expander Toggle Button */}
//         <div className="text-center mt-8">
//           <button
//             onClick={() => setShowAllCards(!showAllCards)}
//             className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-900 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
//           >
//             <span>
//               {showAllCards
//                 ? "Collapse Grid"
//                 : `View All Grid Cards (${filteredReviews.length})`}
//             </span>
//             <ChevronDown
//               size={16}
//               className={`transition-transform duration-300 ${
//                 showAllCards ? "rotate-180" : ""
//               }`}
//             />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



// "use client";

// import React, { useState } from "react";
// import { Quote, Star, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

// const REVIEWS = [
//   {
//     id: 0,
//     quote:
//       "Working with ThinkSync Solutions was super easy. They listened to what I needed and turned my ideas into a really smooth, modern website. It honestly made my job a lot easier.",
//     client: "Ayush Gaur",
//     position: "Event Manager",
//     company: "Live Events Co.",
//     metric: "Smooth Delivery",
//     rating: 5,
//   },
//   {
//     id: 1,
//     quote:
//       "I wanted a site that looked clean and loaded fast, and that’s exactly what they delivered. The team kept me updated the whole time and finished earlier than I expected.",
//     client: "Lalit Singh Mehta",
//     position: "Architect",
//     positionShort: "Architecture",
//     metric: "Fast & Optimized",
//     rating: 5,
//   },
//   {
//     id: 2,
//     quote:
//       "I’m not very tech-savvy, but these guys explained everything simply and built a site my students love using. It feels smooth and professional without being complicated.",
//     client: "Dzine Tech Solution",
//     position: "Coaching Center Owner",
//     metric: "User Experience",
//     rating: 5,
//   },
//   {
//     id: 3,
//     quote:
//       "ThinkSync Solutions really got what I wanted. They created a website that’s not only beautiful but also super easy to manage. It’s been a great experience working with them.",
//     client: "Pulkit Goel",
//     position: "Exporter",
//     metric: "Easy to Manage",
//     rating: 5,
//   },
//   {
//     id: 4,
//     quote:
//       "I needed a website that could handle a lot of traffic and still look great. ThinkSync Solutions delivered exactly that, and they were great to work with throughout the process.",
//     client: "QCD Globals",
//     position: "Travel Agency",
//     metric: "Scalable & High Traffic",
//     rating: 5,
//   },
//   {
//     id: 5,
//     quote:
//       "ThinkSync Solutions took my vision and made it a reality. The App they built is not only visually appealing but also really easy to navigate. I couldn’t be happier.",
//     client: "Abhishek Singh Thakur",
//     position: "Fitness Center",
//     metric: "Engaging & Dynamic",
//     rating: 5,
//   },
// ];

// const Testimonials = () => {
//   const [activeId, setActiveId] = useState(0);

//   return (
//     <section
//       id="testimonials"
//       className="relative py-20 lg:py-28 bg-slate-50/50 overflow-hidden"
//     >
//       {/* Background Graphic Watermark */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-slate-200/40 select-none pointer-events-none -z-10 leading-none tracking-tighter">
//         VOICES
//       </div>

//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//           <div className="max-w-2xl">
//             <div className="flex items-center gap-3 mb-3">
//               <div className="flex flex-col gap-1">
//                 <span className="h-1 w-10 bg-blue-600 rounded-full" />
//                 <span className="h-1 w-5 bg-blue-600/30 rounded-full" />
//               </div>
//               <span className="text-slate-900 font-black tracking-[0.25em] text-xs uppercase">
//                 Testimonials
//               </span>
//             </div>

//             <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.88] uppercase">
//               Client <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">
//                 Feedback.
//               </span>
//             </h2>
//           </div>

//           <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl border border-slate-200/80 shadow-sm self-start md:self-auto">
//             <Sparkles className="text-blue-600" size={18} />
//             <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
//               100% Satisfaction Rate
//             </span>
//           </div>
//         </div>

//         {/* Reviews Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {REVIEWS.map((review) => {
//             const isActive = activeId === review.id;

//             return (
//               <div
//                 key={review.id}
//                 onClick={() => setActiveId(review.id)}
//                 className={`group cursor-pointer relative p-8 rounded-[2rem] transition-all duration-500 flex flex-col justify-between border ${
//                   isActive
//                     ? "bg-slate-950 text-white border-slate-800 shadow-2xl shadow-blue-900/20 md:-translate-y-2"
//                     : "bg-white text-slate-900 border-slate-200/80 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
//                 }`}
//               >
//                 {/* Background Glow Effect for Active Card */}
//                 {isActive && (
//                   <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 rounded-full blur-[60px] pointer-events-none" />
//                 )}

//                 <div>
//                   {/* Top Header: Rating & Quote Icon */}
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="flex gap-1">
//                       {[...Array(review.rating)].map((_, i) => (
//                         <Star
//                           key={i}
//                           size={14}
//                           className="text-amber-400 fill-amber-400"
//                         />
//                       ))}
//                     </div>

//                     <Quote
//                       size={28}
//                       className={`transition-colors ${
//                         isActive
//                           ? "text-blue-500 opacity-80"
//                           : "text-slate-300 group-hover:text-blue-500"
//                       }`}
//                     />
//                   </div>

//                   {/* Review Text */}
//                   <p
//                     className={`text-sm sm:text-base font-semibold leading-relaxed mb-8 ${
//                       isActive ? "text-slate-200" : "text-slate-600"
//                     }`}
//                   >
//                     "{review.quote}"
//                   </p>
//                 </div>

//                 {/* Footer Section */}
//                 <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-end justify-between">
//                   <div>
//                     <h4
//                       className={`font-black text-base uppercase tracking-tight ${
//                         isActive ? "text-white" : "text-slate-900"
//                       }`}
//                     >
//                       {review.client}
//                     </h4>
//                     <p
//                       className={`text-xs font-bold uppercase tracking-wider ${
//                         isActive ? "text-blue-400" : "text-blue-600"
//                       }`}
//                     >
//                       {review.position}
//                     </p>
//                   </div>

//                   {/* Highlight Metric Pill */}
//                   <div
//                     className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 ${
//                       isActive
//                         ? "bg-blue-600 text-white"
//                         : "bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600"
//                     }`}
//                   >
//                     <CheckCircle2 size={12} />
//                     <span>{review.metric}</span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom Banner */}
//         <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/20">
//           <div>
//             <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
//               Ready to build your next big idea?
//             </h3>
//             <p className="text-blue-100 text-sm font-medium">
//               Join our growing list of satisfied partners across tech, fitness, export, and education.
//             </p>
//           </div>

//           <a
//             href="#contact"
//             className="shrink-0 inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3.5 rounded-2xl font-black uppercase text-xs tracking-wider hover:bg-slate-100 transition-colors shadow-md"
//           >
//             <span>Start A Project</span>
//             <ArrowRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;