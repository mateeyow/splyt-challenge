import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  box-shadow: var(--shadow);
  padding: 1.5rem 1rem;
  min-height: 157px;
`

const Label = styled.label`
  color: var(--primary-color);
  text-transform: uppercase;
  display: block;
  margin-bottom: 8px;
`

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  margin-bottom: 8px;
`

const Error = styled.p`
  color: red;
`

const Slider = ({ value, onChange }) => {
  const [error, setError] = useState('')

  useEffect(() => {
    if (value < 1 || value > 50) {
      setError('Number of drivers should be more than 1 and less than 50')
      return
    }

    setError('')
  }, [value])

  return (
    <Container>
      <Label htmlFor='count'>Set number of drivers</Label>
      <Input
        name='count'
        id='count'
        type='number'
        value={value}
        autoFocus
        onChange={(evt) => onChange(parseInt(evt.target.value, 10))}
        max={50}
        min={1}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}

Slider.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}

export default Slider
