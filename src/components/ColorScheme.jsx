import React from "react";

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
const ColorScheme = ({ value, onChange }) => {
  return (
    <div className="space-y-3">
      <label htmlFor="" className="block text-sm font-medium text-zinc-200">
        ColorScheme
      </label>

      <div className="grid grid-cols-6 gap-3">
        {colorSchemes.map((scheme) => (
          <button
            key={scheme.id}
            onClick={() => onChange(scheme.id)}
            className={`relative rounded-lg transition-all ${value === scheme.id && "ring-2 ring-pink-500"}`}
            title={scheme.name}>
            <div className="flex h-10 rounded-lg overflow-hidden">
              {scheme.colors.map((color, i) => (
                <div
                  key={i}
                  className="flex-1"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>
      <p className="text-xs text-zinc-400">
        Selected: {colorSchemes.find((s) => s.id === value)?.name}
      </p>
    </div>
  );
};

export default ColorScheme;
