import React from "react";
import { RectangleHorizontal, RectangleVertical, Square } from "lucide-react";

const RATIOS = ["16:9", "1:1", "9:16"];

const AspectRatio = ({ value, onChange }) => {
  const iconMap = {
    "16:9": <RectangleHorizontal className="size-6" />,
    "1:1": <Square className="size-6" />,
    "9:16": <RectangleVertical className="size-6" />,
  };

  return (
    <div className="space-y-3 dark">
      <label className="block text-sm font-medium text-zinc-200">
        Aspect ratio
      </label>

      <div className="flex flex-wrap gap-2">
        {RATIOS.map((ratio) => {
          const selected = value === ratio;

          return (
            <button
              key={ratio}
              type="button"
              onClick={() => onChange(ratio)}
              className={`flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm transition border-white/10
                ${selected ? "bg-white/10" : "hover:bg-white/5"}
              `}>
              {iconMap[ratio]}
              <span className="tracking-widest">{ratio}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AspectRatio;
