import { Switch } from '@headlessui/react';

// themeContext
import { useTheme } from '../../../hooks/themeContext';

// css
import './ThemeSwitch.css';

const ThemeSwitch: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <Switch
                checked={theme === 'dark'}
                onChange={toggleTheme}
                className="bg-black dark:bg-white relative inline-flex h-6 2xl:h-12 w-11 2xl:w-24 items-center rounded-full"
                aria-label='themeSwitch'
            >
                <span
                    className="translate-x-1 2xl:translate-x-2 dark:translate-x-6 2xl:dark:translate-x-14 inline-block h-4 2xl:h-8 w-4 2xl:w-8 transform rounded-full bg-white dark:bg-black transition"
                />
            </Switch>
        </>
    );
};

export default ThemeSwitch;