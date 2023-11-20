import { Link } from 'react-router-dom';

import './Brand.css'

// json
import basicData from "../../../data/basic.json";

const Brand = () => {

    return (
        <>
            <Link className='font-charmonman text-black dark:text-white text-4xl max-sm:text-xl sm:max-md:text-2xl md:max-lg:text-3xl' to={basicData.siteUrl}>&lt;{basicData.name}/&gt;</Link>
        </>
    );
};

export default Brand;