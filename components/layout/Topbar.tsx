"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared/Button";

interface TopBarProps {
  showSearch?: boolean;
  onNewRecord?: () => void;
}

export function TopBar({ onNewRecord }: TopBarProps) {
  const router = useRouter();

  function handleNewRecord() {
    if (onNewRecord) {
      onNewRecord();
      return;
    }
    router.push("/new-record");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center gap-5 px-8">
        <Link
          href="/"
          className="flex-shrink-0 text-[17px] font-bold tracking-tight text-ink"
        >
          <span className="font-mono text-[15.5px] font-semibold text-accent">
            Re:
          </span>
          viewZIP
        </Link>
        <div className="ml-auto flex items-center gap-2.5">
          <Button
            variant="primary"
            onClick={handleNewRecord}
            className="px-4 py-2.5 text-sm"
          >
            + 새 기록
          </Button>
        </div>
      </div>
    </header>
  );
}
