import { RouterProvider } from 'react-router-dom';
import { localRouter } from './Router';
// import Layout from './components/Layout';

const App = () => {
  return <RouterProvider router={localRouter} />;
};

export default App;
