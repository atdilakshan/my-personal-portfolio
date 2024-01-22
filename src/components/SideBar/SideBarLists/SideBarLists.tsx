import { Link } from 'react-router-dom';

// css
import './SideBarLists.css';

const SideBarLists = () => {
    return (
        <>
            <div
                className="my-1 p-3"
            >
                <ul className="font-ubuntu">
                    <li className="underline decoration-solid decoration-1 underline-offset-auto my-3">
                        <Link to="" className="text-base lg:max-xl:text-sm text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 font-semibold">
                            <span className="text-gray-500 dark:text-gray-400">1. </span>About me
                        </Link>
                    </li>
                    <li className="underline decoration-solid decoration-1 underline-offset-auto my-3">
                    <Link to="" className="text-base lg:max-xl:text-sm text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 font-semibold">
                            <span className="text-gray-500 dark:text-gray-400">2. </span>Experiences
                        </Link>
                    </li>
                    <li className="underline decoration-solid decoration-1 underline-offset-auto my-3">
                        <Link to="" className="text-base lg:max-xl:text-sm text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 font-semibold">
                            <span className="text-gray-500 dark:text-gray-400">3. </span>Achievements
                        </Link>
                    </li>
                    <li className="underline decoration-solid decoration-1 underline-offset-auto my-3">
                        <Link to="" className="text-base lg:max-xl:text-sm text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 font-semibold">
                            <span className="text-gray-500 dark:text-gray-400">4. </span>Education
                        </Link>
                    </li>
                    <li className="underline decoration-solid decoration-1 underline-offset-auto my-3">
                        <Link to="" className="text-base lg:max-xl:text-sm text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 font-semibold">
                            <span className="text-gray-500 dark:text-gray-400">5. </span>Works
                        </Link>
                    </li>
                    <li className="underline decoration-solid decoration-1 underline-offset-auto my-3">
                        <Link to="" className="text-base lg:max-xl:text-sm text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 font-semibold">
                            <span className="text-gray-500 dark:text-gray-400">6. </span>Articles
                        </Link>
                    </li>
                    <li className="underline decoration-solid decoration-1 underline-offset-auto my-3">
                        <Link to="" className="text-base lg:max-xl:text-sm text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 font-semibold">
                            <span className="text-gray-500 dark:text-gray-400">7. </span>Contact me
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SideBarLists;