import NavbarItem from "./NavbarItem";

const Navbar = ({
  closeNavbar,
  location,
}: {
  closeNavbar: Function;
  location: string;
}) => (
  <nav className="navbar">
    <div className="navbar-brush-effect">
    <div className="navbar-shadow">
    <ul className="navbar-list">
      <NavbarItem location={location} to="/" iconClass="fa fa-home" label="Domů" />
      <NavbarItem location={location} to="/o-mne" iconClass="fa fa-user" label="O mně" />
      <NavbarItem location={location} to="/info" iconClass="fa fa-info" label="Info" />
      <NavbarItem location={location} to="/galerie" iconClass="fa fa-image" label="Galerie" />
      <NavbarItem location={location} to="/kontakty" iconClass="fa fa-envelope" label="Kontakty" />
    </ul>
    <button onClick={() => closeNavbar()} className="close-navbar">
      <i className="fa fa-angle-left"></i>
      <i className="fa fa-angle-left"></i>
    </button>
    </div>
    </div>
  </nav>
);

export default Navbar;
