import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';

type Props = {
  input: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
  })
);

const SearchInput = ({ input, handler }: Props) => {
  const classes = useStyles();
  return (
    <>
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={input}
        placeholder="search"
        onChange={handler}
      />
    </>
  );
};

export default SearchInput;
