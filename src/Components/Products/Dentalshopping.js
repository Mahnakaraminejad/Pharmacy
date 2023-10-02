import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Medicin from './Medicin.png';

const products = [
    { id: 1, name: 'Ibuprofen', price: 10 },
    { id: 2, name: 'Paracetamol', price: 15 },
    { id: 3, name: 'Amoxicillin', price: 20 },
    { id: 4, name: 'Clindamycin', price: 5 },
    { id: 5, name: 'Fluconazole', price: 5 },
    { id: 6, name: 'Lidocaine', price: 5 },
    { id: 7, name: 'Chlorhexidine', price: 5 },
    { id: 8, name: 'Diclofenac', price: 5 },
    { id: 9, name: 'Dental floss', price: 5 },
    // ... more products
];

function Dentalshopping() {
    return (
        <div className="Dentalshopping" style={{marginBottom:'85px'}}>
            <div style={{ textAlign: "center", color: "#000080" }}>
                <h1>Pharmacy Products Page</h1>
            </div>

            <div className="GridContainer" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '20px',
             justifyItems: 'center' }}>
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
export default Dentalshopping;