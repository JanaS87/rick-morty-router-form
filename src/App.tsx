import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import {Character, charactersResponse} from "./types/characters.ts";
import CharacterGallery from "./components/CharacterGallery.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";
import {useState} from "react";
import NewCharacterForm from "./components/NewCharacterForm.tsx";

function App() {
    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/characters"} element={<CharacterGallery characters={characters}/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetailCard characters={characters} />}/>
                <Route path={"/new-character"} element={<NewCharacterForm />}/>
            </Routes>
        </>
    )
}

export default App
