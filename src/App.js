import './App.css';
import HomePage from "./components/homePage/HomePage";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import LoginPage from "./components/authPages/loginPage/LoginPage";
import RegistrationPage from "./components/authPages/registrationPage/RegistrationPage";
import React from "react";
import NotificationPage from './components/notificationPages/NotificationPage';
import LogoBlock from "./components/UI/headers/LogoBlock";
import Container from "@mui/material/Container";
import {MainNavBar} from "./components/UI/headers/MainNavBar";
import {useSelector} from "react-redux";
import Footer from "./components/UI/footer/Footer";
import Support from "./components/clientPages/Support/Support";
import {MyOrders} from "./components/clientPages/MyOrders/MyOrders";
import OrdersPage from "./components/clientPages/ordersPage/OrdersPage";
import ChatPage from "./components/chatPage/ChatPage";
import OrderAboutPage from "./components/clientPages/orderAboutPage/OrderAboutPage";
import BalancePage from "./components/clientPages/balancePage/BalancePage";
import {Worksheet} from "./components/clientPages/Worksheet/Worksheet";


function App() {
    const location = useLocation();
    const {auth} = useSelector(state => state.auth);


    return (<div style={{overflow:"hidden"}}>
            {location.pathname === '/login' || location.pathname === '/registration' ? '' : <Container maxWidth={'xl'}>
                {auth ? <MainNavBar /> : <LogoBlock/>}
            </Container>}

            <Routes>
                <Route path='/' element={<HomePage />} />
                {/*AuthPages*/}
                <Route path='registration' element={auth ? <Navigate to='/' /> : <RegistrationPage />} />
                <Route path='login' element={auth ? <Navigate to='/' /> : <LoginPage />} />
                {/*NavBar*/}
                <Route path='workSheet' element={<Worksheet />}/>
                <Route path={"support"} element={<Support />}/>
                <Route path={"MyOrders"} element={<MyOrders />}/>
                <Route path={"Balance"} element={<BalancePage />}/>
                <Route path={"Orders"} element={<OrdersPage />}/>
                <Route path={'orderAboutPage/:id'} element={<OrderAboutPage />} />
                {/*NavBarTabs*/}
                <Route path='notification' element={<NotificationPage />} />
                <Route path={'chat'} element={<ChatPage />} />
            </Routes>
            {location.pathname !== '/chat' || location.pathname !== '/login' || location.pathname !== '/registration' && <Footer/>}
        </div>
    )
}

export default App;
