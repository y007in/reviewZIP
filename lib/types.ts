import type { WatchStatus } from "@/lib/constants";

export type Tag = {
  id: string;
  label: string;
};

export type Movie = {
  id: string;
  title: string;
  posterUrl: string | null;
};

export type ArchiveRecord = {
  id: string;
  movieId: string;
  tags: Tag[];
};



export type WatchRecord = {
  id: string;
  movieId: string;
  status: WatchStatus;
  watchedFrom: string;
  companions: string[];
  locations: string[];
  tags: Tag[];
  note?: string;
  rewatchIntent?: string;
};

