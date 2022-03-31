import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://ih-countries-api.herokuapp.com/countries';

function CountryDetails() {
  const params = useParams();
  const [data, setData] = useState([]);

  const urlImage = 'https://flagpedia.net/data/flags/icon/72x54/';

  useEffect(() => {
    async function fetchCountries() {
      const { data } = await axios.get(url);
      setData(data);
    }
    fetchCountries();
  }, []);
  const countryObject = data.find((elem) => {
    return elem.alpha3Code === params.alpha3Code;
  });

  if (!countryObject) {
    return null;
  }
  return (
    <>
      <div>CountryDetails</div>
      <img
        src={urlImage + countryObject.alpha2Code.toLowerCase() + '.png'}
        alt="Flag of country"
      ></img>
      <h1>{countryObject.name.common}</h1>
      <h1>Area: {countryObject.area}</h1>
      <h1>Borders:</h1>
      {countryObject.borders.map((elem) => {
        const countryName = data.filter((country) => {
          return country.alpha3Code === elem;
        });
        return (
          <h4 key={countryName[0].alpha3Code}>
            <Link to={`/${countryName[0].alpha3Code}`}>
              {countryName[0].name.common}
            </Link>
          </h4>
        );
      })}
    </>
  );
}

export default CountryDetails;
