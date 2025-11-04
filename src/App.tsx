
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import routes from './router/config';
import PasswordProtection from './components/feature/PasswordProtection';

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <PasswordProtection>
      <BrowserRouter basename={__BASE_PATH__}>
        <AppRoutes />
      </BrowserRouter>
    </PasswordProtection>
  );
}

export default App;
