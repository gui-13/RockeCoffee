import { Header } from "./components/Header"
import { HomeMobile } from "./components/HomeMobile"
import { Title } from "./components/Title"

import { useMediaQuery } from 'react-responsive';

import imgCoffee from "./assets/img-coffee.png"
import blurLeft from "./assets/blur-1.png"
import blurRight from "./assets/blur-2.png"

import "./styles/global.css"



export function App() {
  const smallScreen = useMediaQuery({query: '(max-width: 504px)'})

  return (
    <div className=" flex flex-col items-center justify-between h-screen w-full">

      {
        smallScreen
        ?
        <HomeMobile/> 
        :
       (
        <>
          <Header />

          <Title />
        
          <img src={imgCoffee} className="w-1/2" alt="imagm de dois copos de café da Rocket Coffee"/>
          <img src={blurLeft} className="absolute bottom-0 left-0"/>
          <img src={blurRight} className="absolute top-0 right-0 -z-10"/>
        </>
       )

      }
      
    </div>
  )
}

