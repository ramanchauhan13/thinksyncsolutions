import { Target, Eye, HeartHandshake, Lightbulb, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="px-6 py-22 max-w-7xl mx-auto space-y-20 relative">
      {/* Intro */}
      <div
        data-aos="fade-down"
        data-aos-duration="500"
        className="text-center space-y-6"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-800 to-gray-400 bg-clip-text text-transparent">
          About ThinkSync Solutions
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          We specialize in building{" "}
          <span className="font-medium text-white">scalable, secure, and future-ready</span>  
          digital solutions. From sleek websites to enterprise systems, our mission is to  
          help businesses grow with innovation at the core.
        </p>
      </div>

      {/* Mission & Vision */}
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="grid md:grid-cols-2 gap-10"
      >
        {[
          {
            icon: Target,
            title: "Our Mission",
            desc: "Empower businesses with cutting-edge digital solutions that simplify operations, boost efficiency, and fuel growth — from startups to global enterprises.",
            color: "from-cyan-400 to-blue-500",
          },
          {
            icon: Eye,
            title: "Our Vision",
            desc: "To be a global leader in digital transformation, known for creativity, technical expertise, and a human-first approach to technology.",
            color: "from-purple-400 to-pink-500",
          },
        ].map(({ icon: Icon, title, desc, color }, i) => (
          <div
            key={i}
            className="group relative p-8 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-xl transition-all duration-500 hover:border-gray-600 hover:scale-105"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
            />
            <div className="relative z-10">
              <Icon className="w-10 h-10 mb-4 text-blue-400 group-hover:rotate-6 transition-transform duration-500" />
              <h2 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                {title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Core Values */}
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="relative"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
          Our Core Values
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: Lightbulb, title: "Innovation", desc: "We embrace new technologies to deliver modern solutions.", color: "from-yellow-400 to-orange-500" },
            { icon: ShieldCheck, title: "Integrity", desc: "Honesty and transparency guide every project we take.", color: "from-green-400 to-emerald-500" },
            { icon: Users, title: "Collaboration", desc: "We believe in teamwork and building strong partnerships.", color: "from-blue-400 to-indigo-500" },
            { icon: HeartHandshake, title: "Customer Focus", desc: "Our clients’ success defines our success.", color: "from-pink-400 to-rose-500" },
            { icon: ShieldCheck, title: "Quality", desc: "Every project undergoes rigorous testing and quality checks.", color: "from-purple-400 to-violet-500" },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="group relative p-6 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-xl transition-all duration-500 hover:border-gray-600 hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
              />
              <div className="relative z-10">
                <Icon className="w-8 h-8 mb-4 text-blue-400 group-hover:rotate-6 transition-transform duration-500" />
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="text-center group relative p-12 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-xl transition-all duration-500 hover:border-gray-600 hover:scale-105"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-10 rounded-2xl group-hover:opacity-20 transition" />
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Let’s Build the Future Together 🚀
          </h3>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-300">
            Whether you need a new website, mobile app, or enterprise platform,{" "}
            <span className="font-semibold text-white">ThinkSync Solutions</span>{" "}
            is here to bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
