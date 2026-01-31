import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  PlayCircle,
  Zap,
  BarChart3,
  Image as ImageIcon,
  Users,
  ChevronDown,
  ArrowRight,
  Youtube,
  Facebook,
  Twitch,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

// 2. Hero Component
const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden bg-[#18181b]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-semibold tracking-wide text-blue-700 uppercase bg-blue-50 rounded-full">
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
          v2.0 is live: Now with A/B Testing
        </motion.div>

        <h1 className="max-w-4xl mx-auto mb-6 text-white text-5xl font-extrabold tracking-tight md:text-7xl">
          Generate viral thumbnails <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-pink-800">
            without opening Photoshop.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mb-10 text-lg text-neutral-500 leading-relaxed">
          The AI trained on 1M+ viral videos. Increase your CTR by up to 200%
          with thumbnails optimized for the YouTube algorithm.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-16">
          <Link
            to={"/generate"}
            className="flex items-center justify-center gap-2 px-8 py-4 text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-md shadow-slate-200">
            Start Creating for Free
            <ArrowRight size={18} />
          </Link>
          <button className="flex items-center justify-center gap-2 px-8 py-4 text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
            <PlayCircle size={18} />
            View Demo
          </button>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-5xl mx-auto mt-12">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-100 to-indigo-100 rounded-2xl blur opacity-30"></div>
          <div className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 aspect-video flex items-center justify-center">
            {/* Simulation of Interface */}
            <div className="text-slate-500 text-sm">
              [Application Interface Demo Video Placeholder]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Social Proof Component
const brands = [
  { name: "YouTube", logo: <Youtube size={25} /> },
  { name: "Twitch", logo: <Twitch size={25} /> },
  { name: "Meta", logo: <Facebook size={25} /> },
  { name: "Instagram", logo: <Instagram size={25} /> },
];

const SocialProof = () => {
  return (
    <section className="py-10 border-y border-neutral-700">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-semibold mb-6">
          TRUSTED BY 10,000+ CREATORS FROM
        </p>

        <div className="marquee">
          <div className="marquee-track opacity-60 grayscale">
            {/* Repeat THREE TIMES */}
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <span key={i} className="marquee-item text-slate-400">
                {brand.logo}
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Features Grid Component
const Features = () => {
  const features = [
    {
      title: "Face Zoom & Enhance",
      desc: "Our AI automatically detects faces and enhances emotions to drive clicks.",
      icon: <Users className="text-blue-600" size={24} />,
    },
    {
      title: "Legibility Check",
      desc: "Instant contrast analysis ensures your text pops on mobile screens.",
      icon: <Zap className="text-amber-500" size={24} />,
    },
    {
      title: "Trend Analysis",
      desc: "Real-time suggestion engine based on what's trending in your niche.",
      icon: <BarChart3 className="text-emerald-500" size={24} />,
    },
    {
      title: "Brand Consistency",
      desc: "Lock your fonts, colors, and assets. The AI builds around your brand kit.",
      icon: <ImageIcon className="text-purple-500" size={24} />,
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#18181b]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Optimized for human psychology
          </h2>
          <p className="text-slate-600 text-lg">
            We don't just generate images. We generate clicks based on 5 years
            of CTR data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-100 bg-neutral-900 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Pricing Component
const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-[#18181b]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Simple, transparent pricing
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={` font-medium ${!isAnnual ? " text-lg" : "text-slate-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-slate-500 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Toggle pricing period">
              <motion.div
                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-sm"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className={`font-medium ${isAnnual ? "text-lg" : "text-slate-500"}`}>
              Yearly{" "}
              <span className="text-green-600 text-xs font-bold bg-green-100 px-2 py-0.5 rounded-full ml-1">
                -20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="p-8 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Creator
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              For hobbyists and new channels.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">
                ${isAnnual ? "12" : "15"}
              </span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "50 Thumbnails/mo",
                "Basic Templates",
                "Standard Resolution",
                "Personal License",
              ].map((feat, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-600">
                  <Check size={16} className="text-blue-600" /> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200">
              Start Free Trial
            </button>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="p-8 bg-slate-900 rounded-2xl shadow-xl relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Pro</h3>
            <p className="text-slate-400 text-sm mb-6">
              For growing channels & serious creators.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">
                ${isAnnual ? "29" : "39"}
              </span>
              <span className="text-slate-400">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Unlimited Thumbnails",
                "Premium Assets",
                "A/B Testing Tools",
                "4K Export",
                "Brand Kit",
              ].map((feat, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-300">
                  <Check size={16} className="text-blue-400" /> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-lg shadow-blue-900/20">
              Get Started
            </button>
          </div>

          {/* Agency Plan */}
          <div className="p-8 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Agency
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              For production teams and managers.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">
                ${isAnnual ? "79" : "99"}
              </span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Multi-seat Access",
                "API Access",
                "Dedicated Support",
                "Custom Models",
                "Commercial License",
              ].map((feat, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-600">
                  <Check size={16} className="text-blue-600" /> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// 6. FAQ Component
const FAQ = () => {
  const faqs = [
    {
      q: "Can I use my own images?",
      a: "Yes. You can upload your own face or product shots. The AI will seamlessly blend them into the generated backgrounds.",
    },
    {
      q: "What happens to my unused credits?",
      a: "On the Pro plan, unused credits roll over to the next month for up to 90 days.",
    },
    {
      q: "Is this copyright free?",
      a: "Yes. All assets generated are royalty-free and safe for monetization on YouTube.",
    },
  ];

  return (
    <section className="py-24 bg-[#18181b]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-neutral-600 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-black/40  transition-colors">
                  <span className="font-medium ">{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown size={20} className="text-slate-500" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-zinc-300 leading-relaxed bg-black/40">
                  {faq.a}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#18181b] font-sans selection:bg-blue-100 selection:text-blue-900">
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Pricing />
        <FAQ />
      </main>
    </div>
  );
};

export default LandingPage;
