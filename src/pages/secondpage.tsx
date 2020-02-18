import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { AppState } from '../type';

const CountryDetails = () => {
  const { name } = useParams()
  const countryList = useSelector((state: AppState) => state.product.countries)
  const chosenCountries = countryList.filter(country => country.name === name)
  return(
    <>
      {chosenCountries.map(country =>
        <div key={country.name}>
          <img src={country.flag}/>
          <h1>{country.name}</h1>
          <h2>{country.languages.map(lang => 
            <li>{lang.name}</li>
          )}
          </h2>
          <h3>{country.population}</h3>
          <h3>{country.region}</h3>
        </div>
      )}
    </>
  )
}

export default CountryDetails