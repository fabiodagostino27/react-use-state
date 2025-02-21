export const Button = (props) => {
    let currentId = props.currentId;
    let setCurrentId = props.setCurrentId;

    return (
        <button className="btn btn-primary me-2" onClick={() => setCurrentId(currentId = props.id)}>{props.title}</button>
    )
}