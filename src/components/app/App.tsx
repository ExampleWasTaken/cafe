import { HashRouter, Route, Routes } from 'react-router-dom';
import { Custom404 } from '../404/Custom404';
import { About } from '../about/About';
import { Home } from '../home/Home';

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="*"
          element={<Custom404 />}
        />
      </Routes>
    </HashRouter>
  );
};
