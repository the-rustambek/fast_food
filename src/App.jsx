import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SwiperFood from './Components/Swiper/Swiper';
import HomePage from './Pages/HomePage/HomePage';

function App() {
return (
<div className="App">
 <Header />
  
  <Switch>
    <Route path="/filial" exact>
      Filial
    </Route>
    <Route path="/about" exact>
      BIz haqimizda
    </Route>
    <Route path="/contact" exact>
      Bog'lanish
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>
  <Footer />
</div>
);
}

export default App;