import {Link, useParams} from "react-router-dom";
import {Character} from "../types/characters.ts";

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterDetailCard(props: CharacterGalleryProps) {
    const params = useParams();
    const character = props.characters.find(character => character.id.toString() === params.id);

    return (
        <>
            <div className={"character-card"}>
                {character ?
                    <div>
                        <h2>{character.name}</h2>
                        <p>Species: {character.species}</p>
                        <p>Status: {character.status}</p>
                    </div>
                    :
                    <p>Character not found</p>
                }
            </div>
            <Link to={"/characters"}>Back to gallery</Link>
        </>
    )
}