import React from 'react'
import logo from '../assets/investment-calculator-logo.png'

const Header = () => {
  return (
    <>
      <header id="header">
        <img src={logo} alt="Logo showing the money bag" />
        <h1>Investment Calculator</h1>
      </header>
    </>
  )
}

export default Header