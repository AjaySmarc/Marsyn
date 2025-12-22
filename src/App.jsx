import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Shop from './pages/Shop';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookDemo from './pages/BookDemo';
import SocialMedia from './pages/SocialMedia';
import ScrollToHash from './components/ScrollToHash';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>

        <ScrollToHash />

        <Navbar />
        <div className="spacer">
          <br></br>
          <br></br>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/BookDemo" element={<BookDemo />} />
              <Route path="/SocialMedia" element={<SocialMedia />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
