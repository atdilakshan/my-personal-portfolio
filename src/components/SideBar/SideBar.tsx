// css
import './SideBar.css';

// components
import SideBarAvatar from './SideBarAvatar';
import SideBarAbout from './SideBarAbout';
import SideBarLists from './SideBarLists';

const SideBar = () => {
    return (
        <>
            <aside className="top-[72px] w-1/5 fixed z-50 shadow-lg p-4 h-[90vh] overflow-auto rounded-r-sm text-center sidebar max-lg:hidden">
                <SideBarAvatar />
                <SideBarAbout />
                <SideBarLists />
            </aside>
        </>
    );
};

export default SideBar;