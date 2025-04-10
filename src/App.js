import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, About } from './pages';

function App() {
  return (
    <div className="App">
  <Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
  </Routes>
    </div>
  );
}

export default App;
