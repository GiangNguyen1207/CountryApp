import React, { useState } from 'react';
import { useHistory } from 'react-router';

import AppBarComponent from '../components/AppBar';
import CountryTable from '../components/CountryTable';

const Homepage = () => {
  const history = useHistory();
  const [input, setInput] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [isSorted, setIsSorted] = useState(true);
  const [nameDetails, setnameDetails] = useState('');

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  const handleSort = (value: string) => {
    setIsSorted(!isSorted);
    setSortValue(value);
  };

  const takeName = (name: string) => {
    setnameDetails(name);
    history.push(`/products/${name}`);
  };

  return (
    <div>
      <AppBarComponent input={input} handler={searchHandler} />
      <CountryTable
        input={input}
        handleSort={handleSort}
        isSorted={isSorted}
        sortValue={sortValue}
        takeName={takeName}
        nameDetails={nameDetails}
      />
    </div>
  );
};

export default Homepage;
