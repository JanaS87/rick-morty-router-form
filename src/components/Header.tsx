import {Link} from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
    return (
        <div>
            <header className={"header"}>

                <h1 className={"title"}>Rick and Morty</h1>
                    <nav className={"navigation"}>
                        <Link className={location.pathname === '/' ? 'active-link' : 'home-link'} to={"/"}>Home</Link>
                        <Link className={location.pathname === '/characters' ? 'active-link' : 'gallery-link'} to={"/characters"}>Gallery</Link>
                        <Link className={location.pathname === '/new-character' ? 'active-link' : 'new-character-link'} to={"/new-character"}>Create new Character</Link>
                    </nav>
            </header>


        </div>
    )
}