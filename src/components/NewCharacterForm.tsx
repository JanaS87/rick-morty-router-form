import {Link} from "react-router-dom";

export default function NewCharacterForm() {
    return (
        <>
            <h1>Create a new Character</h1>

            <div className={"form-container"}>
                <form className={"form"}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="species">Species:</label>
                    <input type="text" id="species" name="species" />
                    <label htmlFor="status">Status:</label>
                    <input type="text" id="status" name="status" />
                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type" />
                    <input className={"submit-btn"} type={"submit"} value={"Create"} />
                </form>
            </div>

            <Link to={"/characters"}>Back to gallery</Link>
        </>
    )
}