import { TopBarShell } from "@/components/layout/TopBarShell";
import { BackNav } from "@/components/layout/BackNav";

export default function NewRecordLayout({
  children,
}: LayoutProps<"/new-record">) {
  return (
    <>
      <TopBarShell left={<BackNav title="새 기록 추가" />} />
      {children}
    </>
  );
}
