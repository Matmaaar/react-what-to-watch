const Navbar = () => (
  <div>
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center p-4 bg-black/20 px-20">
      <div className="text-white font-bold"><img className="h-10" src="assets/logo-final.png" alt="" /></div>
        <a className="font-bold ml-8" href="/">Home</a>
        <a className="font-bold ml-4" href="/movies">Movies</a>
        <a className="font-bold ml-4" href="/tv-show">TV Show</a>
        <a className="font-bold ml-4" href="/about">About</a>
        <a className="font-bold ml-4" href="/favorites">Favorites</a>


    </nav>
  </div>
);

export default Navbar;
