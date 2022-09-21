import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Nav from './Components/Nav';
import Home from './pages/Home';
import CharacterBio from './pages/CharacterBio';
import Footer from './Components/footer';


function App() {


return (

  <Router>
    <div className="App">
      <Nav />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/CharacterBio/:id' element= {<CharacterBio />}  />
        </Routes>
       <Footer /> 
    </div>
  </Router>   
  );
}

export default App;
