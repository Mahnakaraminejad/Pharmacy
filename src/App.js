import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from './Components/Appbar/Appbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Login from './Components/LoginForm/Login';
import SignUp from './Components/LoginForm/SignUp';
import ContactUs from './Components/Contact/ContactUs';
import Doctors from './Components/Doctors/Doctors';
import Shopping from './Components/Products/Shopping';
import Pillshopping from './Components/Products/Pillshopping';
import Syrishopping from './Components/Products/Syrishopping';
import Dentalshopping from './Components/Products/Dentalshopping';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar />
        <br/>
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path='/shopping' element={<Shopping/>} />
          <Route path='/pillshopping' element={<Pillshopping/>} />
          <Route path='/syrishopping' element={<Syrishopping/>} />
          <Route path='/dentalshopping' element={<Dentalshopping/>} />



        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
