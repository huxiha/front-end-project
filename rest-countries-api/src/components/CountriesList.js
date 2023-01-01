import { useEffect, useState } from 'react'
import DisplayAllCountries from './DisplayAllCountries';

const CountriesList = () => {
    const url = 'https://restcountries.com/v3.1/all'
    const [countries, setCountries] = useState();
    useEffect(() => {
        fetch(url).then((response) => {
            if(response.ok) {
                response.json().then((data) => {
                setCountries(data);
        })
      }
    }, (reject) => {
      console.log(reject.message);
    });
  }, []);  

    return ( 
        <div className="countriesList">
            {countries && <DisplayAllCountries allCountries={countries} />}
        </div>
     );
}
 
export default CountriesList;