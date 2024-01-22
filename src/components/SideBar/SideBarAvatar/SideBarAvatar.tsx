// css
import './SideBarAvatar.css';

// assets
import heroAvatar from '/hero-avatar.png';

const SideBarAvatar = () => {
    return (
        <>
            <div
                className="inline-block rounded-full w-28 h-28 border-4 border-blue-500 shadow-md drop-shadow-md my-1"
            >
                <img src={heroAvatar} alt="AT Dilakshan" className='rounded-full w-full h-full' />
            </div>
        </>
    );
};

export default SideBarAvatar;