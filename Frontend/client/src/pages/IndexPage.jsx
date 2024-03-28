import { Link } from "react-router-dom";

export default function IndexPage(){
    return(
        <div className="App">
        <header className='header'>
          <span className='font-bold text-xl'>EasyServe</span>
          <div className='search-bar'>
            <div>Where</div>
            <div className="divider"></div>
            <div>When</div>
            <div className="divider"></div>
            <div>Time</div>
            <div className="divider"></div>
            <div>Service</div>
            <div className="divider"></div>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="search-button">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>
          <Link to={'/login'} className='user-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="user-icon-svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </Link>
        </header>
      </div>
    );
}