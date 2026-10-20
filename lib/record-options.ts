import type { PillOption } from "@/components/record-form/PillToggleGroup";
import { WATCH_STATUS, WATCH_STATUS_LABEL } from "@/lib/constants";

export const STATUS_OPTIONS: PillOption[] = WATCH_STATUS.map((status) => ({
  value: status,
  label: WATCH_STATUS_LABEL[status],
}));

export const COMPANION_OPTIONS: PillOption[] = [
  { value: "friend", label: "친구" },
  { value: "partner", label: "연인 · 배우자" },
  { value: "colleague", label: "지인 · 동료" },
  { value: "alone", label: "혼자" },
  { value: "kid", label: "아이" },
  { value: "parent", label: "부모님" },
  { value: "pet", label: "반려동물" },
  { value: "family", label: "친척 · 형제" },
  { value: "etc", label: "기타" },
];

export const LOCATION_OPTIONS: PillOption[] = [
  { value: "theater", label: "영화관" },
  { value: "home", label: "집" },
  { value: "cafe", label: "카페" },
  { value: "flight", label: "비행기" },
  { value: "school", label: "학교" },
  { value: "outdoor", label: "야외" },
  { value: "ott", label: "OTT" },
  { value: "premiere", label: "시사회" },
  { value: "etc", label: "기타" },
];

export const REWATCH_OPTIONS: PillOption[] = [
  { value: "yes", label: "네 있어요" },
  { value: "maybe", label: "애매해요" },
  { value: "no", label: "아니요 안볼래요" },
];

export interface TagCategory {
  key: string;
  title: string;
  options: PillOption[];
}

export const TAG_CATEGORIES: TagCategory[] = [
  {
    key: "story",
    title: "스토리/구성",
    options: [
      { value: "story-insight", label: "생각할 거리를 던져줬어요" },
      { value: "story-mood", label: "이해는 안 갔지만 분위기는 좋았어요" },
      { value: "story-direction", label: "스토리는 별로인데 연출은 좋았어요" },
    ],
  },
  {
    key: "emotion",
    title: "감정/여운",
    options: [
      { value: "emotion-blank", label: "끝나고 멍해졌어요" },
      { value: "emotion-strange", label: "기분은 이상한데 계속 생각나요" },
      { value: "emotion-lingering", label: "좀 이상한 기분이 오래 남았어요" },
    ],
  },
  {
    key: "craft",
    title: "연출/기술",
    options: [
      { value: "craft-ost", label: "OST가 아직도 맴돌아요" },
      { value: "craft-immersive", label: "몰입해서 시간 가는 줄 몰랐어요" },
      { value: "craft-tense", label: "보는 내내 긴장했어요" },
    ],
  },
];
