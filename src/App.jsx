import Cards from "./components/cards";
import Footer from "./components/Footer/footer";
import Forms from "./components/forms/form";
import Slider from "./components/Slider";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Forms />
      <Cards />
      <Slider />
      <Footer />
    </div>
  );
}
