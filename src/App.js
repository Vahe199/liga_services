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
import ForgetPasswordPage from "./components/authPages/forgetPassword/ForgetPassword";


function App() {
    const location = useLocation();
    const {auth} = useSelector(state => state.auth);


    return (<div style={{overflow:"hidden"}}>
            {location.pathname === '/login' || location.pathname === '/forgetPassword' || location.pathname === '/registration' ? '' : <Container maxWidth={'xl'}>
                {auth ? <MainNavBar /> : <LogoBlock/>}
            </Container>}

            <Routes>
                <Route path='/' element={<HomePage />} />
                {/*AuthPages*/}
                <Route path='registration' element={auth ? <Navigate to='/' /> : <RegistrationPage />} />
                <Route path='login' element={auth ? <Navigate to='/' /> : <LoginPage />} />
                <Route path='/forgetPassword' element={auth ? <Navigate to='/' /> : <ForgetPasswordPage />} />
                {/*NavBar*/}
                <Route path={'workSheet'} element={!auth ? <Navigate to='/' /> :<Worksheet />}/>
                <Route path={"support"} element={!auth ? <Navigate to='/' /> :<Support />}/>
                <Route path={"MyOrders"} element={!auth ? <Navigate to='/' /> :<MyOrders />}/>
                <Route path={"Balance"} element={!auth ? <Navigate to='/' /> :<BalancePage />}/>
                <Route path={"Orders"} element={!auth ? <Navigate to='/' /> :<OrdersPage />}/>
                <Route path={'orderAboutPage/:id'} element={!auth ? <Navigate to='/' /> :<OrderAboutPage />} />
                {/*NavBarTabs*/}
                <Route path='notification' element={!auth ? <Navigate to='/' /> :<NotificationPage />} />
                <Route path={'chat'} element={!auth ? <Navigate to='/' /> :<ChatPage />} />
            </Routes>
            {location.pathname !== '/chat' && location.pathname !== '/forgetPassword' && location.pathname !== '/login' && location.pathname !== '/registration' ? <Footer/> : ''}
        </div>
    )
}

export default App;
