import { Link } from "react-router-dom";

interface NavbarItemProps {
  to: string;
  iconClass: string;
  label: string;
  location: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  to,
  iconClass,
  label,
  location,
}) => (
  <li className={`navbar-item ${location === to ? "active" : ""}`}>
    <Link to={to} aria-label={label}>
      <span className="icon">
        <i className={iconClass}></i>
      </span>
      {label}
    </Link>
  </li>
);

export default NavbarItem;
