import { Switch } from '@headlessui/react';

// themeContext
import { useTheme } from '../../../hooks/themeContext';

// css
import './ThemeSwitch.css';

const ThemeSwitch: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <div
                className="flex justify-between"
            >
                <Switch
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    className=" bg-black dark:bg-white relative inline-flex h-6 w-11 items-center rounded-full"
                >
                    <span
                        className="translate-x-1 dark:translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white dark:bg-black transition"
                    />
                </Switch>
            </div>
        </>
    );
};

export default ThemeSwitch;