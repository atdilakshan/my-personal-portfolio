// css
import Navbar from '../../../../components/Navbar';
import './Hero.css';

// component
import HeroAvatar from './HeroAvatar';
import HeroDesc from './HeroDesc';

const Hero = () => {
    return (
        <>
            <div
                className="h-screen bg-white dark:bg-black"
            >
                <Navbar />

                <div className='flex flex-col items-center justify-center mx-auto mt-20 w-1/2'>
                    <HeroAvatar />
                    <HeroDesc />
                </div>
            </div>
        </>
    );
};

export default Hero;