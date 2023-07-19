import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
        <div className='top-bar'>
          <Navbar />
        </div>
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>      
    </div>
  );
}

export default App;