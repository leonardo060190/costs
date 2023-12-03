import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './compoments/pages/Home'
import Company from './compoments/pages/Company'
import Contact from './compoments/pages/Contact'
import NewProject from './compoments/pages/NewProject'
import Projects from './compoments/pages/Projects'
import Project from './compoments/pages/Project'

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
        <Route path="/projects" element={<Container pageClass="min-height">
          <Projects />
        </Container>} />
        <Route path="/company" element={<Container pageClass="min-height">
          <Company />
        </Container>} />
        <Route path="/contact" element={<Container pageClass="min-height">
          <Contact />
        </Container>} />
        <Route path="/newproject" element={<Container pageClass="min-height">
          <NewProject />
        </Container>} />
        <Route path="/project/:id" element={<Container pageClass="min-height">
          <Project />
        </Container>} />

      </Routes>

      <Footer />

    </Router>
  )
}

export default App;
