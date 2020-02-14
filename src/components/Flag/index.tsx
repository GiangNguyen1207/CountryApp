import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  link: string,
  name: string
}

const Flag = ({ link, name }: Props) => {
  return (
    <img
      src={link}
      alt={name}
      width='50px'
      height='auto'>
    </img>
  )
}

Flag.displayName = 'Flag'
Flag.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Flag