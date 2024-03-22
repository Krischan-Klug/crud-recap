import Form from "@/components/Form";
import PlaceCard from "@/components/PlaceCard";
import { useRouter } from "next/router";

export default function HomePage({ places }) {
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
          <PlaceCard key={place.id} place={place} />
        ))}
      </ul>
    </>
  );
}
