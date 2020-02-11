import React from 'react'

import Flag from '../Flag';
import './tr.css'

const TableRow = ({ name, link, languages, population, region }) => {
  return(
    <tr>
      <td><Flag 
        link={link}
        name={name}/>
      </td>
      <td>{name}</td>
      <td>{languages.map(lang => {
        return(
          <li key={lang.name}>
            {lang.name}
          </li>
        )
      })}
      </td>
      <td>{population}</td>
      <td>{region}</td>
    </tr>
        )
      }

TableRow.displayName = 'TableRow'

export default TableRow 