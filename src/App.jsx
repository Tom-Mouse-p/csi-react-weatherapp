import Weather from "./components/weathersection/Weather";
import Topbar from "./components/weathersection/Topbar";
import TopCitiesSection from "./components/topCities/TopCities";

function App() {
    return (
        <div>
            <Topbar />
            <div className="centered">
                <Weather />
            </div>
            <TopCitiesSection />
        </div>
    );
}

export default App;
