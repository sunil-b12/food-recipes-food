import './App.css';
import { Route, Routes } from 'react-router'
import Home from './pages/Home';
import Header from './components/Header';
import Details from './components/Details';
import Datashow from './components/Datashow';
import Footer from './components/Footer';
import Search from './components/Search';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='recipes/:idMeal' element={<Details />} />
        <Route path='recipes/catagory/:strCategory' element={<Datashow />} />
        <Route path='recipes/search/:search' element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
