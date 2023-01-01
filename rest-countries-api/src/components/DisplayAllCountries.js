import { Link } from "react-router-dom";

const DisplayAllCountries = (props) => {
    let allCountries = props.allCountries;
    const countrySerched = props.countrySearched;
    const regionSearched = props.regionSearched;
    allCountries = regionSearched ? allCountries.filter((country) => {return country.region === regionSearched}) : allCountries;
    allCountries = countrySerched ? allCountries.filter((country) => {return country.name.common === countrySerched}) : allCountries;
    return ( 
        <div className="displayAllCountries">
            {allCountries.map((country) => (
                <div className="countryDisplay" key={country.flag}>
                    <Link to={`/details/${country.cca2}`}>
                        <img src={country.flags.png} alt='flagImg' className="flag"></img>
                        <article className="countryInfo" >
                            <h3>{country.name.common}</h3>
                            <p>Population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                        </article>
                    </Link>
                    
                </div>))}
        </div>
     );
}
 
export default DisplayAllCountries;