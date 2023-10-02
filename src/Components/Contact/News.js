import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dociha from './Dociha.jpg'


function News() {
    return (
        <div className='News'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} justifyContent={'center'} alignItems={'center'} marginTop={"30px"}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ width: '100%', height: '80%', borderRadius: '40px', backgroundColor: '#000080'}}>
                            <img src={Dociha} alt ={'Doctors'}width={"100%"} height={"100%"} style={{ borderRadius: '40px',paddingBottom:'2rem',paddingTop:'2rem' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h1 style={{ color: "#000080", textAlign: "center" }}>
                            We Are Always Ensure <br />
                            Best Medica Treatment<br />
                            For Your Health
                        </h1>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
export default News;