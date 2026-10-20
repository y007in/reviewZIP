"use client";

import { useId } from "react";

export interface PillOption {
  value: string;
  label: string;
}

interface PillToggleGroupProps {
  options: PillOption[];
  mode?: "single" | "multi";
  value: string[];
  onChange: (next: string[]) => void;
  labelledBy?: string;
  name?: string;
  className?: string;
}

const PILL_LABEL_CLASS =
  "inline-block cursor-pointer select-none rounded-full border px-4 py-1.5 text-[14px] font-semibold " +
  "border-line bg-card text-ink-soft transition-colors " +
  "peer-checked:border-accent peer-checked:bg-accent-dim peer-checked:text-accent "



export function PillToggleGroup({
  options,
  mode = "single",
  value,
  onChange,
  labelledBy,
  name,
  className,
}: PillToggleGroupProps) {
  const autoId = useId();
  const groupName = name ?? autoId;

  function handleSingleChange(optionValue: string) {
    onChange([optionValue]);
  }

  function handleMultiChange(optionValue: string, checked: boolean) {
    onChange(checked ? [...value, optionValue] : value.filter((v) => v !== optionValue));
  }

  const groupClasses = `flex flex-wrap gap-2 ${className ?? ""}`.trim();

  return (
    <div
      className={groupClasses}
      role={mode === "single" ? "radiogroup" : "group"}
      aria-labelledby={labelledBy}
    >
      {options.map((opt) => {
        const inputId = `${groupName}-${opt.value}`;
        const checked = value.includes(opt.value);


        return (
          <div key={opt.value}>
            <input
              type={mode === "single" ? "radio" : "checkbox"}
              id={inputId}
              name={mode === "single" ? groupName : undefined}
              value={opt.value}
              checked={checked}
              onChange={(e) =>
                mode === "single"
                  ? handleSingleChange(opt.value)
                  : handleMultiChange(opt.value, e.target.checked)
              }
              className="peer sr-only"
            />
            <label htmlFor={inputId} className={PILL_LABEL_CLASS}>
              {opt.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}
