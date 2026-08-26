export type Tag = {
  id: string;
  label: string;
};

export type Movie = {
  id: string;
  title: string;
  posterUrl: string | null;
};

// TS 내장 유틸리티 타입 Record<K, V>와의 이름 충돌을 피하기 위해 ArchiveRecord로 명명
export type ArchiveRecord = {
  id: string;
  movieId: string;
  tags: Tag[];
};
