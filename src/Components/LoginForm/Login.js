import React, { useState } from 'react';
import {
    Content,
    FlexboxGrid,
    Panel,
    Form,
    ButtonToolbar,
    Button,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";



const Login = () => {
    // const [submitted, setSubmitted] = useState(false);
    // const handleSubmit2 = () => {
    //     setSubmitted(true)
    // }

    const [formData, setFormData] = useState({
        username: "",
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
        if (typeof e.preventDefault === 'function') {
            e.preventDefault();
        }
        // Send formData to the backend
        console.log("Sending formData:", formData);
        try {
            const response = await fetch('http://127.0.0.1:8000/api/users/login/', {
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
        <div className='Login' style={{ marginBottom: '80px' }}>
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
                        <Panel header={<h3>Login</h3>} bordered>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.ControlLabel>Username</Form.ControlLabel>
                                    <Form.Control
                                        name="username"
                                        type="text"
                                        value={formData.username}
                                        onChange={(value) => handleInputChange("username", value)}
                                        required
                                    />
                                    <Form.HelpText tooltip>Required</Form.HelpText>
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
                                        <Button appearance="primary" backgroundColor="#000080" type="submit">
                                            Submit
                                        </Button>
                                        {/* {submitted && <Main/>} */}
                                        <Button appearance="ghost" color="red">
                                            Cancel
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
}
export default Login;
