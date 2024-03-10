import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Router</h1>
        <Link to="/">Home</Link>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
        <p align="middle"> <iframe height={300} width={1000} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRy9veIyCgItGT2VY12Am6SRXqG8golTwRGnSr2PK1P8EAHMOKbcX0gQytU0lu3uBocM1Pk8oRextdt/pubhtml?gid=1991181282&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        </p>
      </main>
    </BrowserRouter>
  );
}

export default App;
