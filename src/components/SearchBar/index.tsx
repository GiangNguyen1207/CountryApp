import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
  input: string,
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      width: '50%',
      padding: '10px 0',
      },
  }),
);

const SearchInput = ({ input, handler }: Props) => {
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