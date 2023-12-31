import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MasterLayout from '../MasterLayout/MasterLayout';
import Home from '../../Pages/Home';
import WatchList from '../../Pages/WatchList';
import NotFound from '../../Pages/NotFound';
import Movie from '../../Pages/Movie';






function App() {
  let routes = createBrowserRouter([
    {
      path: '/', element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home/> },
        { path: 'movies-app', element: <Home /> },
        
        { path: 'watchlist', element: <WatchList/> },
        {path: '/movie-details/:id/:name',element: <Movie/>},
        { path: 'notfound', element: <NotFound/>}


      ]
    },
  ]);

  return (
    <>
    <div>
      <RouterProvider router={routes}/>
    </div>
    </>
  );
}

export default App;
