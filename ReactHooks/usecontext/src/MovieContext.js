import react , {useState , createContext} from 'react' ;

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies , setMovies] = useState([
        {
            name : "Inception",
            price : "10$",
            id : 123
        },
        {
            name : "LOTR",
            price : "12$",
            id : 153
        },
        {
            name : "La La Land", 
            price : "8$",
            id : 52
        }
    ]);

    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}