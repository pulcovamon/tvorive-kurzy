const Header = ({ displayNavbar }: { displayNavbar: Function }) => {
  return (
    <div className="header header-brush-effect">
      <button onClick={() => displayNavbar()} className="hamburger">
        <span className="icon">
          <i className="fa fa-bars"></i>
        </span>
      </button>
      <h1>Tvořivé Kurzy Eva 🎨🖌️</h1>
    </div>
  );
};

export default Header;
