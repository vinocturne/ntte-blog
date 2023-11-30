import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Posts from '../pages/Post'
import About from '../pages/About'
import Post from '../pages/Post/Post'
import Home from '../pages/Home'

const Routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'posts',
          element: <Posts />,
          children: [
            {
              path: ':id',
              element: <Post />,
            },
          ],
        },
      ],
    },
  ],
  { basename: '/ntte-blog' },
)

export default Routes
