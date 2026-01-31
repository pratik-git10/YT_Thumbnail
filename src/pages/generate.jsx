import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AspectRatio from "../components/AspectRatio";
import StyleSelector from "../components/StyleSelector";
import ColorScheme from "../components/ColorScheme";
import PreviewPanel from "../components/Previewpanel";
import { dummyThumbnails } from "../assets/assets/assets";

const colorSchemes = [
  { id: "vibrant", name: "Vibrant", colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"] },
  { id: "sunset", name: "Sunset", colors: ["#FF8C42", "#FF3C38", "#A23B72"] },
  { id: "ocean", name: "Ocean", colors: ["#0077B6", "#00B4D8", "#90E0EF"] },
  { id: "forest", name: "Forest", colors: ["#2D6A4F", "#40916C", "#95D5B2"] },
  {
    id: "purple",
    name: "Purple Dream",
    colors: ["#7B2CBF", "#9D4EDD", "#C77DFF"],
  },
  {
    id: "monochrome",
    name: "Monochrome",
    colors: ["#212529", "#495057", "#ADB5BD"],
  },
  { id: "neon", name: "Neon", colors: ["#FF00FF", "#00FFFF", "#FFFF00"] },
  { id: "pastel", name: "Pastel", colors: ["#FFB5A7", "#FCD5CE", "#F8EDEB"] },
];
const Generate = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [details, setdetails] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setloading] = useState(false);
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [colorScheme, setColorScheme] = useState(colorSchemes[0].id);
  const [style, setStyle] = useState("Bold & Graphic");
  const [styledropDown, setStyleDropDown] = useState(false);

  const handleGenerate = async () => {};

  const fetchThumbnail = async () => {
    if (id) {
      const dummy = dummyThumbnails.find((thumbnail) => thumbnail._id === id);
      setThumbnail(dummy);
      setdetails(dummy.user_prompt);
      setTitle(dummy.title);
      setColorScheme(dummy.color_scheme);
      setAspectRatio(dummy.aspect_ratio);
      setStyle(dummy.style);
      setloading(false);
    }
  };

  useEffect(() => {
    if (id) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchThumbnail();
    }
  }, [id]);

  return (
    <div>
      <div className="fixed inset-0 -z-1 pointer-events-none">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-245 h-115 bg-linear-to-tr from-indigo-800/35 to-transparent rounded-full blur-3xl" />
        <div className="absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-indigo-700/35 to-transparent rounded-full blur-2xl" />
      </div>
      <div className="pt-24 min-h-screen">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 lg:pb-8">
          <div className="grid lg:grid-cols-[400px_1fr] gap-8">
            {/* Left */}
            <div className={`space-y-6 ${id && "pointer-events-none"}`}>
              <div className="p-6 rounded-2xl bg-white/8 border border-white/12 shadow-xl space-y-6  ">
                <div>
                  <h2 className="text-xl font-bold text-zinc-100">
                    Create Your Thumbnail
                  </h2>
                  <p className="text-sm text-zinc-400">
                    Lets build a Thumbnail using our advanced AI model
                  </p>
                </div>

                <div className="space-y-5">
                  {/* title */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium" htmlFor="">
                      Title
                    </label>
                    <input
                      type="text"
                      value={title}
                      placeholder="Add your title"
                      onChange={(e) => setTitle(e.target.value)}
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg border border-white/12 bg-black/20 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus-within:ring-neutral-500 transition transform duration-200 ease-in-out"
                    />
                    <div className="flex justify-end">
                      <span className="text-xs text-zinc-400">
                        {title.length}/100
                      </span>
                    </div>
                  </div>

                  {/* aspectration */}
                  <AspectRatio value={aspectRatio} onChange={setAspectRatio} />
                  <div className="space-y-2"></div>
                  {/* styleselector */}
                  <StyleSelector
                    value={style}
                    onChange={setStyle}
                    isOpen={styledropDown}
                    setIsOpen={setStyleDropDown}
                  />
                  {/* colorscheme */}
                  <ColorScheme value={colorScheme} onChange={setColorScheme} />
                  {/* details */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Additional Prompts{" "}
                      <span className="text-zinc-400 text-xs">(optional)</span>
                    </label>
                    <textarea
                      value={details}
                      onChange={(e) => setdetails(e.target.value)}
                      rows={3}
                      placeholder="Add prompt according to your needs.. "
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/6 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 resize-none"
                    />
                  </div>
                </div>

                {!id && (
                  <button
                    onClick={handleGenerate}
                    className="text-[15px] w-full  py-3.5 rounded-xl font-medium active:scale-95 ease-in-out duration-200 border disabled:cursor-not-allowed  transition">
                    {loading ? "Generating..." : "Generate Thumbnail"}
                  </button>
                )}
              </div>
            </div>
            {/* right */}
            <div className="">
              <div className="p-6 rounded-2xl bg-white/8 border border-white/10 shadow-xl">
                <h2 className="text-lg font-semibold text-zinc-100 mb-4">
                  Thumbnails Preview
                </h2>
                <PreviewPanel
                  thumbnail={thumbnail}
                  isLoading={loading}
                  aspectRatio={aspectRatio}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Generate;
