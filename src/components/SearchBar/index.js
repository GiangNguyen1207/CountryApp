import React from 'react'
import PropTypes from 'prop-types'

import './search.css'

const SearchInput = ({ input, handler }) => {
  return (
    <form>
      <input 
        value={input}
        placeholder='search'
        onChange={handler}>
      </input>
    </form>
  )
}

SearchInput.displayName = 'SearchInput'
SearchInput.propTypes = {
    input: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired
}

export default SearchInput