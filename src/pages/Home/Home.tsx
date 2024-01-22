// css
import './Home.css';

// component
import Hero from './components/Hero';
// import About from './components/About';

const Home = () => {
    return (
        <>
        <div
            className="relative h-screen"
        >
                <Hero />
                {/* <About /> */}
            </div>
        </>
    );
};

export default Home;