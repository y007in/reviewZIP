"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RecordCard } from "@/components/archive/RecordCard";
import { StateMessage } from "@/components/shared/StateMessage";
import { TONE_CLASS } from "@/components/shared/TagPill";
import { CARD_SHELL_CLASS } from "@/lib/styles";
import {
  ALL_STATUS,
  WATCH_STATUS,
  WATCH_STATUS_LABEL,
  WATCH_STATUS_TONE,
  type StatusFilter,
  type WatchStatus,
} from "@/lib/constants";
import type { Movie, WatchRecord } from "@/lib/types";

const STATUS_OPTIONS: StatusFilter[] = [ALL_STATUS, ...WATCH_STATUS];

const SORT_OPTIONS = ["latest", "title"] as const;
type SortOption = (typeof SORT_OPTIONS)[number];
const SORT_LABEL: Record<SortOption, string> = {
  latest: "최신순",
  title: "제목순",
};

interface RecordListProps {
  records: WatchRecord[];
  movieById: Map<string, Movie>;
  statusFilter: StatusFilter;
  onSelectStatus: (status: StatusFilter) => void;
}

export function RecordList({ records, movieById, statusFilter, onSelectStatus }: RecordListProps) {
  const router = useRouter();
  const [sortOption, setSortOption] = useState<SortOption>("latest");

  const hasAnyRecords = records.length > 0;
  const filteredRecords =
    statusFilter === ALL_STATUS ? records : records.filter((r) => r.status === statusFilter);

  const sortedRecords = [...filteredRecords].sort((a, b) => {
    if (sortOption === "latest") {
      return b.watchedFrom.localeCompare(a.watchedFrom);
    }
    const titleA = movieById.get(a.movieId)?.title ?? "";
    const titleB = movieById.get(b.movieId)?.title ?? "";
    return titleA.localeCompare(titleB, "ko");
  });

  return (
    <>
      {hasAnyRecords && (
        <div className="col-span-full flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {STATUS_OPTIONS.map((s) => {
              const tone = s === ALL_STATUS ? "neutral" : WATCH_STATUS_TONE[s];
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => onSelectStatus(s)}
                  aria-pressed={statusFilter === s}
                  className={`rounded-full border px-4 py-1.5 text-[14px] font-semibold transition-colors ${statusFilter === s
                    ? TONE_CLASS[tone]
                    : "border-line bg-card text-ink-soft hover:border-ink-faint"
                    }`}
                >
                  {s === ALL_STATUS ? "전체" : WATCH_STATUS_LABEL[s]}
                </button>
              );
            })}
          </div>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="border-none p-1 text-[14px] font-semibold text-ink-soft outline-none cursor-pointer"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {SORT_LABEL[option]}
              </option>
            ))}
          </select>
        </div>
      )}
      {filteredRecords.length === 0 ? (
        <div className="col-span-full flex justify-center py-10">
          {hasAnyRecords ? (
            <StateMessage
              title={`${WATCH_STATUS_LABEL[statusFilter as WatchStatus]}이 아직 없어요`}
              description={`${WATCH_STATUS_LABEL[statusFilter as WatchStatus]}이 생기면 여기에 모아둘게요`}
              action={() => onSelectStatus(ALL_STATUS)}
              actionText="전체 보기"
            />
          ) : (
            <StateMessage
              title="아직 기록한 작품이 없어요"
              description="오늘 본 영화나 드라마부터 첫 번째 작품을 기록해보세요!"
              action={() => router.push("/new-record")}
              actionText="+ 새 기록 추가하기"
            />
          )}
        </div>
      ) : (
        <section className="col-span-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
          {sortedRecords.map((record) => (
            <RecordCard key={record.id} record={record} movie={movieById.get(record.movieId)!} />
          ))}
          <Link
            href="/new-record"
            className={`${CARD_SHELL_CLASS} border-line flex min-h-[220px] w-full flex-col items-center justify-center gap-2 text-ink-faint border-dashed hover:border-accent hover:text-accent shadow-none`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current text-lg">
              +
            </span>
            <span className="text-[13.5px] font-bold">새로운 기록 남기기</span>
          </Link>
        </section>
      )}
    </>
  );
}
