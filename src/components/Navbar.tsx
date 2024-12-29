import NavbarItem from "./NavbarItem";

const Navbar = ({ closeNavbar }: { closeNavbar: Function }) => (
  <nav className="navbar">
    <ul className="navbar-list">
      <NavbarItem to="/" iconClass="fa fa-home" label="Domů" />
      <NavbarItem to="/info/o-me" iconClass="fa fa-user" label="O mě" />
      <NavbarItem to="/info/kurz" iconClass="fa fa-info" label="Info" />
      <NavbarItem to="/galerie" iconClass="fa fa-image" label="Galerie" />
      <NavbarItem to="/kontakty" iconClass="fa fa-envelope" label="Kontakty" />
    </ul>
    <button onClick={() => closeNavbar()} className="close-navbar">
      <i className="fa fa-angle-left"></i>
      <i className="fa fa-angle-left"></i>
    </button>
  </nav>
);

export default Navbar;
