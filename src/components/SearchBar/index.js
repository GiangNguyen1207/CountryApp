import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: '50%',
    padding: '10px 0',
  },
}))

const SearchInput = ({ input, handler }) => {
  const classes = useStyles()
  return (
    <>
      <TextField 
        className={classes.root}
        id="standard-primary" 
        label="Search by country name"
        color="primary"
        value={input} 
        placeholder='search'
        onChange={handler} 
      />
    </>
  )
}

SearchInput.displayName = 'SearchInput'
SearchInput.propTypes = {
  input: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
}

export default SearchInput