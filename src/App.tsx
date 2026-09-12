import logo from "./assets/logo-text.png";
function App() {
  return (
    <>
      <nav className="flex justify-between items-center container mx-auto my-3">
        <img src={logo} alt="" />
        <div>
          <ul className="flex gap-9 font-light">
            <li className="text-[#DB2777]">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <ul>
            <li>
              <a href="">Sign In</a>
            </li>
          </ul>
          <button className="bg-[#DB2777] text-white py-1 px-4 rounded-2xl">
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
}

export default App;
