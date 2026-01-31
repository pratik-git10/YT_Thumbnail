import { Github, Instagram, Twitter, X } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                T
              </div>
              <span className="text-white font-bold">ThumbGen.AI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building the future of content creation. Helping creators save
              time and gain views with ethical AI.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Showcase
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>&copy; 2026 ThumbGen AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {/* Social placeholders */}
            <Link
              to={"#"}
              className="hover:text-white transform ease-in-out duration-300">
              <Twitter />
            </Link>
            <Link
              to={"#"}
              className="hover:text-white transform ease-in-out duration-300">
              <Github />
            </Link>
            <Link
              to={"#"}
              className="hover:text-white transform ease-in-out duration-300">
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
