import countries from '../../countries.json';
import { Link } from 'react-router-dom';

export function CountriesList() {
  return (
    <div>
      {countries.map((currentCountrie) => (
        <div key={currentCountrie.alpha2Code}>
          <Link
            className="list-group-item list-group-item-action"
            to={`/${currentCountrie.alpha3Code}`}
          >
            <img
              src={
                'https://flagpedia.net/data/flags/icon/72x54/' +
                currentCountrie.alpha2Code.toLowerCase() +
                '.png'
              }
              alt="bandeira"
            ></img>
            <p>{currentCountrie.name.official}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
