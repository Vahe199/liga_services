import './App.css';
import HomePage from "./components/homePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (<div style={{overflow:"hidden"}}>
      <BrowserRouter>
        <Routes>
             <Route path='/' element={<HomePage />} />
             <Route path='/registration' element={<RegistrationPage />} />
            <Route path='/login' element={<LoginPage />} />
            {/*test*/}
            {/*<Route path='/' element={<RegistrationPage />} />*/}
            {/*<Route path='/' element={<LoginPage />} />*/}
        </Routes>
        {/*<ClientBar/>*/}
      </BrowserRouter>

  )
}

export default App;
