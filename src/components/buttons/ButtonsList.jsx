import { Button } from "./Button";

export const ButtonsList = (props) => {
    const languages = props.languages;
    return  (
        <div>
            {
                languages.map(element => {
                    const {id, title} = element;

                    return (
                        <Button key={id} title={title}/>
                    )
                })
            }
        </div>
    )
}