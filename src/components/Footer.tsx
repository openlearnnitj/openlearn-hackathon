"use client";

import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // navbar height
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black border-t border-yellow-500/20 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="OpenERA Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <h3 className="text-xl font-bold text-white">
                Open<span className="text-yellow-400">ERA</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              Pushing the boundaries of finance with artificial intelligence and innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/openlearn_nitj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label="X (formerly Twitter) link"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 hover:border-yellow-500/50 transition-all">
                  <RiTwitterXLine className="w-5 h-5" />
                </div>
              </a>
              <a 
                href="https://linkedin.com/company/openlearn-nitj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label="LinkedIn link"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 hover:border-yellow-500/50 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </div>
              </a>
              <a 
                href="https://instagram.com/openlearn.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label="Instagram link"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 hover:border-yellow-500/50 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About", href: "about" },
                { name: "Problem Statements", href: "problem-statements" },
                { name: "Timeline", href: "timeline" },
                { name: "Prizes", href: "prizes" }
              ].map((item) => (
                <li key={item.name}>
                  <button 
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center text-left cursor-pointer"
                  >
                    <span className="mr-2">→</span> {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-6 text-lg">More</h4>
            <ul className="space-y-3">
              {[
                { name: "Sponsors", href: "sponsors" },
                { name: "Team", href: "organizers" },
                { name: "FAQ", href: "faq" }
              ].map((item) => (
                <li key={item.name}>
                  <button 
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center text-left cursor-pointer"
                  >
                    <span className="mr-2">→</span> {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">info@openlearn.org.in</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">NIT Jalandhar, Punjab, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 OpenERA. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex space-x-6">
            <a 
              href="https://devfolio.co/code-of-conduct" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-yellow-400 text-sm transition-colors"
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
