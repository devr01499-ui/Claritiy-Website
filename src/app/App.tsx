import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Templates } from './pages/Templates';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Success } from './pages/Success';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { FloatingContact } from './components/FloatingContact';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Demos } from './pages/Demos';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <ScrollProgress />
        <Navigation />
        <FloatingContact />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/success" element={<Success />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}