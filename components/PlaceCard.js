import Image from "next/image";
import { useRouter } from "next/router";

export default function PlaceCard({ place }) {
  const router = useRouter();
  return (
    <li>
      <h3>{place.name}</h3>
      <p>{place.location}</p>
      <Image
        src={place.image}
        width={400}
        height={300}
        alt={place.name}
      ></Image>
      <br></br>
      <button
        onClick={() => {
          router.push(`/${place.id}`);
        }}
      >
        DetailView
      </button>
    </li>
  );
}
