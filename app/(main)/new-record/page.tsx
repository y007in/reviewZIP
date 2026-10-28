"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared/Button";
import TitlePicker from "@/components/record-form/TitlePicker";
import { PillToggleGroup } from "@/components/record-form/PillToggleGroup";
import TagCategoryGrid from "@/components/record-form/TagCategoryGrid";
import { FormSection } from "@/components/record-form/FormSection";
import {
  STATUS_OPTIONS,
  COMPANION_OPTIONS,
  LOCATION_OPTIONS,
  REWATCH_OPTIONS,
} from "@/lib/record-options";
import type { Movie } from "@/lib/types";

const DATE_LABEL_CLASS = "mb-1.5 block text-[12.5px] font-semibold text-ink-soft";
const DATE_INPUT_CLASS =
  "w-full rounded-full border border-line bg-card px-4 py-1.5 text-[14px] font-semibold text-ink-soft outline-none focus:border-accent focus:text-ink";

export default function NewRecordPage() {
  const router = useRouter();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [status, setStatus] = useState<string[]>([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companions, setCompanions] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [rewatch, setRewatch] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [note, setNote] = useState("");

  return (
    <main className="mx-auto grid w-full max-w-page grid-cols-1 px-6 py-8 pb-32">
      <div className="mb-7">
        <h1 className="text-[22px] font-extrabold text-ink">오늘 본 작품을 기록해보세요</h1>
      </div>
      <FormSection label="어떤 작품인가요?" require divider={false}>
        <TitlePicker value={movie} onSelect={setMovie} />
      </FormSection>

      <FormSection label="관람 상태" require labelId="status-label">
        <PillToggleGroup labelledBy="status-label" options={STATUS_OPTIONS} value={status} onChange={setStatus} />
      </FormSection>

      <FormSection label="언제 관람하셨나요?" require>
        <div className="flex gap-3.5">
          <div className="min-w-0 flex-1">
            <label htmlFor="start-date" className={DATE_LABEL_CLASS}>시작일</label>
            <input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={DATE_INPUT_CLASS}
            />
          </div>
          <div className="min-w-0 flex-1">
            <label htmlFor="end-date" className={DATE_LABEL_CLASS}>종료일</label>
            <input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={DATE_INPUT_CLASS}
            />
          </div>
        </div>
      </FormSection>

      <FormSection label="누구와 함께했나요?" require hint="중복 가능" labelId="companion-label">
        <PillToggleGroup labelledBy="companion-label" mode="multi" options={COMPANION_OPTIONS} value={companions} onChange={setCompanions} />
      </FormSection>

      <FormSection label="어디서 시청하셨나요?" require labelId="location-label">
        <PillToggleGroup labelledBy="location-label" options={LOCATION_OPTIONS} value={locations} onChange={setLocations} />
      </FormSection>

      <FormSection label="다시 볼 의향이 있나요?" require labelId="rewatch-label">
        <PillToggleGroup labelledBy="rewatch-label" options={REWATCH_OPTIONS} value={rewatch} onChange={setRewatch} />
      </FormSection>

      <FormSection label="어떤 영화였나요?" require>
        <TagCategoryGrid value={tags} onChange={setTags} />
      </FormSection>

      <FormSection label="한줄평">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="이 작품에 대한 짧은 감상을 남겨보세요."
          className="w-full h-50 resize-y rounded-xl border-[1.3px] border-line bg-card px-4 py-3.5 text-[14px] leading-relaxed text-ink outline-none focus:border-accent"
        />
      </FormSection>


      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-page gap-3 px-6 py-4">
          <Button
            type="button"
            variant="ghost"
            onClick={() => router.back()}
            className="flex-1 hover:bg-paper-raised"
          >
            취소
          </Button>
          <Button type="button" className="flex-1">
            기록 저장하기
          </Button>
        </div>
      </div>
    </main>
  );
}
