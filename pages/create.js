import { useRouter } from "next/router";
import Form from "@/components/Form";

export default function Create({ handleAddPlace }) {
  const router = useRouter();

  return (
    <>
      <h1>Create</h1>

      <button onClick={() => router.back()}>Back</button>

      <Form onAddPlace={handleAddPlace} />
    </>
  );
}
