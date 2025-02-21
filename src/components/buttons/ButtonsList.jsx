import { Button } from "./Button";

export const ButtonsList = (props) => {
    const languages = props.languages;
    return  (
        <div>
            {
                languages.map(element => {
                    const {id, title} = element;

                    return (
                        <Button key={id} id={id} title={title} currentId={props.currentId} setCurrentId={props.setCurrentId}/>
                    )
                })
            }
        </div>
    )
}