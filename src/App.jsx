import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SwiperFood from './Components/Swiper/Swiper';
import AboutPage from './Pages/AboutPage/AboutPage';
import FilialCardPage from './Pages/FilialCardPage/FilialCardPage';
import FilialPage from './Pages/FilialPage/FilialPage';
import HomePage from './Pages/HomePage/HomePage';

function App() {
return (
<div className="App">
 <Header />
  
  <Switch>
    <Route path="/filial" exact>
      <FilialPage />
    </Route>
    <Route path="/filialCard" exact>
      <FilialCardPage />
    </Route>
    <Route path="/about" exact>
      <AboutPage />
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