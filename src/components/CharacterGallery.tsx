import {Character, charactersResponse} from "../types/characters.ts";
import CharacterCard from "./CharacterCard.tsx";
import {useState} from "react";
import Header from "./Header.tsx";
import "../styles/CharacterGallery.css";
import "../styles/Header.css";


type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps) {
   // const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    return (
        <div>
            <Header/>
            <h1 className={"gallery-title"}>
                Gallery
            </h1>
            {props.characters.map(character => <CharacterCard
                                                                key={character.id}
                                                                character={character}/>)}
        </div>
    )
}
