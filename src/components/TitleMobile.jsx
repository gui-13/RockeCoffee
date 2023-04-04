const styles = {
  textShadow: '-1px -1px 0 #8257e5, 1px -1px 0 #8257e5, -1px 1px 0 #8257e5, 1px 1px 0 #8257e5'
}

export function TitleMobile() {
  return (
    <div className=" flex flex-col items-center">
      <h1 className="font-bold text-5xl text-center mt-10">Great Coffee</h1>
      <h1 style={styles} className="font-bold text-5xl text-center text-black"> &lt; Great Code /&gt;</h1>
    </div>
  )
}