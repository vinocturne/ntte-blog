// import HeaderIcon from '../../asset/img/headerIcon.svg'

// import gsap from 'gsap'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  // const animation = gsap.to('.menu_title', {
  //   paused: true,
  //   display: 'block',
  // })
  return (
    <div className="w-100 h-[60px] px-20 rounded-xl flex items-center justify-between gap-2">
      <p className="font-blackHans text-[28px] text-point">No Time To Explain</p>
      <div className="menu flex flex-col relative h-[50px] justify-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="230"
          height="12"
          viewBox="0 0 268 17"
          fill="none"
          // onMouseEnter={() => animation.play()}
          // onMouseLeave={() => animation.reverse()}
        >
          <path
            d="M267 0.5L267 8.25M267 17L267 8.25M267 8.25L133.75 8.24999M0.499999 17L0.5 0.499988L0.5 8.24999L133.75 8.24999M133.75 8.24999L133.75 0.499994L133.75 17"
            stroke="white"
          />
        </svg>
        <div className="menu_title w-[100%] font-blackHans text-[12px]">
          <div className="flex justify-between text-white cursor-pointer">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/about">
              <span className={`${location.pathname === '/about' && 'text-point'}`}>About</span>
            </Link>
            <Link to="/posts">
              <span className={`${location.pathname === '/posts' && 'text-point'}`}>Posts</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
