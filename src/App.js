import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import Filters from './components/filters';
import Items from './components/items';
import SeasonSpecials from './components/SeasonSpecials';

function App() {
  return (
    <>
   
<Appbar />
<Filters/>
<Items />
<SeasonSpecials />

    </>
  );
}

export default App;
