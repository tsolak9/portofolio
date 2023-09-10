function Header() {
  return (
    <header>
        <div className="container mx-auto p-4 flex justify-between items-center">
        <img className="w-16 rounded-full" src="./src/assets/images/tsolak.svg" alt="Tsolakidis Anatolios" />
        <nav>
            <ul  className="flex gap-5">
                <li className="hover:underline"><a href="#">Home</a></li>
                <li className="hover:underline"><a href="#">About</a></li>
                <li className="hover:underline"><a href="#">Projects</a></li>
                <li className="hover:underline"><a href="#">Contact</a></li>
            </ul>
        </nav>
        <ul className="flex gap-2 ">
            <li className="transition-all hover:scale-110"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anatolios-tsolakidis-291b52234/"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path></svg></a></li>
            <li className="transition-all hover:scale-110"><a target="_blank" rel="noreferrer" href="https://github.com/tsolak9"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.09,0.682-0.218,0.682-0.484 c0-0.236-0.009-0.866-0.014-1.699c-2.782,0.602-3.369-1.34-3.369-1.34c-0.455-1.157-1.11-1.465-1.11-1.465 c-0.909-0.62,0.069-0.608,0.069-0.608c1.004,0.071,1.532,1.03,1.532,1.03c0.891,1.529,2.341,1.089,2.91,0.833 c0.091-0.647,0.349-1.086,0.635-1.337c-2.22-0.251-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.03-2.682 C6.546,8.54,6.202,7.524,6.746,6.148c0,0,0.84-0.269,2.75,1.025C10.295,6.95,11.15,6.84,12,6.836 c0.85,0.004,1.705,0.114,2.504,0.336c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.376,0.202,2.394,0.1,2.646 c0.64,0.699,1.026,1.591,1.026,2.682c0,3.841-2.337,4.687-4.565,4.935c0.359,0.307,0.679,0.917,0.679,1.852 c0,1.335-0.012,2.415-0.012,2.741c0,0.269,0.18,0.579,0.688,0.481C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z"></path></svg></a></li>
            <li className="transition-all hover:scale-110"><a target="_blank" rel="noreferrer" href="https://twitter.com/tsolakidis94"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17.4636119,3.75 L20.3770686,3.75 L14.0120289,10.8513575 L21.5,20.5147059 L15.6369768,20.5147059 L11.0448477,14.6539367 L5.79040931,20.5147059 L2.87519121,20.5147059 L9.68323831,12.9190045 L2.5,3.75 L8.51186669,3.75 L12.6627497,9.10696833 L17.4636119,3.75 Z M16.4410838,18.8124434 L18.0554628,18.8124434 L7.63465906,5.36285068 L5.90226209,5.36285068 L16.4410838,18.8124434 Z"></path></svg></a></li>
           </ul>
        </div>
    </header>
  )
}

export default Header