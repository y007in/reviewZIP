"use client";

import { useEffect, useState } from "react";
import { CARD_SHELL_CLASS } from "@/lib/styles";
import type { PillTone } from "@/components/shared/TagPill";
import {
  ALL_STATUS,
  WATCH_STATUS,
  WATCH_STATUS_LABEL,
  WATCH_STATUS_TONE,
  type StatusFilter,
} from "@/lib/constants";
import type { WatchRecord } from "@/lib/types";

const TONE_STROKE_CLASS: Record<PillTone, string> = {
  neutral: "stroke-ink",
  accent: "stroke-accent",
  warn: "stroke-warn",
  info: "stroke-info",
};

const TONE_BORDER_CLASS: Record<PillTone, string> = {
  neutral: "border-ink",
  accent: "border-accent",
  warn: "border-warn",
  info: "border-info",
};

//원형 그래프
export function RingMeter({
  percent,
  tone,
  count,
  label,
  showPercent,
  onClick,
  selected,
}: {
  percent: number;
  tone: PillTone;
  count: number;
  label: string;
  showPercent?: boolean;
  onClick?: () => void;
  selected?: boolean;
}) {
  const size = 81;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    setAnimatedPercent(percent);
  }, [percent]);

  const dashOffset = circumference - (animatedPercent / 100) * circumference;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`${CARD_SHELL_CLASS} bg-card flex cursor-pointer flex-col items-center gap-2 text-center transition-colors ${selected ? TONE_BORDER_CLASS[tone] : "border-line hover:border-ink-faint"
        }`}
    >
      <figure className="flex flex-col items-center gap-2">
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              strokeWidth={strokeWidth}
              className="stroke-line"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              className={`${TONE_STROKE_CLASS[tone]} transition-[stroke-dashoffset] duration-700 ease-out`}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[20px] font-semibold text-ink">
            {count}
          </span>
        </div>
        <figcaption className="text-[11.5px] text-ink-faint">
          <p>{label}</p>
          {showPercent && <p>{percent}%</p>}
        </figcaption>
      </figure>
    </button>
  );
}

interface RecordStatsProps {
  records: WatchRecord[];
  statusFilter: StatusFilter;
  onSelectStatus: (status: StatusFilter) => void;
}

export function RecordStats({ records, statusFilter, onSelectStatus }: RecordStatsProps) {
  const total = records.length;

  return (
    <div className="col-span-full grid grid-cols-2 gap-3 sm:grid-cols-4">
      <RingMeter
        count={total}
        label="전체"
        percent={100}
        tone="neutral"
        showPercent={false}
        onClick={() => onSelectStatus(ALL_STATUS)}
        selected={statusFilter === ALL_STATUS}
      />
      {WATCH_STATUS.map((status) => {
        const count = records.filter((r) => r.status === status).length;
        const percent = total > 0 ? Math.round((count / total) * 100) : 0;

        return (
          <RingMeter
            key={status}
            count={count}
            label={WATCH_STATUS_LABEL[status]}
            percent={percent}
            tone={WATCH_STATUS_TONE[status]}
            showPercent
            onClick={() => onSelectStatus(status)}
            selected={statusFilter === status}
          />
        );
      })}
    </div>
  );
}
