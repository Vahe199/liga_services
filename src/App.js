import './App.css';
import HomePage from "./components/homePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./components/authPages/loginPage/LoginPage";
import RegistrationPage from "./components/authPages/registrationPage/RegistrationPage";
import ClientProfilePage from "./components/clientPages/ClientProfilePage";
import React from "react";
import {Worksheet} from "./components/clientPages/Worksheet/Worksheet";
import Support, {Backing} from "./components/clientPages/Support/Support";
import {MyOrders} from "./components/clientPages/MyOrders/MyOrders";
import OrdersPage from "./components/clientPages/ordersPage/OrdersPage";
import ChatPage from "./components/chatPage/ChatPage";



function App() {

  return (<div style={{overflow:"hidden"}}>
      <BrowserRouter>
        <Routes>
             <Route path='/' element={<HomePage />} />
            {/*AuthPages*/}
             <Route path='registration' element={<RegistrationPage />} />
            <Route path='login' element={<LoginPage />} />
            {/*NavBar*/}
            <Route path='workSheet' element={<Worksheet />}/>
            <Route path={"support"} element={<Support />}/>
            <Route path={"MyOrders"} element={<MyOrders />}/>
            <Route path={"Orders"} element={<OrdersPage />}/>
            {/*NavBarTabs*/}
            <Route path='notification' element={<NotificationPage />} />
            <Route path={'chat'} element={<ChatPage />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App;
