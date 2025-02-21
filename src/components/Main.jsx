import { ButtonsList } from "./buttons/ButtonsList"

export const Main = (props) => {
    return (
        <div className="container mt-3">
            <div>
                <ButtonsList languages={props.languages}/>
            </div>
        </div>
    )
}