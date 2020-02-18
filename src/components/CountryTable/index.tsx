import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import _orderBy from 'lodash/orderBy'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'

import fetchCountry from '../../redux/actions/Country'
import TableHeader from '../TableHeader'
import TableRows from '../TableRows'
import { AppState } from '../../type'
import './table.css'

type Props = {
  input: string,
  handleSort: (sortValue: string) => void,
  isSorted: boolean,
  sortValue: string,
  nameDetails: string,
  takeName: (nameDetails: string) => void
}

const CountryTable = ({ input, handleSort, isSorted, sortValue, takeName, nameDetails }: Props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountry())
  }, [])

  const countryList = useSelector((state: AppState) => (state.product.countries))

  if(countryList) {
    const filterCountries = countryList.filter(country => 
      country.name.toLowerCase().indexOf(input.toLowerCase()) !== -1)
    const sortedArr = _orderBy(filterCountries, [sortValue.toLowerCase()], 
      isSorted ? 'asc' : 'desc')

  return(
    <Table className='table'>
      <TableHead>
        <TableHeader
          handleSort={handleSort}
          isSorted={isSorted}
          sortValue={sortValue}
        />
      </TableHead>
      <TableBody>
      {sortedArr.map(country => {
          return <TableRows
            key={country.name}
            name={country.name}
            link={country.flag}
            languages={country.languages}
            population={country.population}
            region={country.region}
            takeName={takeName}
            nameDetails={nameDetails}
            />
        })}
      </TableBody>
    </Table>
  )} else return <div>loading</div>
}

CountryTable.displayName = 'CountryTable'
CountryTable.propTypes = {
  handleSort: PropTypes.func,
  isSorted: PropTypes.bool,
  sortValue: PropTypes.string
}

export default CountryTable