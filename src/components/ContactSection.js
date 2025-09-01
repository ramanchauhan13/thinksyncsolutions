import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 relative bg-[url('/back.png')] bg-cover bg-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold pb-2 mb-4 bg-gradient-to-r from-blue-500 via-blue-700 to-gray-400 bg-clip-text text-transparent">
            Let&rsquo;s Build Something Amazing
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to transform your vision into digital reality? Get in touch
            with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Email</h4>
                <a
                  href="mailto:team.thinksync.solutions@gmail.com"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  team.thinksync.solutions@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Phone</h4>
                <div className="text-gray-300 space-y-1">
                  <a href="tel:+918979937257" className="block hover:text-cyan-400">
                    +91 8979937257
                  </a>
                  <a href="tel:+917351667526" className="block hover:text-cyan-400">
                    +91 7351667526
                  </a>
                  <a href="tel:+919759862839" className="block hover:text-cyan-400">
                    +91 9759862839
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Location</h4>
                <p className="text-gray-300">Himgiri Colony, Moradabad</p>
              </div>
            </div>

            {/* Map */}
            <div className="relative w-full h-[300px] rounded-lg mt-12 overflow-hidden border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1747.0148562137992!2d78.73795849934214!3d28.867734272121826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390aff00260459d3%3A0x63dbfe6c8f1c24fd!2sThinkSync%20Solutions!5e0!3m2!1sen!2sin!4v1755026287554!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-xl bg-gray-900/70 border border-gray-800 order-1 md:order-2">
            <form
              action="https://formsubmit.co/70b9e09e5315e3868137b61b6d9f088e"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://www.thinksync.solutions/thank-you"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mobile
                </label>
                <input
                  type="tel"
                  name="phone"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  name="message"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-white resize-none transition"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
