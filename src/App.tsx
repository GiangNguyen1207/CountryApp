import React, {useState} from 'react'

import SearchInput from './components/SearchBar'
import CountryTable from './components/CountryTable'
import useCountry from './hooks/useCountry'

function App() {
  const [input, setInput] = useState('')
  const [sortValue, setSortValue] = useState('')
  const [isSorted, setIsSorted] = useState(true)
  const {filterCountries} = useCountry(input, sortValue, isSorted)

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    setInput(event.target.value)}

  const handleSort = (value: string) => {
    setIsSorted(!isSorted)
    setSortValue(value)
  }

  return (
    <>
      <SearchInput 
        input={input}
        handler={searchHandler}
      /> 
      <CountryTable 
        countryList={filterCountries} 
        handleSort={handleSort}
        isSorted={isSorted}
        sortValue={sortValue}
      />
    </>
  )
}

export default App
