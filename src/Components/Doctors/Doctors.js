import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Doctor2 from './Doctor2.jpg';
import Doctor3 from './Doctor3.png';

function Doctors() {
    return (
        <div style={{ marginTop: '8rem' }}>
            <h2 style={{ color: '#000080', textAlign: 'center' }}>Meet Our Expert Doctors</h2>
            <Grid
                container
                justifyContent="center"
                spacing={2}
                sx={{
                    // margin: '100px auto 10px',
                    marginBottom:'5rem',
                    padding: '0 16px',
                    width: '100%',
                }}
            >
                <Grid item xs={12} md={6} lg={4}>
                    <Paper elevation={3} sx={{ borderRadius: '30px', textAlign: 'center' }}>
                        <img src={Doctor2} alt="Dr. Nafisa Floara" style={{ width: '50%',marginTop:'35px', margin: '20px ' }} />
                        <Typography variant="h6" style={{ color: '#000080', marginBottom: '20px' }}>
                            Dr. Nafisa Floara
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Paper elevation={3} sx={{ borderRadius: '30px', textAlign: 'center' }}>
                        <img src={Doctor3} alt="Dr. Delio Bosta" style={{ width: '40%' }} />
                        <Typography variant="h6" style={{ color: '#000080', marginBottom: '20px' }}>
                            Dr. Delio Bosta
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Paper elevation={3} sx={{ borderRadius: '30px', textAlign: 'center' }}>
                        <img src={Doctor3} alt="Dr. ncsico" style={{ width: '40%' }} />
                        <Typography variant="h6" style={{ color: '#000080', marginBottom: '20px' }}>
                            Dr. Delio Bosta
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
export default Doctors;