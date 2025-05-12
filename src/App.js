import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import WorkPage from './pages/Work';
import Skills from './pages/Skills';
import Gallery from './pages/Gallery';
import ProjectOverview from './pages/ProjectOverview';

function App() {
  return (
    <div className="App">
      <div className='background_1'></div>
      <div className='background_2'></div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/adaptive-design-system-for-archlight" element={<ProjectOverview />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
