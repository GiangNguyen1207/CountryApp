import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Language } from '../../type'
import Flag from '../Flag'

type Props = {
  name: string,
  link: string,
  languages: Language[],
  population: number,
  region: string
}

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }),
)(TableRow);

const TableRows = ({ name, link, languages, population, region }: Props) => {
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
  population: PropTypes.number,
  region: PropTypes.string,
}

export default TableRows