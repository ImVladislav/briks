import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import dexscreener from "./ico_1.png";
import dexstools from "./ico_2.png";
import tg from "./ico_3.png";
import x from "./ico_4.png";


const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">BearbrickFan</h3>
            <p className="text-gray-400 text-sm">
              Exclusive meme coin uniting Bearbrick collectors on Solana.
            </p>
          </div>

          

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <div className="space-x-5 flex text-gray-400">
              <a href="https://x.com/BearBrickFanX"><img src={x} alt="x" className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" /></a>
              <a href="https://t.me/BearbrickFans"><img src={tg} alt="tg" className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" /></a>             
              <a href="https://dexscreener.com/"><img src={dexscreener} alt="dexscreener" className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" /></a>
              <a href="https://dextools.io/"><img src={dexstools} alt="dexstools" className="w-5 h-5 hover:text-purple-400 cursor-pointer transition-colors" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}

      </div>
    </footer>
  );
};

export default Footer;
