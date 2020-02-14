import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'

import TableHeader from '../TableHeader'
import TableRows from '../TableRows'
import { Country } from '../../type'

type Props = {
  countryList: Country[],
  handleSort: Function,
  isSorted: boolean,
  sortValue: string
}

const CountryTable = ({ countryList, handleSort, isSorted, sortValue }: Props) => {
  return(
    <Table>
      <TableHead>
        <TableHeader
          handleSort={handleSort}
          isSorted={isSorted}
          sortValue={sortValue}
        />
      </TableHead>
      <TableBody>
        {countryList.map(country => {
          return <TableRows
            key={country.name}
            name={country.name}
            link={country.flag}
            languages={country.languages}
            population={country.population}
            region={country.region}/>
        })}
      </TableBody>
    </Table>
  )
}

CountryTable.displayName = 'CountryTable'
CountryTable.propTypes = {
  countryList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSort: PropTypes.func,
  isSorted: PropTypes.bool,
  sortValue: PropTypes.string
}

export default CountryTable