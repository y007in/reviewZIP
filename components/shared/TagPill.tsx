export type PillTone = "neutral" | "accent" | "warn" | "info";

interface PillProps {
  label: string;
  tone?: PillTone;
  className?: string;
}

const BASE_CLASS = "px-3 py-1 rounded-full border border-line text-[12px] font-sans font-bold"
export const TONE_CLASS: Record<PillTone, string> = {
  // 무채색 태그 등에 사용
  neutral: "border-line bg-paper-raised text-ink-soft",
  // 상태 필 스타일
  accent: "border-accent bg-accent-dim text-accent",
  //경고색
  warn: "border-warn bg-warn/10 text-warn",
  //재관람 등 청색 계열
  info: "border-info bg-info/10 text-info",
};

export function TagPill({ label, tone = "neutral", className }: PillProps) {
  const classes = `${BASE_CLASS} ${TONE_CLASS[tone]} ${className ?? ""}`.trim();
  return <span className={classes}>{label}</span>;
}