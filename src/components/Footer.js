import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-800 to-gray-400 bg-clip-text text-transparent mb-4">
              THINKSYNC SOLUTIONS
            </div>
            <p className="text-gray-400 text-sm">
              Building the future of web development, one pixel at a time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/#services"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  Performance Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  Security Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Team ThinkSync Solutions. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  
