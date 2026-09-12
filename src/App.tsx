import logo from "./assets/logo-text.png";
function App() {
  return (
    <>
      <nav>
        <img src={logo} alt="" />
        <div>
          <ul>
            <li>
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
        <div>
          <ul>
            <li>
              <a href="">Sign In</a>
            </li>
          </ul>
          <button>Sign Up</button>
        </div>
      </nav>
    </>
  );
}

export default App;
