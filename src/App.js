import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './compoments/pages/Home'
import Company from './compoments/pages/Company'
import Contact from './compoments/pages/Contact'
import NewProject from './compoments/pages/NewProject'
import Projects from './compoments/pages/Projects'

import Container from './compoments/layout/Container'
import Navbar from './compoments/layout/Navbar'
import Footer from './compoments/layout/Footer'



function App() {
  return (
    <Router>

      <Navbar />
      
      <Routes>

        <Route exact path="/" element={<Container pageClass="min-height">
          <Home />
        </Container>} />
        <Route exact path="/projects" element={<Container pageClass="min-height">
          <Projects />
        </Container>} />
        <Route exact path="/company" element={<Container pageClass="min-height">
          <Company />
        </Container>} />
        <Route exact path="/contact" element={<Container pageClass="min-height">
          <Contact />
        </Container>} />
        <Route exact path="/newproject" element={<Container pageClass="min-height">
          <NewProject />
        </Container>} />

      </Routes>

      <Footer />

    </Router>
  )
}

export default App;
