import './Header.css';
import logo from '../../assets/logo.png'

function Header() {

  return (
    <header>
      <img src={logo} alt="logo" className='header-logo'/>
    </header>
  )

}

export default Header;