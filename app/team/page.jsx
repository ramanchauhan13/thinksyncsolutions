import React from "react";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

const TeamPage = () => {
  const team = [
    {
      name: "Raman Chauhan",
      role: "Full Stack Architect",
      specialty: "MERN Stack and Scalable Solutions",
      bio: "Expert in building scalable MERN stack applications with seamless user interfaces and robust backend APIs.",
      bioLink: "https://raman.thinksync.solutions",
      linkedIn: "https://www.linkedin.com/in/ramanchauhan13/",
      github: "https://github.com/ramanchauhan13",
    },
    {
      name: "Vaibhav Tyagi",
      role: "Full Stack Architect",
      specialty: "Cross Platform App Development",
      bio: "Specializes in building responsive mobile-first web and native apps using React, React Native, and MongoDB.",
      bioLink: "https://vaibhav.thinksync.solutions",
      linkedIn: "https://www.linkedin.com/in/vaibhavtyagi01",
      github: "https://github.com/CyberDemon2001",
    },
    {
      name: "Umesh Singh Mehta",
      role: "Full-Stack Engineer",
      specialty: "TypeScript & UI/UX Design",
      bio: "Delivers high-performance full-stack solutions with a focus on TypeScript and modern web development practices.",
      bioLink: "https://portfolio-khaki-beta-26.vercel.app/",
      linkedIn:
        "https://www.linkedin.com/in/umesh-singh-mehta-93819a194?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bo8t991uiRN2PnkFDzG655w%3D%3D",
      github: "https://github.com/UmeshSingh2000",
    },
    {
      name: "Vineet Kumar Rajput",
      role: "Java Developer",
      specialty: "Spring Boot and dynamic frontends using Angular",
      bio: "Full-stack Java developer focused on designing secure, high-performance backend systems and seamless Angular user experiences.",
      bioLink: "https://portfolio-v2-lac-seven.vercel.app/",
      linkedIn:
        "https://www.linkedin.com/in/vineet-javadev?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMzqK6ymtQY2iBLWEwi6IYQ%3D%3D",
      github: "https://github.com/vineet-javadev",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Texture Layer */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-26">
        {/* Header: Massive Scale */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-blue-600" />
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">
              The Collective
            </span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter uppercase mb-12">
            HUMAN <br /> <span className="text-blue-600">ENGINE.</span>
          </h1>
          <p className="text-2xl text-slate-400 font-medium max-w-2xl leading-tight italic">
            "A technical team synchronized by a single goal: building software
            that defines the future of your industry."
          </p>
        </div>

        {/* Team List: High Density / No Bento */}
        <div className="border-t border-slate-100">
          {team.map((member, i) => (
            <div
              key={i}
              className="group border-b border-slate-100 py-16 flex flex-col md:grid md:grid-cols-12 gap-8 transition-all duration-500 hover:bg-blue-50/30 px-4 md:px-8"
            >
              {/* Role & Index */}
              <div className="md:col-span-3">
                <span className="block text-blue-600 font-mono text-xs font-black mb-4 uppercase tracking-[0.3em]">
                  Personnel // 0{i + 1}
                </span>
                <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                  {member.role}
                </p>
              </div>

              {/* Name & Specialty */}
              <div className="md:col-span-5">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h2>
                <div className="inline-block px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-sm">
                  {member.specialty}
                </div>
              </div>

              {/* Bio & Socials */}
              <div className="md:col-span-4 flex flex-col justify-between">
                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                  {member.bio}
                </p>
                <div className="flex gap-6 items-center">
                  <div className="flex gap-6 items-center">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-blue-600 transition-colors"
                    >
                      <Github size={18} />
                    </a>

                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                  <div className="ml-auto">
                    <a
                      href={member.bioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-black text-white px-6 py-3 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all"
                    >
                      Full Bio <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the Team Section */}
        {/* <section className="mt-40 grid md:grid-cols-2 gap-px bg-slate-200 border-2 border-slate-200 rounded-[2rem] overflow-hidden">
          <div className="bg-white p-12 md:p-20">
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">
              We are <br /> always scouting.
            </h3>
            <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
              Are you an engineer or designer who thrives in high-sync
              environments?
            </p>
          </div>
          <div className="bg-slate-50 p-12 md:p-20 flex flex-col justify-center items-start">
            <p className="text-slate-400 mb-8 uppercase text-xs font-bold tracking-[0.2em]">
              Open roles: 04
            </p>
            <button className="group flex items-center gap-4 bg-blue-600 text-white px-10 py-6 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-black transition-all">
              View Openings
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </section> */}
      </main>

      {/* Footer Branding */}
      {/* <footer className="py-20 text-center border-t border-slate-50">
        <div className="text-[12vw] font-black text-slate-50 select-none leading-none tracking-tighter">
          THINKSYNC.SYSTEMS
        </div>
      </footer> */}
    </div>
  );
};

export default TeamPage;

// import React from 'react';
// import { Github, Twitter, Linkedin, ArrowUpRight, Plus } from 'lucide-react';

// const TeamPage = () => {
//   const team = [
//     {
//       name: "Alex River",
//       role: "Lead Systems Architect",
//       specialty: "Cloud Infrastructure / Go",
//       bio: "12+ years engineering high-load distributed systems for fintech leaders."
//     },
//     {
//       name: "Sarah Chen",
//       role: "Head of Product Design",
//       specialty: "UI/UX / Interaction Design",
//       bio: "Crafting human-centric interfaces that bridge the gap between complex logic and users."
//     },
//     {
//       name: "Marcus Vane",
//       role: "Senior Full-Stack Engineer",
//       specialty: "MERN Stack / Web3",
//       bio: "Specialist in real-time data synchronization and secure API architecture."
//     },
//     {
//       name: "Elena Rossi",
//       role: "DevOps & Security",
//       specialty: "Cybersecurity / Kubernetes",
//       bio: "Hardening production environments and ensuring 99.9% uptime for global scale."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] font-sans selection:bg-blue-600 selection:text-white">
//       {/* Noise Overlay */}
//       <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
//            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/svg%3E")` }}>
//       </div>

//       <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">

//         {/* Header: Editorial Style */}
//         <header className="mb-32">
//           <div className="flex items-center gap-4 mb-12">
//             <span className="flex h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
//             <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px]">The Collective</span>
//           </div>

//           <h1 className="text-7xl md:text-[11rem] font-black leading-[0.75] tracking-tighter uppercase mb-16">
//             HUMAN <br />
//             <span className="relative inline-block hover:italic transition-all duration-300">
//               ENGINE
//               <span className="absolute -right-12 top-0 text-blue-600 text-4xl hidden md:block">®</span>
//             </span>
//           </h1>

//           <p className="text-2xl md:text-3xl text-slate-500 font-light max-w-3xl leading-tight">
//             A technical team synchronized by a single goal: building software that <span className="text-black font-semibold">defines the future</span> of your industry.
//           </p>
//         </header>

//         {/* Team List: Interactive Table Style */}
//         <section className="border-t-2 border-black">
//           {team.map((member, i) => (
//             <div key={i} className="group relative border-b border-slate-200 py-12 md:py-20 flex flex-col md:grid md:grid-cols-12 gap-8 transition-all duration-700 hover:px-6 overflow-hidden">

//               {/* Background Slide Effect */}
//               <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />

//               {/* Personnel ID */}
//               <div className="md:col-span-2">
//                 <span className="block font-mono text-xs font-bold mb-4 uppercase tracking-widest group-hover:text-blue-200 text-slate-400 transition-colors">
//                   P-{i + 1} // 0{i + 1}
//                 </span>
//               </div>

//               {/* Name & Title */}
//               <div className="md:col-span-5">
//                 <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 group-hover:text-white transition-colors duration-300">
//                   {member.name}
//                 </h2>
//                 <p className="text-blue-600 font-bold uppercase tracking-widest text-[10px] group-hover:text-blue-100 transition-colors">
//                   {member.role}
//                 </p>
//               </div>

//               {/* Description & Socials */}
//               <div className="md:col-span-5 flex flex-col justify-between">
//                 <div>
//                     <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-slate-100 rounded-full group-hover:bg-blue-500 transition-colors">
//                         <Plus size={10} className="text-blue-600 group-hover:text-white" />
//                         <span className="text-[10px] font-bold uppercase tracking-tighter group-hover:text-white">{member.specialty}</span>
//                     </div>
//                     <p className="text-slate-500 text-lg font-medium leading-snug mb-12 group-hover:text-white transition-colors duration-300">
//                         {member.bio}
//                     </p>
//                 </div>

//                 <div className="flex gap-8 items-center">
//                   <div className="flex gap-4">
//                     <Github size={20} className="text-slate-400 group-hover:text-white hover:scale-110 cursor-pointer transition-all" />
//                     <Linkedin size={20} className="text-slate-400 group-hover:text-white hover:scale-110 cursor-pointer transition-all" />
//                   </div>
//                   <button className="ml-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-black text-white px-6 py-3 rounded-full group-hover:bg-white group-hover:text-blue-600 transition-all">
//                     Full Bio <ArrowUpRight size={14} />
//                   </button>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </section>

//         {/* Join CTA: Modern Brutalist */}
//         <section className="mt-40 grid md:grid-cols-2 gap-px bg-slate-200 border-2 border-slate-200 rounded-[2rem] overflow-hidden">
//             <div className="bg-white p-12 md:p-20">
//                 <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">We are <br/> always scouting.</h3>
//                 <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
//                     Are you an engineer or designer who thrives in high-sync environments?
//                 </p>
//             </div>
//             <div className="bg-slate-50 p-12 md:p-20 flex flex-col justify-center items-start">
//                 <p className="text-slate-400 mb-8 uppercase text-xs font-bold tracking-[0.2em]">Open roles: 04</p>
//                 <button className="group flex items-center gap-4 bg-blue-600 text-white px-10 py-6 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-black transition-all">
//                     View Openings
//                     <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                 </button>
//             </div>
//         </section>

//       </main>

//       {/* Footer Branding */}
//       <footer className="py-24 px-6 overflow-hidden">
//         <div className="text-[18vw] font-black text-slate-100 select-none leading-none tracking-tighter whitespace-nowrap animate-pulse">
//           THINKSYNC.SYS
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default TeamPage;
