"use client";

import { useState } from "react";
import { PosterThumb } from "@/components/shared/PosterThumb";
import { TagPill } from "@/components/shared/TagPill";
import { type Movie, type WatchRecord } from "@/lib/types";

interface RecordCardProps {
  record: WatchRecord;
  movie: Movie;
  onOpenDetail?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function RecordCard({ record, movie, onOpenDetail, onEdit, onDelete }: RecordCardProps) {
  return (
    <div className="max-w-[360px] relative rounded-2xl border border-line bg-card p-5 shadow-[0_2px_10px_rgba(27,26,23,0.05)] transition-all hover:-translate-y-0.5 hover:border-ink-faint">
      <CardMenu onEdit={onEdit} onDelete={onDelete} />
      <div className="flex flex-col gap-3.5">
        <button
          type="button"
          onClick={onOpenDetail}
          className="group relative block w-full"
          aria-label={`${movie.title} 상세보기`}
        >
          <PosterThumb posterPath={movie.posterUrl} />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-lg bg-ink/60 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-[10px] font-bold">상세보기</span>
          </div>
        </button>

        <div className="min-w-0 flex-1">
          <div className="mb-3.5 flex items-center justify-between gap-2.5">
            <h3 className="text-[17px] font-bold leading-snug">{movie.title}</h3>
            <TagPill label={record.status} tone="accent" />
          </div>

          <div className="mb-3.5 flex flex-wrap items-center gap-1 border-b border-dashed border-line pb-3.5 text-xs text-ink-soft">
            <span className="font-mono">{record.watchedFrom}</span>
            {record.companions.length > 0 && (
              <>
                <span aria-hidden className="text-ink-faint opacity-40">|</span>
                {record.companions.map((c, i) => (
                  <span key={c}>
                    {i > 0 && <span aria-hidden className="text-ink-faint opacity-60">•</span>} {c}
                  </span>
                ))}
              </>
            )}
            {record.locations.length > 0 && (
              <>
                <span aria-hidden className="text-ink-faint opacity-40">|</span>
                {record.locations.map((l, i) => (
                  <span key={l}>
                    {i > 0 && <span aria-hidden className="text-ink-faint opacity-60">•</span>} {l}
                  </span>
                ))}
              </>
            )}
          </div>

          {record.tags.length > 0 && (
            <div className="mb-3.5 flex flex-wrap gap-1.5">
              {record.tags.map((t) => (
                <TagPill key={t.id} label={t.label} />
              ))}
            </div>
          )}

          {record.note && (
            <p className="text-[13px] leading-relaxed text-ink">{record.note}</p>
          )}

          {record.rewatchIntent && (
            <div className="flex gap-[10px] mt-3.5 border-t border-line-soft pt-3 text-[11.5px] text-ink-faint">
              <span>다시 볼 의향</span>
              <span
                className={
                  record.rewatchIntent === "yes" ? "font-semibold text-accent" : undefined
                }
              >
                {record.rewatchIntent}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CardMenu({ onEdit, onDelete }: { onEdit?: () => void; onDelete?: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute right-3 top-0.5 z-10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="더보기"
        className="flex  items-center justify-center rounded-full text-ink-faint  cursor-pointer"
      >
        ⋯
      </button>
      {open && (
        <div
          className="absolute right-0 top-4 min-w-[120px] overflow-hidden rounded-lg border border-line bg-card shadow-[0_8px_24px_rgba(27,26,23,0.14)]"
          onMouseLeave={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onEdit?.();
            }}
            className="block w-full px-3.5 py-2.5 text-left text-[13px] font-semibold hover:bg-paper-raised "
          >
            수정하기
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onDelete?.();
            }}
            className="block w-full px-3.5 py-2.5 text-left text-[13px] font-semibold text-accent hover:bg-paper-raised"
          >
            삭제하기
          </button>
        </div>
      )
      }
    </div >
  );
}

