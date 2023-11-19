import { Link } from 'react-router-dom';

import './Brand.css'

// json
import basicData from "../../../data/basic.json";

const Brand = () => {

    return (
        <>
            <div
                className=""
            >
                <Link to="" className='text-black dark:text-white'>&lt;{basicData.name}/&gt;</Link>
            </div>
        </>
    );
};

export default Brand;