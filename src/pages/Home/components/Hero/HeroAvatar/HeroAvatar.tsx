// css
import './HeroAvatar.css';

// assets
import heroAvatar from '/hero-avatar.png';

const HeroAvatar = () => {
    return (
        <>
            <div
                className="rounded-full w-40 max-sm:w-28 sm:w-36 2xl:w-72 h-40 max-sm:h-28 sm:h-36 2xl:h-72 animate-bounce border-4 border-blue-500 shadow-2xl drop-shadow-2xl"
            >
                <img src={heroAvatar} alt="AT Dilakshan" className='rounded-full w-full h-full' />
            </div>
        </>
    );
};

export default HeroAvatar;