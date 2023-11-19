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
                className="flex justify-between items-center m-auto p-3 bg-white dark:bg-black" 
            >
                <Brand />
                <ThemeSwitch />
            </nav>
        </>
    );
};

export default Navbar;