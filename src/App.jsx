import Navbar from "./components/header/Navbar";
import Advantage from "./pages/Advantage";
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
            <Advantage />
        </div>
    )
};

export default App;
