import React from 'react'
import styled from 'styled-components'
import { MapContainer, TileLayer } from 'react-leaflet'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 100%;
  background-color: green;
`

const MapComponent = styled(MapContainer)`
  height: calc(100vh - 221px);
  width: 100%;
`

const Map = ({ children, onCreated, position = [51.5049375, -0.0964509] }) => (
  <Container>
    <MapComponent center={position} zoom={15} whenCreated={onCreated}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {children}
    </MapComponent>
  </Container>
)

Map.propTypes = {
  onCreated: PropTypes.func,
  position: PropTypes.array,
}

export default Map
