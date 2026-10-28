'use client';
import { useRouter } from "next/navigation";
import { TopBarShell } from "@/components/layout/TopBarShell";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/shared/Button";

export default function HomeLayout({ children }: LayoutProps<"/">) {
  const router = useRouter();
  return (
    <>
      <TopBarShell left={<Logo />} right={<Button onClick={() => router.push("/new-record")}>+ 새 기록</Button>} />
      {children}
    </>
  );
}
