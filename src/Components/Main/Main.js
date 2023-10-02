import { Grid } from "@mui/material";
import Capture from "./Capture.png";
import * as React from 'react';
import Products from "../Products/Products";
import Doctors from "../Doctors/Doctors";
import ContactUs from "../Contact/ContactUs";
import News from "../Contact/News";
import Shopping from "../Products/Shopping";
import Pillshopping from "../Products/Pillshopping";
import Syrishopping from "../Products/Syrishopping";
import Dentalshopping from "../Products/Dentalshopping";
import { Routes, Route } from "react-router-dom";
import { Newspaper } from "@mui/icons-material";

function Main() {
    const MainRightStyle = {
        width: '80%',
        height: '35rem',
        marginRight: '2rem'
    };

    return (
        <div className="Main" sx={{ flexGrow: 1, backgroundColor: '#DDE0FF', padding: '1rem' }}>
            <Grid container spacing={2} sx={{ backgroundColor: '#DDE0FF' }}>
                <Grid item xs={12} sm={6} >
                    <h1 style={{ color: '#000080', fontSize: '60px', paddingTop: '7rem' }}>The Best Pharmacy For<br /> You and Your Family</h1>
                    <h2 style={{ color: '#000080', fontSize: '40px' }}>Your Health Is<br /> Our Top Priority</h2>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={Capture} alt="medicine" style={MainRightStyle} />
                </Grid>
            </Grid>
            <Products />
            <News />
            <br />
            <br />
            <br />
            <ContactUs />
            <Doctors />
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/news" element={<Newspaper />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path='/shopping' element={<Shopping />} />
                <Route path='/pillshopping' element={<Pillshopping />} />
                <Route path='/syrishopping' element={<Syrishopping />} />
                <Route path='/dentalshopping' element={<Dentalshopping />} />
            </Routes>
        </div>
    );
}
export default Main;
