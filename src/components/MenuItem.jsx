export function MenuItem ({children}) {
  return (
    <li 
      tabIndex="0" 
      className="border border-borderMenuItem pl-10 py-3 focus:pl-9 hover:text-zinc-300 focus:text-zinc-300 focus:border-l-4 focus:border-l-borderButton focus:outline-none focus:ring-0 focus:ring-offset-0"
    >
      {children}
    </li>   
  )
}
