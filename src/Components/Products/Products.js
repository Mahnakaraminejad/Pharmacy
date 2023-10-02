import React  from "react";
import Grid from "@mui/material/Grid";
import { Button, Paper, Typography } from "@mui/material";
import Dental from './Dental.png';
import Cardi from './Cardi.png';
import Pill2 from './Pill2.png';
import Syrinage from './Syrinage.png';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                width: '80%',
                height: '80%',
                marginTop: '50px',
                margin: '140px auto',
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: '40px',
                    width: { xs: '75%', md: '80%' },
                    height: '80%',
                    borderRadius: '20px',
                }}
            >
                <Grid
                    container
                    margin="10px 0"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <Grid container justifyContent="center">
                            <Typography variant="h5" sx={{ color: '#000080', fontWeight: 700 }}>
                                Servises For Your
                            </Typography>
                            <Typography variant="h5" sx={{ color: '#000080', fontWeight: 700 }}>
                                &nbsp;Health
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Paper
                        elevation={0}
                        sx={{
                            width: { xs: '44%', md: '22%' },
                            height: '50%',
                            bgcolor: '#fff',
                            borderRadius: '20px',
                        }}
                    >
                        <Grid
                            container
                            height="100%"
                            width="100%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid container p={2} height="140px" width="150px" justifyContent="center" rowGap={{ xs: 1, md: 2 }}>
                                <img
                                    src={Cardi}
                                    style={{ width: '80%', height: '60%', padding: '0 20px' }}
                                    alt="Cardiology"
                                />
                                <Link to="/shopping" >
                                    <Button sx={{ color: '#000080' }} >Cardiology</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper
                        elevation={0}
                        sx={{
                            width: { xs: '44%', md: '22%' },
                            height: '50%',
                            bgcolor: '#fff',
                            borderRadius: '20px',
                        }}
                    >
                        <Grid
                            container
                            height="100%"
                            width="100%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid container p={2} height="140px" width="150px" justifyContent="center" rowGap={{ xs: 1, md: 2 }}>
                                <img
                                    src={Pill2}
                                    style={{ width: '80%', height: '60%', padding: '0 20px' }}
                                    alt="Pill"
                                />
                                <Link to="/pillshopping" >
                                    <Button sx={{ color: '#000080' }} >Pill</Button>
                                </Link>
                                {/* <Button sx={{ color: '#000080' }}>Pill</Button> */}
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper
                        elevation={0}
                        sx={{
                            width: { xs: '44%', md: '22%' },
                            height: '50%',
                            bgcolor: '#fff',
                            borderRadius: '20px',
                        }}
                    >
                        <Grid
                            container
                            height="100%"
                            width="100%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid container p={2} height="140px" width="150px" justifyContent="center" rowGap={{ xs: 1, md: 2 }}>
                                <img
                                    src={Syrinage}
                                    style={{ width: '80%', height: '60%', padding: '0 20px' }}
                                    alt="Syrinage"
                                />
                                <Link to="/syrishopping" >
                                    <Button sx={{ color: '#000080' }} >Syrinage</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper
                        elevation={0}
                        sx={{
                            width: { xs: '44%', md: '22%' },
                            height: '50%',
                            bgcolor: '#fff',
                            borderRadius: '20px',
                        }}
                    >
                        <Grid
                            container
                            height="100%"
                            width="100%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid container p={2} height="140px" width="150px" justifyContent="center" rowGap={{ xs: 1, md: 2 }}>
                                <img
                                    src={Dental}
                                    style={{ width: '80%', height: '60%', padding: '0 20px' }}
                                    alt="Cardiology"
                                />
                                <Link to="/dentalshopping" >
                                    <Button sx={{ color: '#000080' }} >Dental Care</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Products;
