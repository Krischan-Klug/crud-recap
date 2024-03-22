import GlobalStyle from "../styles";
import { useState } from "react";
import { initialPlaces } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [places, setPlaces] = useState(initialPlaces);

  function handleDeletePlace(id) {
    setPlaces(places.filter((place) => place.id !== id));
    router.push("/");
    console.log(places);
    console.log(id);
  }

  function handleAddPlace(place) {
    const newPlace = { id: uuidv4(), ...place };

    setPlaces([...places, newPlace]);
  }

  function handleEditPlace(id, newPlace) {
    setPlaces(
      places.map((place) => {
        if (place.id === id) {
          newPlace = { id: uuidv4(), ...newPlace };
          //console.log(newPlace);
          return newPlace;
        }
        return place;
      })
    );
  }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        places={places}
        handleAddPlace={handleAddPlace}
        handleDeletePlace={handleDeletePlace}
        handleEditPlace={handleEditPlace}
      />
    </>
  );
}
