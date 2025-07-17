import "./App.css";
import Header from "./components/Header";
import Tours from "./components/Tours";
import Destination from "./components/Destination";
import WhyUs from "./components/WhyUs";
import Deals from "./components/Deals";
import PerfectPlace from "./components/PerfectPlace";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center max-w-[1480px] mx-auto">
      <Header></Header>
      <Tours></Tours>
      <Destination></Destination>
      <WhyUs></WhyUs>
      <Deals></Deals>
      <PerfectPlace></PerfectPlace>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
