const Navbar = () => (
  <div>
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-black/10 px-20">
      <div className="text-white font-bold"><img className="h-10" src="assets/logo-final.png" alt="" /></div>
      <div className="flex gap-6 text-white">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/favorites">Favorites</a>
      </div>
    </nav>
  </div>
);

export default Navbar;
