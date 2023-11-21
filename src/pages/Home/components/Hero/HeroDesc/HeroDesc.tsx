// css
import './HeroDesc.css';

// json
import basicData from "../../../../../data/basic.json";

const HeroDesc = () => {

    return (
        <>
            <div
                className="text-center"
            >
                <h1 className='font-ubuntu text-5xl max-sm:text-2xl sm:max-md:text-3xl 2xl:text-7xl font-bold text-black dark:text-white'>
                    {basicData.name} <span className='text-blue-500'>{basicData.initial}</span>
                </h1>
                <p className='text-black dark:text-white text-2xl max-sm:text-base sm:max-md:text-xl 2xl:text-5xl'>Software Engineer</p>
            </div>
        </>
    );
};

export default HeroDesc;