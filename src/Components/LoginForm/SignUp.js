import React, { useState} from 'react';
import {
    Content,
    FlexboxGrid,
    Panel,
    Form,
    ButtonToolbar,
    Button,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [message, setMessage] = useState("");

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        console.log("Signup button clicked, handleSubmit triggered");

if (typeof e.preventDefault === 'function') {
    e.preventDefault();
}


        // Send formData to the backend
        console.log("Sending formData:", formData);
        try {
            const response = await fetch('http://127.0.0.1:8000/api/users/signup/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            // Handle the response data or errors
            console.log("Response from server:", data);
            setMessage(data.message || data.error);

        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className='SignUp'>
            <div style={{ textAlign: "center" }}>

    <div style={{ textAlign: "center", color: "red" }}>
        {message}
    </div>

                <h2>Pharmacy</h2>
                <h4 style={{ color: "#000080" }}>
                    Welcome To Our Website Pharmacy
                </h4>
            </div>
            <Content>
                <FlexboxGrid justify="center" style={{ margin: 20 }}>
                    <FlexboxGrid.Item>
                        <Panel header={<h3>SignUp</h3>} bordered>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.ControlLabel>Username</Form.ControlLabel>
                                    <Form.Control
                                        name="username"
                                        type="text"
                                        value={formData.name}
                                        onChange={(value) => handleInputChange("username", value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.ControlLabel>Email</Form.ControlLabel>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(value) => handleInputChange("email", value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.ControlLabel>Password</Form.ControlLabel>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={(value) => handleInputChange("password", value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <ButtonToolbar>
                                        <Button appearance="primary" type="submit">
                                            Sign Up
                                        </Button>
                                    </ButtonToolbar>
                                </Form.Group>
                            </Form>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </div>
    );
};

export default SignUp;
