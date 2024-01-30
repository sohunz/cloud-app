import Navbar from "./components/header/Navbar";
import Advantage from "./pages/Advantage";
import Client from "./pages/Client";
import Hero from "./pages/Hero";
import Price from "./pages/Price";
import Support from "./pages/Support";


const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Client/>
            <Support />
            <Advantage />
            <Price />
        </div>
    )
};

export default App;
