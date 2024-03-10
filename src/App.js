import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import TaskTwo from './pages/TaskTwo';
import TaskFive from './pages/TaskFive';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Router</h1>
          <Link to="/">Home</Link>
          <NavLink to="tasktwo">TASK 2</NavLink>
          <NavLink to="taskfive">TASK 5</NavLink>
          <NavLink to="about">ABOUT US</NavLink>
          <NavLink to="products">PRODUCTS</NavLink>
          <NavLink to="contact">CONTACT US</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="tasktwo" element={<TaskTwo />} />
          <Route path="taskfive" element={<TaskFive />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
       
      </main>
      <footer>
        <h2> WIC 70415 JINWOONG LEE</h2>
      </footer>
    </BrowserRouter>
  );
}

export default App;
