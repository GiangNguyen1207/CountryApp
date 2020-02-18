import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { Country, Language, AppState } from '../../type'
import Flag from '../Flag'
import { addCountryToCart } from '../../redux/actions/Cart'
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

const TableRows = ({ name, link, languages, population, region, takeName, nameDetails }: Props) => {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()

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
      <TableCell onClick={()=>takeName(name)}>{name}</TableCell>
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
          style={{backgroundColor: theme.forground}}
          onClick={handleAdd}
          disabled={existed}
        >
          Add
        </Button> 
      </TableCell>
    </TableRow>
  )
}

TableRows.displayName = 'TableRows'
TableRows.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.object),
  population: PropTypes.number,
  region: PropTypes.string,
}

export default TableRows