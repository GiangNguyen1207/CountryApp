import React, {useState} from 'react';

import SearchInput from './components/SearchBar';
import Table from './components/Table';
import useCountry from './components/hooks/useCountry.js'

function App() {
  const [input, setInput] = useState('')
  const [sortValue, setSortValue] = useState('')
  const [isSorted, setIsSorted] = useState(true)
  const {filterCountries} = useCountry(input, sortValue, isSorted)

  const searchHanlder = (event) => {
    setInput(event.target.value)
  }

  const handleSort = (value) => {
    setIsSorted(!isSorted)
    setSortValue(value)
  }

  return (
    <div className="App">
      <SearchInput 
        input={input}
        handler={searchHanlder}
      /> 
      <Table 
        countryList={filterCountries} 
        handleSort={handleSort}
        isSorted={isSorted}
        sortValue={sortValue}
      />
    </div>
  );
}

export default App;
