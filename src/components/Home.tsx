import "../styles/Home.css";
import Header from "./Header.tsx";
export default function Home() {

    return (
        <>
            <Header/>
            <h2 className={"greeting"}>Hello everybody and welcome </h2>
            <h3 className={"description"}> Here you will find every Rick And Morty Character you need to know</h3>

        </>
    )
}