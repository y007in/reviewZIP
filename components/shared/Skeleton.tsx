export function Skeleton({ className }: { className?: string }) {
  const classes =
    `animate-shimmer rounded-md bg-[length:400%_100%] bg-[image:linear-gradient(90deg,var(--color-line-soft)_25%,var(--color-paper-raised)_37%,var(--color-line-soft)_63%)] ${className ?? ""}`.trim();

  return <div aria-hidden className={classes} />;
}