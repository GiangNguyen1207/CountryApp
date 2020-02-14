import React from 'react'
import PropTypes, { bool } from 'prop-types'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { withStyles, makeStyles } from '@material-ui/core/styles'

type Props = {
  handleSort: Function,
  isSorted: boolean, 
  sortValue: string
}

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const TableHeader = ({ handleSort, isSorted, sortValue } : Props) => {
  const clases = useStyles()
  const tableHeader = ['Flag', 'Name', 'Languages', 'Population', 'Region']

  return(
    <TableRow>
      {tableHeader.map(item => 
        <StyledTableCell key={item}>
          <div 
            className={clases.root}
            onClick={()=>handleSort(item)}>
            {item}
            {item === sortValue && 
              (isSorted ? (
                <ArrowUpwardIcon /> 
              ) : (
                <ArrowDownwardIcon />
              )
              )}
          </div>
        </StyledTableCell>
      )}
    </TableRow>  
  )
}

TableHeader.displayName = 'TableHeader'
TableHeader.propTypes = {
  handleSort: PropTypes.func,
  isSorted: PropTypes.bool,
  sortValue: PropTypes.string
}

export default TableHeader