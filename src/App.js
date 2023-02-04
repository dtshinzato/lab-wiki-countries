import { NavBar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <CountriesList />
          </div>
          <div className="col-7">
            <Routes className="d-flex">
              <Route path="/" element={<div></div>} />
              <Route path="/:alpha3Code" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
