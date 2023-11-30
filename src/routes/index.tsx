import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Posts from '../pages/Posts'
import About from '../pages/About'
import Layout from '../components/layout/Layout'
import Header from '../components/layout/Haeder'

const Routes = createBrowserRouter([
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
  },
])

export default Routes
