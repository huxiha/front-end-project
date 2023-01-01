import { useParams } from "react-router-dom";
import DisplayDetails from "./DisplayDetails";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";


const CountryDetails = () => {
    const {countryname} = useParams();
    const countryDetails = useFetch("https://restcountries.com/v3.1/alpha/" + countryname);

    return ( 
        <div className="countryDetails">
            <i className="fa-solid fa-arrow-left"></i>
            <Link to='/'>Back</Link>
            {countryDetails && <DisplayDetails countryDetails={countryDetails}/>}
        </div>
     );
}
 
export default CountryDetails;