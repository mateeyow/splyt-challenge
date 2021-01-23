import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Map from './components/Map'
import Slider from './components/Slider'
import { fetch } from './utils'
import Marker from './components/Marker'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: min(420px, 100%);
`

const defaultCenter = [51.5049375, -0.0964509]

const App = () => {
  const [position, setPosition] = useState(defaultCenter)
  const [center, setCenter] = useState(defaultCenter)
  const [map, setMap] = useState(null)
  const [count, setCount] = useState(10)
  const [drivers, setDrivers] = useState([])

  const onMove = () => {
    const { lat, lng } = map.getCenter()
    setPosition([lat, lng])
  }

  const onMoveCenter = () => {
    const { lat, lng } = map.getCenter()
    setCenter([lat, lng])
  }

  useEffect(() => {
    const fetchData = async () => {
      const [lat, long] = position
      const url = `/drivers?lat=${lat}&long=${long}&count=${count}`

      try {
        const { drivers: driversRes } = await fetch.get(url)
        setDrivers(driversRes)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [position, count])

  useEffect(() => {
    map?.on?.('moveend', onMove)
    map?.on?.('move', onMoveCenter)

    return () => {
      map?.off?.('moveend', onMove)
      map?.off?.('move', onMoveCenter)
    }
  }, [map])

  return (
    <Container>
      <Header />
      <Map onCreated={setMap} position={position}>
        {drivers.map((driver) => (
          <Marker
            key={driver.driver_id}
            position={[driver.location.latitude, driver.location.longitude]}
          />
        ))}
        <Marker position={center} type='center' />
      </Map>
      <Slider value={count} onChange={setCount} />
    </Container>
  )
}
export default App
