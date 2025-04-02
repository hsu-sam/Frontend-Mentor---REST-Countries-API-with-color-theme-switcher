import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle('fake-dark-mode');
    },
    [isFakeDark]
  );

  return (
    <div className="inner-wrap">
      <BrowserRouter>
        <Header isFakeDark={isFakeDark} setIsFakeDark={setIsFakeDark} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="countries" element={<HomePage />} />
          <Route path="/countries/:countryCode" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
