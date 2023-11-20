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
                className="flex justify-between items-center mx-auto p-4 bg-white dark:bg-black" 
            >
                <Brand />
                <ThemeSwitch />
            </nav>
        </>
    );
};

export default Navbar;