import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Phar from "./Phar.png";
function ContactUs() {
    return (
        <div className='ContactUs'>

            <Box sx={{ flexGrow: 1 ,backgroundColor: '#DDE0FF'}}>
                <Grid container spacing={2}
                    justifyContent={'center'}
                    alignItems={'center'}
                    marginTop={"30px"}>
                    <Grid item xs={6}>
                        <h5 style={{ color: "blue" }}>
                            Need Emergency?
                        </h5>
                        <h1 style={{ color: "#000080", textAlign: "center" }}>
                            Dont Be Hesitate To <br />
                            Contact Us
                        </h1>
                        <Box sx={{
                            width: "40%", height: "30%", backgroundColor: "#000080",
                            color: "white", direction: "center", padding: "8px", marginLeft: "30%"
                        }}>
                            <p>For Any Emergency Cases</p>
                            <h6>Call Us : 0939 28993897</h6>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        {/* <Box sx={{ backgroundColor:"#000080", width:"85%", height:"85%",borderRadius: '40px', marginRight: "20%"}}>
                            <img src={Phar} width={"80%"} height={"80%"} style={{ borderRadius: '40px', marginRight: "20%" }} />
                        </Box> */}
                        <img src={Phar} alt={'Doctor'} width={"80%"} height={"80%"} style={{ borderRadius: '40px', marginRight: "20%" }} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
export default ContactUs; 