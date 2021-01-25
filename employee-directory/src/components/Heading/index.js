import "./style.css";

function Header({ input, setInput }) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span>
          <h1>
            <a id="title" href="">
              Employee Directory
            </a>
          </h1>
        </span>

        
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </form>
      </nav>
    </div>
  );
}

export default Header;