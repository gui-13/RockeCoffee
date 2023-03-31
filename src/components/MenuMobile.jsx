import logoMobile from '../assets/logo-mobile.svg'
import { MenuItem } from './MenuItem'

export function MenuMobile () {
  return (
    <div>
      <img src={logoMobile} alt="Logo RocketCoffe" className='ml-10 mb-7' />
    <nav>
      <ul className="flex flex-col w-screen">
        <MenuItem>
          Home
        </MenuItem>
        <MenuItem>
          Menu
        </MenuItem>
        <MenuItem>
          Recompensas
        </MenuItem>
        <MenuItem>
          Gift Cards
        </MenuItem>
        <MenuItem>
          Lojas
        </MenuItem>
      </ul>
    </nav>
    </div>
  )
}