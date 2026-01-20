import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Loader } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/v1/contact",
        formData,
      );

      toast.success(data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* HEADER */}
      <section className="border-b border-dotted border-zinc-700">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <p className="text-pink-400 tracking-widest uppercase mb-4">
            Contact
          </p>
          <h1 className="text-5xl font-bold mb-6">
            Let’s talk about your
            <span className="text-amber-400"> thumbnails</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl">
            Have a question, feature request, or business inquiry? Fill out the
            form below and our team will get back to you.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16">
          {/* LEFT INFO */}
          <div className="space-y-10">
            <div className="border border-dotted border-zinc-700 p-8">
              <h3 className="text-xl font-semibold text-amber-400 mb-2">
                Email
              </h3>
              <p className="text-zinc-400">support@thumbnailai.com</p>
            </div>

            <div className="border border-dotted border-zinc-700 p-8">
              <h3 className="text-xl font-semibold text-amber-400 mb-2">
                Business
              </h3>
              <p className="text-zinc-400">partnerships@thumbnailai.com</p>
            </div>

            <div className="border border-dotted border-zinc-700 p-8">
              <h3 className="text-xl font-semibold text-amber-400 mb-2">
                Social
              </h3>
              <p className="text-zinc-400">Twitter • Discord • YouTube</p>
            </div>
          </div>
          <div className="border border-dotted border-zinc-700 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm text-zinc-400">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-dotted border-zinc-600 px-4 py-3 focus:outline-none focus:border-pink-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-400">
                  Email
                </label>
                <input
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full bg-transparent border border-dotted border-zinc-600 px-4 py-3 focus:outline-none focus:border-pink-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-zinc-400">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-dotted border-zinc-600 px-4 py-3 focus:outline-none focus:border-pink-500"
                  placeholder="Tell us what you need..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-pink-600 hover:bg-pink-700 transition border border-dotted border-white">
                {loading ? "Loading..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="border-t border-dotted border-zinc-700 py-20">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold mb-4">
            Want better click‑through rates?
          </h2>
          <p className="text-zinc-400 mb-8">
            Start generating high‑CTR thumbnails today.
          </p>
          <button
            onClick={() => navigate("/generate")}
            className="px-12 py-4 bg-amber-400 text-black font-semibold border border-dotted border-black hover:bg-amber-300 transition">
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
