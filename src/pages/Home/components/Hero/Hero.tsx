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

                <div className='absolute top-40 left-1/4 w-1/2 text-center'>
                    <HeroAvatar />
                    <HeroDesc />
                </div>
        </>
    );
};

export default Hero;