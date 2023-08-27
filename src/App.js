import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Head1 from './Assets/Head1';
import PreferenceForm from './Assets/PreferenceForm';
import ProductPage from './Assets/ProductPage';
import InfoPage from './Assets/InfoPage';
import About from './Assets/About';
import Service from './Assets/Service';
import GiftForm from './Assets/GiftForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Head1 />
        <InfoPage />
        <About />
        <Service />
        <Routes>
          <Route path="/" element={<PreferenceForm />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
