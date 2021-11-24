import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Home, About, Skills, Experiences, Educations, Portfolios} from './reference-import'



function App() {
  return (
<Router>
      <>
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="about" element={<About />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="educations" element={<Educations />} />
          <Route path="portfolios" element={<Portfolios />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

