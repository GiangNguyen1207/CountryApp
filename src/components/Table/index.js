import React from 'react'
import PropTypes from 'prop-types'

import TableHead from '../TableHead'
import TableRow from '../TableRow'
import './table.css'

const Table = ({ countryList, handleSort, isSorted, sortValue }) => {
  return(
    <table>
      <thead>
        <TableHead 
          handleSort= {handleSort}
          isSorted={isSorted}
          sortValue={sortValue}
        />
      </thead>
      <tbody>
        {countryList.map(country => {
          return <TableRow 
            key = {country.name}
            name = {country.name}
            link = {country.flag}
            languages = {country.languages}
            population = {country.population}
            region = {country.region}/>
        })}
      </tbody>
    </table>
  )
}

Table.displayName = 'Table'
Table.propTypes = {
  countryList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSort: PropTypes.func,
  isSorted: PropTypes.bool,
  sortValue: PropTypes.string
}

export default Table