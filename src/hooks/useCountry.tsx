import { useEffect, useState } from 'react'
import _orderBy from 'lodash/orderBy'

import { Country } from '../type'

const useCountry = (input: string, sortValue: string, isSorted: boolean) => {
  const [countryList, setCountryList] = useState<Country[]>([])
  const [error, setError] = useState(null)
  const [filterCountries, setFilterCountries] = useState<Country[]>([])

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await (res.json())
        setCountryList(data)
      } catch (err) {
        setError(err)
        console.log(error)
      }
    }; 
    fetchData()
  }, [])

  useEffect(() => {
    const filterCountries = countryList.filter(country => 
      country.name.toLowerCase().indexOf(input.toLowerCase()) !== -1)
    
    const sortedArr = _orderBy(filterCountries, [sortValue.toLowerCase()], 
      isSorted ? 'asc' : 'desc')

    setFilterCountries(sortedArr)
    
  }, [input, countryList, sortValue, isSorted])

  return {filterCountries}
}

export default useCountry