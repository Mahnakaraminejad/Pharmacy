import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Medicin from './Medicin.png';

const products = [
    { id: 1, name: 'actocold', price: 10 },
    { id: 2, name: 'coldax', price: 15 },
    { id: 3, name: 'sytrizin', price: 20 },
    { id: 4, name: 'metronidazol', price: 5 },
    { id: 5, name: 'minostad', price: 5 },
    { id: 6, name: 'Panadol', price: 30 },
    { id: 7, name: 'astaminophen', price: 5 },
    { id: 8, name: 'Antihistamin', price: 5 },
    { id: 9, name: 'Aspirin', price: 5 },
    { id: 10, name: 'Piriton', price: 5 },
    { id: 11, name: 'Prozak', price: 5 },
    { id: 12, name: 'Omeprazole', price: 5 },
    { id: 13, name: 'Sinus Med', price: 5 },
    { id: 14, name: 'Ibuprofen', price: 5 },
    { id: 14, name: 'Amoxicillin', price: 5 },
    // ... more products
];

function Pillshopping() {
    return (
        <div className="Pillshopping" style={{marginBottom:'75px'}}>
            <div style={{ textAlign: "center", color: "#000080", marginBottom: "20px" }}>
                <h1>Pharmacy Products Page</h1>
            </div>
            <div className="GridContainer" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '20px', justifyItems: 'center' }}>
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
export default Pillshopping;