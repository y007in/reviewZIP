import { PillToggleGroup } from "@/components/record-form/PillToggleGroup";
import { TAG_CATEGORIES } from "@/lib/record-options";

const CATEGORY_LABEL_CLASS =
  "mb-2.5 text-[12px] font-bold uppercase tracking-wide text-ink-faint";

interface TagCategoryGridProps {
  value: string[];
  onChange: (next: string[]) => void;
}

export default function TagCategoryGrid({ value, onChange }: TagCategoryGridProps) {
  function handleCategoryChange(categoryValues: string[], next: string[]) {
    const withoutCategory = value.filter((v) => !categoryValues.includes(v));
    onChange([...withoutCategory, ...next]);
  }

  return (
    <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 ">
      {TAG_CATEGORIES.map((category) => {
        const categoryValues = category.options.map((o) => o.value);
        const titleId = `tag-${category.key}-label`;
        return (
          <div key={category.key} className="whitespace-nowrap">
            <h3 id={titleId} className={CATEGORY_LABEL_CLASS}>
              {category.title}
            </h3>
            <PillToggleGroup
              labelledBy={titleId}
              mode="multi"
              options={category.options}
              value={value.filter((v) => categoryValues.includes(v))}
              onChange={(next) => handleCategoryChange(categoryValues, next)}
              className="flex-col items-stretch"
            />
          </div>
        );
      })}
    </div>
  );
}
