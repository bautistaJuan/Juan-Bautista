import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layaout from './components/Layaout';
import Home from './pages/Home';
import Error from './pages/Error';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layaout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
