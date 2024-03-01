import {Character} from "../types/characters.ts";
import "../styles/CharacterCard.css";
import {Link} from "react-router-dom";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {

    return (
        <>
            <div className={"card-container"} >
        <div className={"character-card"}>
            <Link className={"details-link"} to={`/characters/${props.character.id}`}>
            <p>
                {props.character.name}
            </p>
            <p>
                {props.character.species}
            </p>
            </Link>
        </div>
            </div>
        </>
    )
}
