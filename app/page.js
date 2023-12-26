export default function Home() {
  return (
    <main className="bg-white">
      <header 
      style={{
      backgroundImage: 'url("/images/main.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '250px',
      padding: '35px 0 0 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'}}>
        <div className=" flex justify-between items-center font-serif  text-white">
          <span className="text-5xl ml-10  font-semibold">Tiff India</span>
          <div className="space-x-10 mr-10 mt-2 font-semibold text-lg">
            <button className="">Home</button>
            <button className="">About</button>
            <button className="">Contact Us</button>
            <input 
              type="text" 
              placeholder="Search your fav..."
              className="border p-1 px-3 font-medium text-black rounded-lg w-[250px] bg-gray-300 placeholder-gray-700"
            />
            <button className="">Account</button>
          </div>
        </div>
        <span className="font-serif text-4xl text-white font-semibold text-right p-5 mx-10 tracking-wider">We serve what we eat!</span>
      </header>
    </main>
  )
}
