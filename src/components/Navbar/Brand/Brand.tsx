import { Link } from 'react-router-dom';

import './Brand.css'

// json
import basicData from "../../../data/basic.json";

const Brand = () => {

    return (
        <>
            <Link to={basicData.siteUrl} className='font-charmonman font-bold text-black dark:text-white text-4xl max-sm:text-xl sm:max-md:text-2xl'>
                &lt;
                {basicData.name} <span className='text-blue-500'>{basicData.initial}</span>
                /&gt;</Link>
            {/* <Link className='font-charmonman text-black dark:text-white text-4xl max-sm:text-xl sm:max-md:text-2xl md:max-lg:text-3xl' to="projects">Projects</Link> */}
        </>
    );
};

export default Brand;