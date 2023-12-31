import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="h-[100vh] pt-5 px-5 flex items-center justify-center gap-20 ">
      <div className="font-blackHans text-[3rem] text-right text-point ">
        No
        <br />
        Time
        <br />
        To
        <br />
        Explain
      </div>
      <div className="flex items-center h-[250px] gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="250"
          viewBox="0 0 17 268"
          fill="none"
          className="invert dark:invert-0"
        >
          <path
            d="M0.5 0.5H8.25M17 0.5H8.25M8.25 0.5V133.75M17 267H0.5H8.25V133.75M8.25 133.75H0.5H17"
            stroke="white"
          />
        </svg>
        <div className="h-[180px] flex flex-col justify-between font-blackHans text-primary dark:text-white">
          <Link to="/">
            <span className="text-selected hover:transition-colors hover:text-point">Home</span>
          </Link>
          <Link to="/about">
            <span className="hover:transition-colors hover:text-point">About</span>
          </Link>
          <Link to="/posts">
            <span className="hover:transition-colors hover:text-point">Posts</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
