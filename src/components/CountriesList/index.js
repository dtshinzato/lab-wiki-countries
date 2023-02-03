export function CountriesList({ alpha2Code, nomeOficial, alpha3Code }) {
  return (
    <>
      <div>
        <a
          className="list-group-item list-group-item-action"
          href="/{alpha3Code}"
        >
          <img
            src={
              'https://flagpedia.net/data/flags/icon/72x54/' +
              alpha2Code.toLowerCase() +
              '.png'
            }
            alt="bandeira"
          ></img>
          <p>{nomeOficial}</p>
        </a>
      </div>
    </>
  );
}
