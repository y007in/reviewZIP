"use client"
import { useState } from "react";
import PosterThumb from "@/components/shared/PosterThumb";
import { mockMovies } from "@/lib/mock-data";
import type { Movie } from "@/lib/types";

interface TitlePickerProps {
  value: Movie | null;
  onSelect: (movie: Movie | null) => void;
}

export default function TitlePicker({ value, onSelect }: TitlePickerProps) {
  const [query, setQuery] = useState("");
  const keyword = query.trim().toLowerCase();
  const searchResults = keyword ? mockMovies.filter((movie) => movie.title.toLowerCase().includes(keyword)) : [];

  const handleSelect = (movie: Movie) => {
    onSelect(movie);
    setQuery("");
  }
  // 3. 선택됨
  if (value) {
    return (
      <div className="flex items-center gap-3 rounded-xl border-[1.5px] border-accent bg-card px-4 py-3">
        <PosterThumb posterPath={value.posterUrl} variant="compact" />
        <span className="flex-1 text-[15px] font-bold text-ink">{value.title}</span>
        <button
          type="button"
          onClick={() => onSelect(null)}
          className="cursor-pointer rounded-lg px-3 py-1 text-[13px] font-semibold text-accent bg-accent-dim hover:bg-accent-dim-2"
        >
          변경
        </button>
      </div>
    );
  }
  return (
    <div>
      {/* 1. 초기 */}
      <div className="flex items-center gap-2.5 rounded-xl border-[1.5px] border-line bg-card px-4 py-3.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-ink-soft">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
          <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="영화나 드라마 제목을 검색해보세요"
          className="min-w-0 flex-1 border-none bg-transparent text-[15px] font-semibold text-ink outline-none placeholder:font-medium placeholder:text-ink-faint"
        />
      </div>
      {/* 2. 검색중*/}
      {keyword && (
        <ul className="overflow-hidden rounded-xl border border-line bg-card">
          {searchResults.length > 0 ? (
            searchResults.map((movie) => (
              <li
                key={movie.id}
                role="button"
                tabIndex={0}
                onClick={() => handleSelect(movie)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(movie);
                  }
                }}
                className="flex cursor-pointer items-center gap-3 border-b border-line px-4 py-2.5 last:border-b-0 hover:bg-accent-dim"
              >
                <PosterThumb posterPath={movie.posterUrl} variant="compact" />
                <span className="text-[14px] font-semibold text-ink">{movie.title}</span>
              </li>
            ))
          ) : (
            <li className="px-4 py-6 text-center text-[13px] text-ink-faint">검색 결과가 없어요</li>
          )}
        </ul>
      )}
    </div>
  );
}
