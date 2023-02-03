import countries from './countries.json';
import { NavBar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState();

  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
        {countries.map((currentCountrie) => {
          return (
            <CountriesList
              onClick={() => setIndex(indexOf(EventTarget))} /*errado*/
              alpha2Code={currentCountrie.alpha2Code}
              nomeOficial={currentCountrie.name.official}
              alpha3Code={currentCountrie.alpha3Code}
            />
          );
        })}
        {console.log(sigla)}
        {index && <CountryDetails />}
      </div>
    </div>
  );
}

export default App;
