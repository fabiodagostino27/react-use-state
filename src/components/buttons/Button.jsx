export const Button = (props) => {
    let currentId = props.currentId;
    let setCurrentId = props.setCurrentId;

    return (
        <button className={`btn me-2 ${(currentId === props.id) ? "btn-warning" : "btn-primary"}`} onClick={() => setCurrentId(currentId = props.id)}>{props.title}</button>
    )
}