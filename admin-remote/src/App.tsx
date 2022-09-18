import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
// import Layout from './components/Layout';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
