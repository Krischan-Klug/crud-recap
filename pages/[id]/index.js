import { useRouter } from "next/router";
import Image from "next/image";

export default function DetailView({ places, handleDeletePlace }) {
  const router = useRouter();
  const { id } = router.query;

  const placeToShow = places.find((place) => place.id === id);

  if (!placeToShow) {
    return <h1>Place not found</h1>;
  }

  return (
    <>
      <h2>{placeToShow.name}</h2>
      <p>{placeToShow.location}</p>
      <Image
        src={placeToShow.image}
        width={400}
        height={300}
        alt="imageLOL"
      ></Image>
      <p>{placeToShow.description}</p>
      <button onClick={() => router.back()}>Back</button>
      <button onClick={() => handleDeletePlace(placeToShow.id)}>Delete</button>
    </>
  );
}
