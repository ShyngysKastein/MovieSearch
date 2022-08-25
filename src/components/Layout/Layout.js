import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Outlet,Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => (
    <>
        <header>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">TV Shows</Navbar.Brand>
            </Container>
        </Navbar>
        </header>
        <main>
            <div  className="main">
                <Outlet/>
            </div>
        </main>
    </>
)

export default Layout;