import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  ArrowUpRight,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">BearbrickFan:</h3>
            <p className="text-gray-400 text-sm">
              exclusive meme coin uniting Bearbrick collectors on Solana.{" "}
            </p>
          </div>

          

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <div className="space-x-5 flex text-gray-400">
              <a href="https://x.com/i/flow/login"><Twitter className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" /></a>
              <a href="https://web.telegram.org"><Facebook className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 FiguresUrban. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
