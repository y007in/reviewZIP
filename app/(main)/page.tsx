"use client";
import { useState } from "react";
import { RecordStats } from "@/components/archive/RecordStats";
import { RecordList } from "@/components/archive/RecordList";
import { mockMovies, mockWatchRecords } from "@/lib/mock-data";
import { ALL_STATUS, type StatusFilter } from "@/lib/constants";

export default function ArchiveHomePage() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>(ALL_STATUS);
  const movieById = new Map(mockMovies.map((movie) => [movie.id, movie]));
  const hasAnyRecords = mockWatchRecords.length > 0;

  return (
    <main className="mx-auto grid w-full max-w-6xl grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5 p-6">
      <div className="col-span-full flex flex-col items-start justify-between">
        <h1 className="text-[26px] font-bold text-ink">안녕하세요</h1>
        <h2 className="text-[16px] text-ink">
          지금까지 {mockWatchRecords.length}편의 감상을 기록했어요.
        </h2>
      </div>

      {hasAnyRecords && (
        <RecordStats
          records={mockWatchRecords}
          statusFilter={statusFilter}
          onSelectStatus={setStatusFilter}
        />
      )}

      <RecordList
        records={mockWatchRecords}
        movieById={movieById}
        statusFilter={statusFilter}
        onSelectStatus={setStatusFilter}
      />
    </main>
  );
}
