import './App.css';
import Header from "./component/Header";
import Maincontent from "./component/Maincontent";
import Contentone from "./component/Contentone";
import VorteileContent from "./component/VorteileContent";
import BanerUnverbindlich from "./component/BanerUnverbindlich";
import ContantEinrichten from "./component/ContantEinrichten";
import Cards from "./component/Cards";
import MAuto from "./component/MAuto";
import FragenContent from "./component/FragenContent";
import Profitiert from "./component/Profitiert";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Maincontent/>
      <Contentone/>
        <VorteileContent/>
        <BanerUnverbindlich/>
        <ContantEinrichten/>
        <Profitiert/>
        <Cards/>
        <MAuto/>
        <FragenContent/>
        <Footer/>
    </div>
  );
}

export default App;
