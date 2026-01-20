import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const handlePayment = async (plan) => {
    const { data } = await axios.post(
      "http://localhost:5000/api/payment/v1/create-payment",
      {
        plan,
        email: "user@email.com",
      },
    );

    // redirect to razorpay
    window.location.href = data.url;
  };
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-950 text-white font-sans">
      {/* HERO */}
      <section className="border-b border-dotted border-zinc-700">
        <div className="max-w-7xl mx-auto px-8 py-28 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-pink-400 tracking-widest uppercase mb-4">
              AI Thumbnail SaaS
            </p>
            <h1 className="text-6xl font-bold leading-tight mb-6">
              Create YouTube thumbnails that
              <span className="text-amber-400"> get clicks</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-10">
              Generate scroll-stopping YouTube thumbnails using AI. Designed for
              creators, marketers, and faceless channels.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => navigate("/generate")}
                className="px-10 py-4 bg-pink-600 hover:bg-pink-700 transition border border-dotted border-white">
                Start Free
              </button>
              <button className="px-10 py-4 border border-dotted border-white hover:bg-white/10 transition">
                View Examples
              </button>
            </div>
          </div>

          <div className=" p-6">
            <div className="hover:scale-105 transition-transform duration-500 h-90 bg-linear-to-br from-pink-600/20 to-amber-400/20 flex items-center justify-center rounded-sm text-zinc-400">
              Thumbnail Preview Area
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 border-b border-dotted border-zinc-700">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-16 text-center uppercase">
            Why creators love us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "AI Face Expressions",
              "High CTR Text Styles",
              "Background Removal",
              "Emotion Detection",
              "Trending Color Analysis",
              "Instant Download",
            ].map((feature) => (
              <div
                key={feature}
                className="border border-dotted border-zinc-700 p-8 hover:bg-white/5 cursor-pointer hover:scale-105 transition-transform duration-500">
                <h3 className="text-xl font-semibold mb-3 text-amber-400">
                  {feature}
                </h3>
                <p className="text-zinc-400 text-sm">
                  Optimized using YouTube psychology and proven
                  click-through-rate patterns.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 border-b border-dotted border-zinc-700 bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-16">How it works</h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              "Enter video title",
              "Select style",
              "Generate thumbnails",
              "Download & upload",
            ].map((step, i) => (
              <div
                key={step}
                className="border border-dotted border-zinc-700 p-8">
                <p className="text-pink-500 text-sm mb-2">STEP {i + 1}</p>
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
                <p className="text-zinc-400 text-sm">
                  Simple workflow designed for speed and scale.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="py-24 border-b border-dotted border-zinc-700">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12">Real thumbnail styles</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="border border-dotted border-zinc-700 h-56 bg-linear-to-br from-pink-500/20 to-amber-400/20"
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 border-b border-dotted border-zinc-700 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-16">Simple pricing</h2>

          {/* <div className="grid md:grid-cols-3 gap-10">
            {["Starter", "Creator", "Studio"].map((plan, i) => (
              <div
                key={plan}
                className="border border-dotted border-zinc-700 p-10">
                <h3 className="text-2xl font-semibold mb-4 text-amber-400">
                  {plan}
                </h3>
                <p className="text-5xl font-bold mb-6">
                  ${i === 0 ? 9 : i === 1 ? 19 : 49}
                </p>
                <ul className="space-y-3 text-zinc-400 mb-8">
                  <li>Unlimited thumbnails</li>
                  <li>HD export</li>
                  <li>Commercial rights</li>
                  <li>Fast generation</li>
                </ul>
                <button className="w-full py-3 bg-pink-600 hover:bg-pink-700 transition border border-dotted border-white">
                  Get Started
                </button>
              </div>
            ))}
          </div> */}
          <div className="flex gap-10 ">
            <button
              className="border rounded-md px-4"
              onClick={() => handlePayment("BASIC")}>
              Pay ₹899
            </button>

            <button
              className="border rounded-md px-4"
              onClick={() => handlePayment("PRO")}>
              Pay ₹1899
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-8 text-center border border-dotted border-zinc-700 py-24">
          <h2 className="text-5xl font-bold mb-6">
            Your next viral thumbnail is one click away
          </h2>
          <p className="text-zinc-400 mb-10">
            Join thousands of creators growing faster with AI thumbnails.
          </p>
          <button
            onClick={() => navigate("/generate")}
            className="px-14 py-5 bg-amber-400 text-black font-semibold hover:bg-amber-300 transition border border-dotted border-black">
            Start Generating Now
          </button>
        </div>
      </section>
    </div>
  );
}
