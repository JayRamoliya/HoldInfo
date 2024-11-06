import React from 'react'
import { Navbar, Nav, Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="px-3 d-flex align-items-center justify-content-around">
            <Navbar.Brand href="#home" style={{ color: '#55e5cb' }}>HODLINFO</Navbar.Brand>
            <Nav className="ml-auto d-flex align-items-center justify-content-around">
                <DropdownButton
                    id="dropdown-currency"
                    title="INR"
                    variant="secondary"
                    className="me-2"
                >
                    <Dropdown.Item href="#inr">INR</Dropdown.Item>
                    <Dropdown.Item href="#usd">USD</Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    id="dropdown-crypto"
                    title="BTC"
                    variant="secondary"
                    className="me-2"
                >
                    <Dropdown.Item href="#btc">BTC</Dropdown.Item>
                    <Dropdown.Item href="#eth">ETH</Dropdown.Item>
                </DropdownButton>

                {/* Buy Button */}
                <Button variant="secondary" className="me-3">Buy BTC</Button>

                {/* Telegram Connection */}
                <div className="d-flex align-items-center me-3">
                    <div
                        style={{
                            backgroundColor: '#55e5cb',
                            borderRadius: '50%',
                            color: 'black',
                            width: '25px',
                            height: '25px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                        }}
                    >
                        57
                    </div>
                    <Button variant="info" className="ms-2">
                        <i className="fab fa-telegram-plane"></i> Connect Telegram
                    </Button>
                </div>

                <Form.Check
                    type="switch"
                    id="custom-switch"
                    className="ms-2"
                />
            </Nav>
        </Navbar>
    )
}

export default Header