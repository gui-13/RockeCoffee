import { Button } from "./Button";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="flex justify-evenly items-center mt-10 w-full gap-12 px-10 flex-wrap">
      
      <Logo />

      <Menu />

      <Button /> 

    </header>
  )
}