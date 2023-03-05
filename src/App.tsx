import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Mobile from "./components/Mobile/Mobile";
import Experts from "./components/Experts/Experts";
import Healthcare from "./components/Healthcare/Healthcare";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Banner/>
            <Mobile/>
            <Experts/>
            <Healthcare/>
        </div>
    );
}

export default App;
