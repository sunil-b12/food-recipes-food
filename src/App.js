import './App.css';
import { Route, Routes } from 'react-router'
import Home from './pages/Home';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
