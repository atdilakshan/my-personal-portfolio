//css
import './Navbar.css';

// json

// components
import ThemeSwitch from './ThemeSwitch';
import Brand from './Brand';

const Navbar = () => {
    return (
        <>
            <nav
                className="flex justify-between items-center w-11/12 m-auto p-2 "
            >
                <Brand />
                <ThemeSwitch />
            </nav>
        </>
    );
};

export default Navbar;