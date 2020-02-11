import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'

import Flag from '../Flag'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey[200],
    },
  },
}))(TableRow)


const TableRows = ({ name, link, languages, population, region }) => {
  return(
    <StyledTableRow>
      <StyledTableCell>
        <Flag 
          link={link}
          name={name}
        />
      </StyledTableCell>
      <StyledTableCell>{name}</StyledTableCell>
      <StyledTableCell>{languages.map(lang => {
        return(
          <li key={lang.name}>
            {lang.name}
          </li>
        )
      })}
      </StyledTableCell>
      <StyledTableCell>{population}</StyledTableCell>
      <StyledTableCell>{region}</StyledTableCell>
    </StyledTableRow>
  )
}

TableRows.displayName = 'TableRows'
TableRows.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.object),
  population: PropTypes.string,
  region: PropTypes.string,
}

export default TableRows