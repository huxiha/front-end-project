import SearchCountry from "./SearchCountry";
import SearchRegion from "./SearchRegion";

const SearchCountries = () => {
    return ( 
        <div className="searchCountries">
            <SearchCountry />
            <SearchRegion />
        </div>
     );
}
 
export default SearchCountries;