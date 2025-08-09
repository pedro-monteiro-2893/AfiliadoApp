import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './paginas/NavBar';
import { HOME } from './util/rotas';
import HomePage from './paginas/HomePage';

function App() {
  

  return (
    <>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path={HOME} element={<HomePage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
