import "./components/HeaderComponent/Header"
import './App.css';
import Header from "./components/HeaderComponent/Header";
import Description from "./components/MainComponent/Description/Description";
import Footer from "./components/FooterComponent/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Description/>
        <Footer/>
    </div>
  );
}

export default App;
