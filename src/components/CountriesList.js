import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const url = 'https://ih-countries-api.herokuapp.com/countries';

function CountriesList() {
  const [data, setData] = useState([]);
  const urlImage = 'https://flagpedia.net/data/flags/icon/72x54/';

  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    fetchCountries();
  }, []);

  return (
    <div>
      <h2>CountriesList</h2>
      <div>
        {data.map((elem) => {
          return (
            <div key={elem.alpha3Code}>
              <img
                src={urlImage + elem.alpha2Code.toLowerCase() + '.png'}
                alt="Flag of country"
              />
              <br />
              <Link to={`${elem.alpha3Code}`}>{elem.name.common}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
