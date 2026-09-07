"use client";
import { useRouter } from "next/navigation";
import { RecordCard } from "@/components/archive/RecordCard";
import { mockMovies, mockWatchRecords } from "@/lib/mock-data";
import { StateMessage } from "@/components/shared/StateMessage";

export default function ArchiveHomePage() {
  const router = useRouter();
  const movieById = new Map(mockMovies.map((movie) => [movie.id, movie]));

  if (mockWatchRecords.length === 0) {
    return (
      <main className="flex w-full justify-center p-6">
        <StateMessage
          title="아직 기록한 작품이 없어요"
          description="오늘 본 영화나 드라마부터 첫 번째 작품을 기록해보세요!"
          action={() => router.push("/new-record")}
          actionText="+ 새 기록 추가하기"
        />
      </main>
    );
  }

  return (
    <main className="mx-auto grid w-full max-w-6xl grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5 p-6">
      <div className="col-span-full flex flex-col items-start justify-between">
        <h1 className="text-[26px] font-bold text-ink">안녕하세요</h1>
        <h2 className="text-[16px] text-ink">
          지금까지 {mockWatchRecords.length}편의 감상을 기록했어요.
        </h2>
      </div>
      <section className="col-span-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
        {mockWatchRecords.map((record) => (
          <RecordCard
            key={record.id}
            record={record}
            movie={movieById.get(record.movieId)!}
          />
        ))}
      </section>
    </main>
  );
}
