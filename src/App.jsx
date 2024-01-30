import Navbar from "./components/header/Navbar";
import Client from "./pages/Client";
import Hero from "./pages/Hero";
import Support from "./pages/Support";


const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Client/>
            <Support />
        </div>
    )
};

export default App;
