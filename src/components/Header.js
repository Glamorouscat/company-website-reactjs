function Header() {
  return (
    <header>
      <video src="./video.mp4?version=2023" loop autoPlay muted></video>
      <h1>Bringing Natural Beauty To Your Home.</h1>
      <div className="row">
        {/* 
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
        */}
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
