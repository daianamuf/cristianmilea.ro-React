function Nav() {
  return (
    <>
      <nav className="nav sticky">
        <div className="nav-logo logo">THE FASTEST</div>
        <ul className="nav-list">
          <li className="nav-list--item">
            <button className="btn btn-about nav-list--item">Despre</button>
          </li>
          <li className="nav-list--item">
            <button className="btn btn-gallery nav-list--item">Galerie</button>
          </li>
          <li className="nav-list--item">
            <button className="btn btn-contact nav-list--item">Contact</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
