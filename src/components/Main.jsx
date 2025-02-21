import { useState } from "react";
import { ButtonsList } from "./buttons/ButtonsList";

export const Main = (props) => {
    const [currentId, setCurrentId] = useState(0);
    const languages = props.languages;
    const {description} = languages;

    const currentObject = languages.find(element => element.id === currentId);
    return (
        <div className="container mt-3">
            <div>
                <ButtonsList languages={languages} currentId={currentId} setCurrentId={setCurrentId}/>
            </div>
            <p>
                {!currentObject ? "Nessun linguaggio selezionato" : currentObject.description}
            </p>
        </div>
    )
}