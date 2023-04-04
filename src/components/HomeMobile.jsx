import logoMobile from "../assets/logo-mobile.svg"
import menuOpen from "../assets/menu-buguer-open.svg"
import menuClose from "../assets/menu-buguer-close.svg"
import imgCoffee from "../assets/img-coffee.png"
import blur from "../assets/blur-mobile.png"

import { Button } from "./Button"
import { TitleMobile } from "./TitleMobile"

import { slide as Menu } from 'react-burger-menu'
import { stylesMenu } from "../styles/stylesMenu"
import { MenuMobile } from "./MenuMobile"

export function HomeMobile() {
  return (
    <div className="flex flex-col items-center justify-between max-h-screen">
      <header className="flex justify-between w-full px-10 py-5">
        <img src={logoMobile} alt="Logo Rocket Coffee mobile" />

      <Menu 
        styles={stylesMenu} 
        right 
        customBurgerIcon={ <img src={menuOpen} />} 
        customCrossIcon={<img src={menuClose} />}
        noTransition 
      >

        <MenuMobile />
        
      </Menu>

      </header>
     

      <h1 className="text-center px-10 py-5 font-semibold text-3xl">
        O café que fará seu código decolar para 
        o próximo nível.
      </h1>

      <Button />

      <TitleMobile />

      <img src={imgCoffee} className="absolute bottom-0 w-full -z-10" alt="imagm de dois copos de café da Rocket Coffee"/>
      <img src={blur} className="absolute bottom-0 w-full -z-10"/>

    </div>
  )
}