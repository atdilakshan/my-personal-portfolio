// css
// import MouseScroll from '../../../../components/MouseScroll';
// import Navbar from '../../../../components/Navbar';
import './Hero.css';

// component
import HeroAvatar from './HeroAvatar';
import HeroDesc from './HeroDesc';

const Hero = () => {
    return (
        <>
            <div
                className="relative"
            >

                <div className='flex flex-col items-center justify-center mx-auto absolute top-40 left-1/4 w-1/2'>
                    <HeroAvatar />
                    <HeroDesc />
                </div>
            </div>
        </>
    );
};

export default Hero;