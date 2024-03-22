import { useRouter } from "next/router";
import Image from "next/image";

export default function DetailView({ places }) {
  const router = useRouter();
  const { id } = router.query;

  const placeToShow = places.find((place) => place.id === id);
  console.log(router.query);

  if (!router.isReady) {
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
    </>
  );
}
