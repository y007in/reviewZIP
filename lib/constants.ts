import type { PillTone } from "@/components/shared/TagPill";

export const WATCH_STATUS = ["watched", "rewatched", "dropped"] as const;

export type WatchStatus = (typeof WATCH_STATUS)[number];

export const WATCH_STATUS_LABEL: Record<WatchStatus, string> = {
  watched: "다 본 작품",
  rewatched: "재관람 작품",
  dropped: "중단한 작품",
};

export const WATCH_STATUS_TONE: Record<WatchStatus, PillTone> = {
  watched: "accent",
  rewatched: "info",
  dropped: "warn",
};

export const ALL_STATUS = "all" as const;

export type StatusFilter = typeof ALL_STATUS | WatchStatus;
