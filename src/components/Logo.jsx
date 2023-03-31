import logo from "../assets/logo-desktop.svg"
import logoMobile from "../assets/logo-mobile.svg"

import { useMediaQuery } from 'react-responsive';


export function Logo() {

  const smallScreen = useMediaQuery({query: '(max-width: 705px)'})

  return (
    <>
      {
        smallScreen
        ?
        <img src={logoMobile} alt="Logo RocketCoffee" />
        :
        <img src={logo} alt="Logo RocketCoffee" />
      }
    </>
  )
}