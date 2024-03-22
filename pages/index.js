import Form from "@/components/Form";
import PlaceCard from "@/components/PlaceCard";
import { useRouter } from "next/router";

export default function HomePage({ places, handleAddPlace }) {
  const router = useRouter();

  if (!places) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          router.push("/create");
        }}
      >
        Create
      </button>
      <ul>
        {places.map((place) => (
          <li key={place.id}>
            <PlaceCard place={place} />
            <button
              onClick={() => {
                router.push(`/${place.id}`);
              }}
            >
              DetailView
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
