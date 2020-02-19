import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import _isEmpty from 'lodash/isEmpty'

import { removeCountryFromCart } from '../../redux/actions/Cart';
import { AppState, Country } from '../../type'

const ShoppingCart = () => {
  const dispatch = useDispatch()

  const countries = useSelector((state: AppState) => state.cart.countryCart)

  const localState = localStorage.getItem('cart')

  let countryList: Country[]
  if (!_isEmpty(localState)) {
    const localData = JSON.parse(localState || '')
    countryList = localData.countryCart
  } else {
    countryList = countries
  }

  return (
    <>
      {countries.length <= 0 && <div>No products in cart</div>}
      <List>
        {countryList.map(country => (
          <ListItem key={country.name}>
            <img src={country.flag} width='40px' alt='countryFlag' />
            {country.name} 
            <IconButton 
              aria-label="delete" 
              color="secondary"
              onClick={() => dispatch(removeCountryFromCart(country))}>
              <DeleteIcon/>
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ShoppingCart