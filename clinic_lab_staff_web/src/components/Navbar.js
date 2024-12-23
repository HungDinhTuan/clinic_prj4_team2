import React from "react";
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from "react-bootstrap";

const Navbar = () => (
    <BootstrapNavbar bg="primary" variant="dark" className="px-3">
        <BootstrapNavbar.Brand href="/">Dashboard Nhân Viên</BootstrapNavbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link href="#">🔔 Thông báo</Nav.Link>
            <NavDropdown title="Nguyễn Văn A" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/profile">Thông tin cá nhân</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">Đăng xuất</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    </BootstrapNavbar>
);

export default Navbar;
