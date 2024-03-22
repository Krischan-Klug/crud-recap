import { useRouter } from "next/router";

export default function EditForm({ onEdditPlace, id }) {
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onEdditPlace(id, data);
    router.push("/");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
        <br></br>
        <label htmlFor="location">Location</label>
        <input id="location" name="location" type="text" />
        <br></br>
        <label htmlFor="image">Image URL</label>
        <input id="image" name="image" type="text" />
        <br></br>
        <label htmlFor="mapURL">Map URL</label>
        <input id="mapURL" name="mapURL" type="text" />
        <br></br>
        <label htmlFor="description">Description</label>
        <input id="description" name="description" type="text" />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
