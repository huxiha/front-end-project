import DisplayBorders from "./DisplayBorders";

const DisplayDetails = (props) => {
    const {countryDetails} = props;
    return ( 
        <div className="displayDetails">
            {
                countryDetails.map((country) => (
                    <div className="detail" key={country.flag}>
                        <img src={country.flags.svg} alt='flagIcon'></img>
                        <article>
                            <h3>{country.name.common}</h3>
                            <section className="baseInfo">
                                <p>Native Name: {country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</p>
                                <p>Population: {country.population}</p>
                                <p>Region: {country.region}</p>
                                <p>Sub Region: {country.subregion}</p>
                                <p>Capital: {country.capital}</p>
                                <p>Top Level Domain: {country.tld}</p>
                                <p>Currencies: {country.currencies ? country.currencies[Object.keys(country.currencies)[0]].name : ""}</p>
                                <p>Languages: {Object.keys(country.languages).map(key => (country.languages[key])).join(', ')}</p>
                            </section>
                            <section className="borderCountries">
                                <p>Border Countries:</p> 
                            {
                                country.borders ? country.borders.map((borderCode) => (
                                <DisplayBorders borderCode={borderCode}/>
                            )) : ""
                            }
                        </section>
                        </article>
                        
                    </div>
                
                )
                    )
            }
            
            
            
        </div>
     );
}
 
export default DisplayDetails;