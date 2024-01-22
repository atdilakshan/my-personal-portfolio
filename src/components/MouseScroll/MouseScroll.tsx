// css
import './MouseScroll.css';

const MouseScroll = () => {
    return (
        <>
            <div className="text-center scroll-btn">
                <div className="relative w-10 h-16 mx-auto box-border border-4 border-black dark:border-white rounded-3xl mouse">
                    <div className="absolute left-1/2 w-2 h-2 -mt-1.5 -ml-1 dark:bg-white bg-black rounded-full dot"></div>
                </div>
            </div>
        </>
    );
};

export default MouseScroll;