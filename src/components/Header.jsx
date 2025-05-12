
import './Header.css';
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header className="header">
      <h1 className='header-title'>Tvashta Industries</h1>
      <SearchBar></SearchBar>
    </header>
  );
};

export default Header;
