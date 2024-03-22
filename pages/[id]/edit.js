import { useRouter } from "next/router";
import EditForm from "@/components/EditForm";
import Form from "@/components/Form";

export default function Edit({ handleEditPlace }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <>
      <h1>Edit</h1>
      <Form onEditPlace={handleEditPlace} id={id}></Form>
    </>
  );
}
