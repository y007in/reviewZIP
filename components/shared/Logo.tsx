import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex-shrink-0 text-[17px] font-bold tracking-tight text-ink"
    >
      <span className="font-mono text-[15.5px] font-semibold text-accent">
        Re:
      </span>
      viewZIP
    </Link>
  );
}
