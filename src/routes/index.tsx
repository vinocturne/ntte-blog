import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Posts from '../pages/Posts'
import About from '../pages/About'
import Layout from '../components/layout/Layout'
import Header from '../components/layout/Haeder'
import Post from '../pages/Post'

const Routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      handle: {
        title: 'Home',
      },
    },
    {
      path: '/about',
      element: (
        <Layout>
          <Header />
          <About />
        </Layout>
      ),
      handle: {
        title: 'About',
      },
    },
    {
      path: '/posts',
      element: (
        <Layout>
          <Header />
          <Posts />
        </Layout>
      ),
      handle: {
        title: 'Posts',
      },
      children: [
        {
          path: ':id?',
          element: (
            <Layout>
              <Header />
              <Post />
            </Layout>
          ),
        },
      ],
    },
  ],
  { basename: '/ntte-blog' },
)

export default Routes
