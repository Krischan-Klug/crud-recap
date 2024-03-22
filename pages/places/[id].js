import { useRouter } from "next/router";

export default function DetailView() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Detail View</h1>
    </>
  );
}
