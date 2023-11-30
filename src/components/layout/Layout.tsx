import { ReactNode } from 'react'
// import { useLocation } from 'react-router-dom'
// import { signal } from '@preact/signals-react'
// import Header from './Haeder'

const Layout = ({ children }: { children: ReactNode }) => {
  //   const isHome = signal(false)
  //   const location = useLocation()
  //   useEffect(() => {
  //     console.log(location)
  //     // if (location.pathname !== '/')
  //   }, [location])
  return (
    <div className="h-[100vh] pt-5 px-5 bg-primary">
      {/* {!isHome && <Header />} */}
      {children}
    </div>
  )
}

export default Layout
