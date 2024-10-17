function Navbar({ totalItems }) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Navbar <span className="badge text-bg-secondary">{totalItems}</span>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
