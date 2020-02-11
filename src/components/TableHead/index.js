import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import './th.css'

const TableHead = ({ handleSort, isSorted, sortValue }) => {
  const tableHeader = ['Flag', 'Name', 'Languages', 'Population', 'Region']
  return(
      <tr>
        {tableHeader.map(item => 
          <th 
            key={item}
            onClick={()=>handleSort(item)}>
          {item}
          {item === sortValue && 
            (isSorted ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : (
              <FontAwesomeIcon icon={faCaretDown} />
              )
            )}
          </th>
          )}
      </tr>  
  )
}

TableHead.displayName = 'TableHead'

export default TableHead