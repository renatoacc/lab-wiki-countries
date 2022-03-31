// src/App.js
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/">
            <Route path="/:alpha3Code">
              <Route index element={<CountryDetails />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
