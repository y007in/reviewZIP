type PosterVariant = "card" | "hero" | "compact";

interface PosterThumbProps {
  posterPath?: string | null;
  variant?: PosterVariant;
  className?: string;
}

const VARIANT_CLASS: Record<PosterVariant, string> = {
  // 아카이브 홈
  card: "w-full h-[190px] aspect-2/3 text-[12px]",
  // 영화 상세 히어로
  hero: "w-[150px] aspect-[2/3] text-[12px]",
  // 자동완성 목록처럼 아주 작은 자리
  compact: "w-12 aspect-[2/3] text-[10px]",
};


export function PosterThumb({
  posterPath,
  variant = "card",
  className,
}: PosterThumbProps) {
  if (!posterPath) {
    const classes =
      `flex items-center justify-center rounded-lg border border-dashed border-ink-faint/50 bg-paper-raised text-ink-faint ${VARIANT_CLASS[variant]} ${className ?? ""}`.trim();

    return (
      <div className={classes}>
        <span className="px-2.5 text-center font-semibold">
          이미지 준비중
        </span>
      </div>
    );
  }
}