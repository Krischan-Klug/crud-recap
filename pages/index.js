import Form from "@/components/Form";
import PlaceCard from "@/components/PlaceCard";
import { useRouter } from "next/router";

export default function HomePage({ places, handleAddPlace }) {
  const router = useRouter();
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
          <PlaceCard place={place} />
        ))}
      </ul>
    </>
  );
}
