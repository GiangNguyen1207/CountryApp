import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import { Country } from '../type'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
})

const CountryDetails = (): any => {
  const classes = useStyles()
  const history = useHistory()
  const { name } = useParams()

  const localCountryData = localStorage.getItem('Countries')
  const countryList: Country[] = JSON.parse(localCountryData || '')

  if(countryList) {
    const chosenCountries = countryList.filter(country => country.name === name)

    return(
      <div>
        {chosenCountries.map(country => (
          <Card className={classes.root} style={{margin: '0 auto'}} key={country.name}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Country Flag"
                height="140"
                image={country.flag}
                title="Country Flag"
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h1">
                <b>
                  {country.name}
                </b>
              </Typography>
              <Typography component="h3"><b>Languages: </b></Typography>
              <span>{country.languages.map(lang => 
                <li key={lang.name}>{lang.name}</li>
              )}
              </span><br />
              <Typography component="h3"><b>Population: </b></Typography>
              <span>{country.population}</span><br />
              <Typography component="h3"><b>Region: </b></Typography>
              <span>{country.region}</span><br />
              <CardActions>
                <Button
                  variant="contained"
                  color="default"
                  size='small'
                  startIcon={<ArrowBackIosIcon />}
                  onClick={()=>history.goBack()}
                >
              Back
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>
    )}
}

export default CountryDetails