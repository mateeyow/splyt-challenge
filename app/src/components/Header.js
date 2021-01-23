import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: white;
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  box-shadow: var(--shadow);
`
const Header = () => <HeaderContainer>Search for Nearby Taxi</HeaderContainer>

export default Header
