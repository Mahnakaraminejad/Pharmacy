import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Medicin from './Medicin.png';




const products = [
    { id: 1, name: 'Losartan', price: 10 },
    { id: 2, name: 'Carvedilol', price: 15 },
    { id: 3, name: 'Warfarin', price: 20 },
    { id: 4, name: 'peranol', price: 5 },
    { id: 5, name: 'Amlodopine', price: 5 },
    { id: 6, name: 'digoxin', price: 30 },
    { id: 7, name: 'Enapril', price: 5 },
    { id: 8, name: 'Espironolacton', price: 5 },
    { id: 9, name: 'Atorvastatin', price: 5 },
    { id: 10, name: 'Nitroglycerin', price: 5 },
    { id: 11, name: 'Hydrochlorothia', price: 5 },
    { id: 12, name: 'Captopil', price: 5 },
    { id: 13, name:'Telmizarton', price: 5 },

    // ... more products
];

function Shopping() {
    return (
        <div className="Shopping" style={{marginBottom:'75px'}}>
            <div style={{ textAlign: "center", color: "#000080", marginBottom: "20px" }}>
                <h1>Pharmacy Products Page</h1>
            </div>
            <div className="GridContainer" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '10px', justifyItems: 'center' }}>
                {products.map((product) => (
                    <div className="CardContainer" style={{ width: '100%' }} key={product.id}>
                        <Card sx={{ maxWidth: 200, margin: '10px' }}>
                            <CardActionArea>
                                <img
                                    component="img"
                                    height="60"
                                    width="60"
                                    src={Medicin}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color='#000080' component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price: ${product.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Shopping;