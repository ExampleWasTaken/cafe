import { HashRouter, Route, Routes } from 'react-router-dom';
import { Custom404 } from '../pages/Custom404';
import { About } from '../pages/About';
import { Home } from '../pages/Home';

export const App = () => {
  return (
    <>
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
    </>
  );
};
