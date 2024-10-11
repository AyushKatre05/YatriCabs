import './App.css';
import Home from './Pages/Home';
import Yatri from './Pages/Yatri';
import Tablechart from './Components/Tablechart';
import Journey from './Components/Journey';
import ChooseWay from './Components/ChooseWay';
import Details from './Pages/Details';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <Home/>
    <Yatri/>
    <Tablechart/>
    <Journey/>
      <ChooseWay/>
      <Details/>
      <Footer/>
    </>
  );
}

export default App;
