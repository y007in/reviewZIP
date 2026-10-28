import type { ReactNode } from "react";

interface TopBarShellProps {
  left: ReactNode;
  right?: ReactNode;
}

export function TopBarShell({ left, right }: TopBarShellProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-page items-center gap-5 px-8">
        {left}
        {right && (
          <div className="ml-auto flex items-center gap-2.5">{right}</div>
        )}
      </div>
    </header>
  );
}
