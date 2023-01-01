import useFetch from "./useFetch";
import DisplayBorder from "./DisplayBorder";

const DisplayBorders = ({borderCode}) => {
    const border = useFetch('https://restcountries.com/v3.1/alpha/' + borderCode)
    
    return ( 
        <div className="displayBorders">
            {border && <DisplayBorder border={border}/>}
        </div>
     );
}
 
export default DisplayBorders;