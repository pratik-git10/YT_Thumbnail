import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Zap,
  TrendingUp,
  Clock,
  Star,
  ArrowRight,
  Play,
  Check,
} from "lucide-react";

export default function ThumbnailLandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Generation",
      description:
        "Create stunning thumbnails in seconds with advanced AI that understands YouTube trends",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Click-Through Optimization",
      description:
        "Thumbnails designed to maximize engagement and drive more views to your content",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Generate professional thumbnails 10x faster than traditional design tools",
    },
  ];

  const stats = [
    { number: "2M+", label: "Thumbnails Created" },
    { number: "150K+", label: "Active Creators" },
    { number: "45%", label: "Avg. CTR Increase" },
    { number: "< 30s", label: "Average Creation Time" },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      features: [
        "50 thumbnails per month",
        "AI-powered generation",
        "1080p resolution",
        "Basic templates",
        "Standard support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: [
        "Unlimited thumbnails",
        "Advanced AI models",
        "4K resolution",
        "Premium templates",
        "Custom branding",
        "Priority support",
        "A/B testing tools",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom AI training",
        "API access",
        "White-label options",
        "Team collaboration",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">
                Used by 150,000+ creators worldwide
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-linear-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              Turn Clicks Into Views
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-pink-500 to-purple-500">
                With AI Thumbnails
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Create scroll-stopping YouTube thumbnails in seconds. Our AI
              analyzes millions of high-performing thumbnails to make yours
              irresistible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Start Creating Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="transition-all duration-500 hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-4xl sm:text-5xl font-black bg-linear-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Everything You Need to{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                Dominate YouTube
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Powerful features that make thumbnail creation effortless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                className={`group p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeFeature === index
                    ? "bg-linear-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50 scale-105"
                    : "bg-white/5 border-white/10 hover:border-purple-500/30"
                }`}>
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    activeFeature === index
                      ? "bg-linear-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
                      : "bg-white/10"
                  }`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              See The{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-pink-500">
                Magic
              </span>{" "}
              In Action
            </h2>
            <p className="text-xl text-gray-400">
              Real thumbnails created by our AI in under 30 seconds
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-br from-purple-600/80 to-pink-600/80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Star className="w-8 h-8" />
                    </div>
                    <p className="font-bold">Thumbnail {item}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="px-6 py-3 bg-white text-black rounded-lg font-bold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Simple,{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                Transparent
              </span>{" "}
              Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Choose the perfect plan for your channel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${
                  plan.popular
                    ? "bg-linear-to-br from-purple-500/20 to-pink-500/20 border-purple-500 shadow-2xl shadow-purple-500/30"
                    : "bg-white/5 border-white/10"
                }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-linear-to-r from-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/50"
                      : "bg-white/10 hover:bg-white/20"
                  }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 rounded-3xl bg-linear-to-r from-purple-600 to-pink-600 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl font-black mb-6">
                Ready to 10x Your Click-Through Rate?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Join 150,000+ creators who've transformed their channels with
                AI-powered thumbnails
              </p>
              <button className="px-10 py-5 bg-white text-purple-600 rounded-xl font-black text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Free Trial - No Credit Card Required
              </button>
              <p className="mt-4 text-sm text-white/70">
                7-day free trial • Cancel anytime • No commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
