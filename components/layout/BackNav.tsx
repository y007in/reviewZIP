"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackNavProps {
  title: string;
}

export function BackNav({ title }: BackNavProps) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="뒤로가기"
        className="flex h-8 w-8 items-center justify-center rounded-full text-ink hover:bg-paper-raised cursor-pointer"
      >
        <ArrowLeft size={20} />
      </button>
      <h1 className="text-[17px] font-bold text-ink">{title}</h1>
    </div>
  );
}
