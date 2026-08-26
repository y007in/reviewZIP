export default async function MovieDetailPage(
  props: PageProps<"/movies/[movieId]">,
) {
  const { movieId } = await props.params;
  return <p>영화 상세 페이지 (movieId: {movieId})</p>;
}
