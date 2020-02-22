import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { Country, Language, AppState } from '../../type'
import Flag from '../Flag'
import { addCountryToCart } from '../../redux/actions/cart'
import ThemeContext from '../../Context'

type Props = {
  name: string,
  link: string,
  languages: Language[],
  population: number,
  region: string,
  nameDetails: string,
  takeName: (nameDetails: string) => void
}

const useStyles = makeStyles({
  root: {
    '&$disabled': {
      background: 'rgba(0, 0, 0, 0.12)',
    },
  },
  disabled: {},
});

const TableRows = ({ name, link, languages, population, region, takeName }: Props) => {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleAdd = () => {
    const country: Country = {
      flag: link,
      name: name,
      languages: languages,
      population: population,
      region: region
    }
    dispatch(addCountryToCart(country))
  }

  const addedCountries = useSelector((state: AppState) => state.cart.countryCart)
  
  const existed = addedCountries.some(item => item.name === name)

  return(
    <TableRow>
      <TableCell>
        <Flag 
          link={link}
          name={name}
        />
      </TableCell>
      <TableCell 
        style={{cursor:'pointer'}} 
        onClick={()=>takeName(name)}
      >{name}
      </TableCell>
      <TableCell>{languages.map(lang => {
        return(
          <li key={lang.name}>
            {lang.name}
          </li>
        )
      })}
      </TableCell>
      <TableCell>{population}</TableCell>
      <TableCell>{region}</TableCell>
      <TableCell>
        <Button 
          variant="contained" 
          style={{backgroundColor: theme.forground, color: theme.color}}
          onClick={handleAdd}
          disabled={existed}
          classes={{
            disabled: classes.disabled}}
        >
          Add
        </Button> 
      </TableCell>
    </TableRow>
  )
}

export default TableRows