import { HashRouter, Route, Routes } from 'react-router-dom';
import { Custom404 } from '../Custom404';
import { Home } from '../Home';
import { Menu } from '../Menu';

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/menu"
          element={<Menu />}
        />
        <Route
          path="*"
          element={<Custom404 />}
        />
      </Routes>
    </HashRouter>
  );
};
