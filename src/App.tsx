import { Link } from 'react-router-dom'

function App() {
  return (
    <section className="h-[100vh] pt-5 px-5 flex items-center justify-center gap-20 bg-primary">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="250" viewBox="0 0 17 268" fill="none">
          <path
            d="M0.5 0.5H8.25M17 0.5H8.25M8.25 0.5V133.75M17 267H0.5H8.25V133.75M8.25 133.75H0.5H17"
            stroke="white"
          />
        </svg>
        <div className="h-[180px] flex flex-col justify-between font-blackHans text-white">
          <Link to="/">
            <span className="text-point">Home</span>
          </Link>
          <Link to="/about">
            <span>About</span>
          </Link>
          <Link to="/posts">
            <span>Posts</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default App
