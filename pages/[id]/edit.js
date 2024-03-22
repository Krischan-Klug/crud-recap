import { useRouter } from "next/router";
import EditForm from "@/components/EditForm";

export default function Edit({ handleEditPlace }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <>
      <h1>Edit</h1>
      <EditForm onEdditPlace={handleEditPlace} id={id}></EditForm>
    </>
  );
}
