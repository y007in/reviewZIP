export default async function NewRecordWithMoviePage(
  props: PageProps<"/new-record/[movieId]">,
) {
  const { movieId } = await props.params;
  return <p>영화 미리 선택된 새 기록 추가 페이지 (movieId: {movieId})</p>;
}
