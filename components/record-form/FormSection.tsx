import type { ReactNode } from "react";

interface FormSectionProps {
  label: string;
  require?: boolean;
  hint?: string;
  labelId?: string;
  divider?: boolean;
  children: ReactNode;
}

export function FormSection({
  label,
  require,
  hint,
  labelId,
  divider = true,
  children,
}: FormSectionProps) {
  return (
    <section className={divider ? "mt-6 border-t border-line pt-6" : undefined}>
      <h2 id={labelId} className="mb-2.5 flex items-baseline text-[16px] font-bold text-ink">
        {label}
        {require && <span className="text-accent">*</span>}
        {hint && <span className="mx-1 text-[12px] font-normal text-ink-faint">{hint}</span>}
      </h2>
      {children}
    </section>
  );
}
