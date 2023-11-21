import './MacOsWindowCard.css';

// Define the prop types for the component
interface MacOsWindowCard {
    title: string;
    content: string;
}

const MacOsWindowCard: React.FC<MacOsWindowCard> = ({ title, content }) => {
    return (
        <>
            {/* window */}
            <div className='bg-white dark:bg-black border border-gray-400  dark:border-gray-900 my-4 mx-auto w-1/2 h-auto rounded-md shadow-xl'>

                {/* titlebar */}
                <div className='h-5 flex items-center border-b-2 border-b-gray-400  dark:border-b-gray-900 p-1 rounded-t-md bg-gradient-to-t from-gray-200 dark:from-gray-700 via-gray-200 dark:via-gray-700 to-gray-100 dark:to-gray-700'>
                    {/* buttons */}
                    <div className='float-left flex w-1/3'>
                        {/* close button */}
                        <div className='rounded-full bg-red-500 dark:bg-gray-400 h-3 w-3 border border-red-600 mx-1 dark:border-0'>
                        </div>
                        {/* minimize button */}
                        <div className='rounded-full bg-yellow-500 dark:bg-gray-400 h-3 w-3 border border-yellow-600 mx-1 dark:border-0'>
                        </div>
                        {/* zoom button */}
                        <div className='rounded-full bg-green-500 dark:bg-gray-400 h-3 w-3 border border-green-600 mx-1 dark:border-0'>
                        </div>
                    </div>
                    {/* title */}
                    <div className='w-1/3 text-center text-gray-600 text-base dark:text-white'>{title}</div>
                    <div className='w-1/3'></div>
                </div>

                {/* content */}
                <div className='p-4 text-black dark:text-white'>{content}</div>
            </div>
        </>
    );
};

export default MacOsWindowCard;