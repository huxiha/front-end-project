import { useState } from 'react'

const SearchCountry = () => {
    const [countrySearched, setCountrySearched] = useState('');
    return ( 
        <div className="searchCountry">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            <input type='search' className='search' placeholder='Search for a country...' value={countrySearched} onChange={(e) => {
                setCountrySearched(e.target.value);
            }}></input>
        </div>
     );
}

export default SearchCountry;