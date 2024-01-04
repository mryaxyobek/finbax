import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// layouts 
import MainRoot from './layouts/MainRoot';

// pages 
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRoot />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
};

export default App;