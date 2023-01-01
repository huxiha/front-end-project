import CountriesList from "./components/CountriesList";
import Headers from "./components/Headers";
import SearchCountries from "./components/SeachCountries";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CountryDetails from "./components/CountryDetails";
import HomePage from "./components/HomePage";

function App() {
  
  return (
    <div className="App">
      <Headers />
      <Router>
        <Switch>
          <Route exact path='/'>
            {/* <SearchCountries />
            <CountriesList /> */}
            <HomePage />
          </Route>
          <Route path='/details/:countryname'>
            <CountryDetails />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
