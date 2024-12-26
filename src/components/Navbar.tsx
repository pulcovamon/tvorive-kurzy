import NavbarItem from "./NavbarItem";

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <NavbarItem to="/" iconClass="fa fa-home" label="Domů" />
      <NavbarItem to="/info" iconClass="fa fa-info" label="Info" />
      <NavbarItem to="/kurzy" iconClass="fa fa-cogs" label="Kurzy" />
      <NavbarItem to="/kontakty" iconClass="fa fa-envelope" label="Kontakty" />
    </ul>
  </nav>
);

export default Navbar;
