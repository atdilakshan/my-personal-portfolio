// css
import './HeroAvatar.css';

// assets
import heroAvatar from '/hero-avatar.png';

const HeroAvatar = () => {
    return (
        <>
            <div
                className="inline-block rounded-full w-40 max-sm:w-28 sm:max-md:w-36 h-40 max-sm:h-28 sm:max-md:h-36 animate-bounce border-4 border-blue-500 shadow-2xl drop-shadow-2xl"
            >
                <img src={heroAvatar} alt="AT Dilakshan" className='rounded-full w-full h-full' />
            </div>
        </>
    );
};

export default HeroAvatar;