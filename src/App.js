import './App.css';
import logo from './components/dogspages/pictures/icons8-paw-64.png';
import { createContext } from 'react';
import HomePage from './components/Homepage/HomePage';
import AdoptPage from './components/adoption/AdoptPage';
import Context from './components/Contex';
import ContactUs from './components/forms/FormEmail';
import { NavLink, Route, Routes } from 'react-router-dom'
// import { useState } from 'react';
import FooterDog from './components/footer/FooterDog';
export const ActionContext = createContext()

function App() {
  const { ListOfDog, setListOfDogs, setFormPopUp, formPopUp } = Context()
  const dogsAndForm = { ListOfDog, setListOfDogs, formPopUp, setFormPopUp }
  // const [formPopUp, setFormPopUp] = useState(false)
  return (
    <div className="App">
      <div className='nav-bar'>
        <NavLink to="/">Contact Us</NavLink>
        <NavLink to="/adoption">Adopt</NavLink>
        <NavLink>volenteer</NavLink>
        <img src={logo} alt="" />
      </div>
      <ContactUs trigger={formPopUp} setTrigger={setFormPopUp} />
      {/* <button onClick={() => setFormPopUp(!formPopUp)}>Open pop</button> <br></br> */}
      {/* <HomePage /> <br></br> */}
      <ActionContext.Provider value={dogsAndForm}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adoption" element={<AdoptPage />} />
        </Routes>
        {/* <AdoptPage /> */}
      </ActionContext.Provider>
      <footer>
        <FooterDog />
      </footer>
    </div>
  );
}

export default App;
