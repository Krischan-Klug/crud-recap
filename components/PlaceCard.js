import Image from "next/image";

export default function PlaceCard({ place }) {
  return (
    <>
      <h3>{place.name}</h3>
      <p>{place.location}</p>
      <Image
        src={place.image}
        width={400}
        height={300}
        alt={place.name}
      ></Image>
      <br></br>
    </>
  );
}
