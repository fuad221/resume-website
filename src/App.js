import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Home, Skills, Experiences, Educations, Portfolios} from './reference-import'



function App() {
  return (
<Router>
      <>
      <Navbar />
        <Routes>
        <Route exact path="/" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/educations" component={Educations} />
          <Route path="/portfolios" component={Portfolios} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
