import countries from './countries.json';

export function CountryDetails({index}) {
  return (
    <div>
        <div>{/*flex colum */}
        <img src='https://flagpedia.net/data/flags/icon/72x54/' +
              countries[index].alpha2Code.toLowerCase() +
              '.png' alt="bandeira"/>
        <h2>{countries[index].name.comom}</h2>
        <div> {/*flex */}
            <p>Capital</p>
            <p>{countries[index].capital}</p>
        </div>
            <hr></hr>
        <div> {/*flex */}
            <p>Area</p>
            <p>{countries[index].area} Km²</p>
        </div>
            <hr></hr>
        <div> {/*flex */}
            <p>Borders</p>
            <ul>
                borders.map((elemento)=> <li>{elemento3 letras transformar no nome comum}</li>)
            </ul>
        </div>

             
      </div>
    </div>
  );
}
