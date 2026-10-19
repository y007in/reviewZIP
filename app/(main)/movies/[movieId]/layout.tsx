import { TopBarShell } from "@/components/layout/TopBarShell";
import { BackNav } from "@/components/layout/BackNav";

export default function MovieDetailLayout({
  children,
}: LayoutProps<"/movies/[movieId]">) {
  return (
    <>
      <TopBarShell left={<BackNav title="영화 상세" />} />
      {children}
    </>
  );
}
