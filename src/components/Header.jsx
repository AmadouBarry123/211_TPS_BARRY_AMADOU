import logo from '../assets/logoPage.jpg';
import '../css/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" /> 
      </div>
      <h1>MySocial</h1>
    </header>
  );
}

export default Header;
