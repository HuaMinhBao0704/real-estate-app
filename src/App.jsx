import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './routes/home';
import List from './routes/list';
import Single from './routes/single';
import Profile from './routes/profile';
import Layout from './components/layout';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/list",
          element: <List />
        },
        {
          path: ":id",
          element: <Single />
        },
        {
          path: "/profile",
          element: <Profile />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
};

export default App;
