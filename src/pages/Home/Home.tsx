// css
import './Home.css';

// component
import Hero from './components/Hero';
import About from './components/About';

const Home = () => {
    return (
        <>
            <div
                className=""
            >
                <Hero />
                <About />
            </div>
        </>
    );
};

export default Home;