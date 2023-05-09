import React from 'react'
import PropTypes from 'prop-types'
export default function Image(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
    />
  )
}

Image.propTypes={
    src: PropTypes.string.isRequired,
    alt: PropTypes.string

}
Image.defaultProps={
    src: 'https://i.imgur.com/QIrZWGIs.jpg'
}