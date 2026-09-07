import type { ReactNode } from "react";
import { Button } from "./Button";

export type StateTone = "neutral" | "error";

interface StateMessageProps {
    icon: ReactNode;
    title: string;
    description?: ReactNode;
    action?: () => void;
    actionText?: string;
    tone?: StateTone;
}

const ICON_WRAP_CLASS: Record<StateTone, string> = {
    // 빈 상태
    neutral: "h-[72px] w-[72px] border-line bg-paper-raised text-ink-faint",
    // 에러
    error: "h-[60px] w-[60px] border-accent bg-accent-dim text-accent",
};
export function StateMessage({
    icon,
    title,
    action,
    actionText,
    description,
    tone = "neutral",
}: StateMessageProps) {
    const iconWrapClasses =
        `mb-5 flex items-center justify-center rounded-full border ${ICON_WRAP_CLASS[tone]}`.trim();

    return (
        <div className="max-w-[416px] min-w-[240px] flex flex-col items-center gap-1 px-[20px] py-[40px] text-center text-ink-soft border border-dashed border-line rounded-2xl">
            <div className={iconWrapClasses}>{icon}</div>
            <p className="text-[16px] font-bold text-ink">{title}</p>
            {description && (
                <p className="mb-1 max-w-[320px] text-[13.5px] leading-relaxed">{description}</p>
            )}
            <Button onClick={action}>{actionText}</Button>
        </div>
    );
}
