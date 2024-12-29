import NavbarItem from "./NavbarItem";

const Navbar = ({
  closeNavbar,
  location,
}: {
  closeNavbar: Function;
  location: string;
}) => (
  <nav className="navbar">
    <ul className="navbar-list">
      <NavbarItem location={location} to="/" iconClass="fa fa-home" label="Domů" />
      <NavbarItem location={location} to="/info/o-me" iconClass="fa fa-user" label="O mě" />
      <NavbarItem location={location} to="/info/kurz" iconClass="fa fa-info" label="Info" />
      <NavbarItem location={location} to="/galerie" iconClass="fa fa-image" label="Galerie" />
      <NavbarItem location={location} to="/kontakty" iconClass="fa fa-envelope" label="Kontakty" />
    </ul>
    <button onClick={() => closeNavbar()} className="close-navbar">
      <i className="fa fa-angle-left"></i>
      <i className="fa fa-angle-left"></i>
    </button>
  </nav>
);

export default Navbar;