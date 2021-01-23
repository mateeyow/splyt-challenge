import React from 'react'
import { Marker as LeafletMarker } from 'react-leaflet'
import { icon as leafletIcon } from 'leaflet'
import PropTypes from 'prop-types'

const getIcon = (iconUrl) =>
  leafletIcon({
    iconUrl,
    iconSize: [50, 50],
  })

const Marker = ({ type = 'car', ...rest }) => {
  const iconUrl = type === 'car' ? '/car.svg' : '/marker.svg'
  return <LeafletMarker {...rest} icon={getIcon(iconUrl)} />
}

Marker.propTypes = {
  type: PropTypes.oneOf(['car', 'center']),
}

export default Marker
