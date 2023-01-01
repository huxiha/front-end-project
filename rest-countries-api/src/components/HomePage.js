import { useEffect, useState } from 'react'
import DisplayAllCountries from './DisplayAllCountries';

const HomePage = () => {
    const [countrySearched, setCountrySearched] = useState('');
    const [regionSearched, setRegionSearched] = useState('');
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
  });  

  const handleSearchCountry = () => {

    setCountrySearched(document.getElementsByClassName('search')[0].value);
  }

    return ( 
        <div className="home">
            <div className="searchCountries">
                <form className="searchCountry" onSubmit={handleSearchCountry}>
                    <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                    <input type='search' className='search' placeholder='Search for a country...' value={countrySearched} onChange={(e) => {
                        setCountrySearched(e.target.value);
                    }}></input>
                </form>
                <form className="searchRegion">
                    <select id='select' onChange={(e) => {setRegionSearched(e.target.value)} }>
                        <option value="">Filter by Region</option>
                        <option vlaue="Africa">Africa</option>
                        <option value='America'>America</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe'>Europe</option>
                        <option value='Oceania'>Oceania</option>
                    </select>
                </form>
            </div>

            
            <div className="countriesList">
                {countries && <DisplayAllCountries allCountries={countries} countrySearched={countrySearched} regionSearched={regionSearched}/>}
            </div>

        </div>
     );
}
 
export default HomePage;