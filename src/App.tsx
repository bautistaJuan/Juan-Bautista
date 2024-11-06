import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layaout from './components/Layaout';
import Home from './pages/Home';
import Error from './pages/Error';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layaout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
