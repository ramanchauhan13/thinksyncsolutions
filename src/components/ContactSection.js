import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let&rsquo;s Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your vision into digital reality? Get in touch
            with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 order-2 md:order-1">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Email</h4>
                <p className="text-gray-400">
                  <a
                    href="mailto:thinksyncsolutions@gmail.com"
                    className="hover:text-cyan-400"
                  >
                    thinksyncsolutions@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Phone</h4>
                <p className="text-gray-400 space-y-1">
                  <a
                    href="tel:+918979937257"
                    className="block hover:text-cyan-400"
                  >
                    +91 8979937257
                  </a>
                  <a
                    href="tel:+917351667526"
                    className="block hover:text-cyan-400"
                  >
                    +91 7351667526
                  </a>
                  <a
                    href="tel:+919759862839"
                    className="block hover:text-cyan-400"
                  >
                    +91 9759862839
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Location</h4>
                <p className="text-gray-400">Moradabad</p>
              </div>
            </div>

            <div className="relative w-full h-[300px] flex justify-center rounded-lg mt-12 overflow-hidden shadow-lg">
              {/* Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1747.0148562137992!2d78.73795849934214!3d28.867734272121826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390aff00260459d3%3A0x63dbfe6c8f1c24fd!2sThinkSync%20Solutions!5e0!3m2!1sen!2sin!4v1755026287554!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gray-900/30 backdrop-blur-xl border border-gray-800 order-1 md:order-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = form[0].value.trim();
                const email = form[1].value.trim();
                const subject = form[2].value.trim();
                const message = form[3].value.trim();

                if (!name || !email || !subject || !message) {
                  alert("❌ Please fill all fields before submitting.");
                  return;
                }
                // alert("✅ Your message has been submitted!");
                e.target.submit(); // manually submit after alert
              }}
              className="space-y-6"
              action="https://formsubmit.co/a33783d29c80203e2e4834f0acb6e567"
              method="POST"
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
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white"
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
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white"
                    placeholder="your@email.com"
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
                  minLength={10}
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white"
                  placeholder="Enter 10-digit mobile number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  name="message"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
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
