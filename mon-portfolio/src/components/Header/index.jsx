import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <header>
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"

                    />
                    <h1 className="main-title">Mon Portfolio</h1>
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
