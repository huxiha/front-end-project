import AdvancedStatistics from "./components/AdvancedStatistics";
import Boost from "./components/Boost";
import CopyRight from "./components/CopyRight";
import EndLinks from "./components/EndLinks";
import MoreThan from "./components/MoreThan";
import Navigation from "./components/Navigation";
import Shorten from "./components/Shorten";


function App() {
  return (
    <div className="App">
      <Navigation />
      <MoreThan />
      <Shorten />
      <AdvancedStatistics />
      <Boost />
      <EndLinks />
      <CopyRight />
    </div>
  );
}

export default App;
