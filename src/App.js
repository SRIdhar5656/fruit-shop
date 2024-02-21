import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import Filters from './components/filters';
import Items from './components/items';
import SeasonSpecials from './components/SeasonSpecials';
import Footer from './components/Footer';

function App() {
  return (
    <>
   
<Appbar />
<Filters/>
<Items />
<SeasonSpecials />
<Footer />

    </>
  );
}

export default App;
