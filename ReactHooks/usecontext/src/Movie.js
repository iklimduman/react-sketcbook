import react from "react";

const Movie = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
        </div>
    )
}

export default Movie ;