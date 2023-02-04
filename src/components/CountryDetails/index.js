import countries from '../../countries.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//find filter

export function CountryDetails() {
  const params = useParams();

  // const countriesSelect = countries.filter((currentElement) => {
  //   return currentElement.alpha3Code === params.alpha3Code;
  // })[0];
  const countriesSelect = findCountryByCode(params.alpha3Code);
  function findCountryByCode(code) {
    const country = countries.find((currentElement) => {
      return currentElement.alpha3Code === code;
    });
    return country;
  }

  return (
    <div className="col-7">
      <div>
        <img
          src={
            'https://flagpedia.net/data/flags/icon/72x54/' +
            countriesSelect.alpha2Code.toLowerCase() +
            '.png'
          }
          alt="bandeira"
          style={{ width: 250 }}
        />
        <h1>{countriesSelect.name.common}</h1>
        <div className="d-flex justify-content-between">
          <p>Capital</p>
          <p>{countriesSelect.capital}</p>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-between">
          <p>Area</p>
          <p>{countriesSelect.area} Km²</p>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-between">
          <p>Borders</p>
          <ul className="d-block">
            {countriesSelect.borders.map((fronteira) => {
              return (
                <Link key={fronteira} to={`/${fronteira}`}>
                  <li style={{ listStyle: 'none' }}>
                    {findCountryByCode(fronteira).name.common}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
