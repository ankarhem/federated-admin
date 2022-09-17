import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

const Home = () => (
  <p>
    <Link to='/blog'>Go to blog</Link>
  </p>
);
const Blog = () => <p>Blog</p>;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='blog' element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
