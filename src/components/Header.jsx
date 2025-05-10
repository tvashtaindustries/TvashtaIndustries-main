import './Header.css'
import SearchBar from './SearchBar'
export default function Header() {
    return (
        <header className="header">
            <h1 className='header-title'>Tvashta Industries</h1>
            <SearchBar></SearchBar>
        </header>
    )
}