import GlobalStyle from "../styles";
import { useState } from "react";
import { initialPlaces } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState(initialPlaces);

  function handleDeletePlace(id) {
    setPlaces(places.map((place) => place.id !== id));
  }

  function handleAddPlace(place) {
    const newPlace = { id: uuidv4(), ...place };

    setPlaces([...places, newPlace]);
  }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        places={places}
        handleAddPlace={handleAddPlace}
        handleDeletePlace={handleDeletePlace}
      />
    </>
  );
}
