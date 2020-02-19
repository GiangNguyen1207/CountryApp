import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { AppState } from '../type';

const CountryDetails = () => {
  const history = useHistory()
  const { name } = useParams()
  const countryList = useSelector((state: AppState) => state.product.countries)
  const chosenCountries = countryList.filter(country => country.name === name)
  return(
    <>
      {chosenCountries.map(country =>
        <div key={country.name}>
          <img src={country.flag} alt='Country flag' width='200px' />
          <h1>{country.name}</h1>
          <b>Languages: </b>
           <span>{country.languages.map(lang => 
            <li key={lang.name}>{lang.name}</li>
          )}
          </span><br />
          <b>Population: </b>
            <span>{country.population}</span><br />
          <b>Region: </b>
            <span>{country.region}</span><br />
          <Button
            variant="contained"
            color="default"
            startIcon={<ArrowBackIosIcon />}
            onClick={()=>history.goBack()}
          >
            Back
          </Button>
        </div>
      )}
    </>
  )
}

export default CountryDetails