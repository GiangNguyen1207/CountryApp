import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

type Props = {
  handleSort: (sortValue: string) => void,
  isSorted: boolean,
  sortValue: string
}

const TableHeader = ({ handleSort, isSorted, sortValue }: Props) => {
  const tableHeader = ['Flag', 'Name', 'Languages', 'Population', 'Region', 'Buy Flag']

  return (
    <TableRow>
      {tableHeader.map(item =>
        <TableCell key={item} >
          <div
            onClick={() => handleSort(item)}>
            {item}
            {item === sortValue &&
              (isSorted ? (
                <ArrowUpwardIcon />
              ) : (
                  <ArrowDownwardIcon />
                )
              )}
          </div>
        </TableCell>
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