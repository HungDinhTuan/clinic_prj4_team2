import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => (
    <div className="bg-light vh-100 p-3" style={{ width: "250px" }}>
        <div className="text-center mb-4">
            <img
                src="https://via.placeholder.com/80"
                alt="Clinic Logo"
                className="rounded-circle mb-3"
            />
            <h5>Phòng Xét Nghiệm</h5>
        </div>
        <Nav className="flex-column">
            <Nav.Link href="/">Trang chủ</Nav.Link>
            <Nav.Link href="/manage-tests">Quản lý xét nghiệm</Nav.Link>
            <Nav.Link href="/view-results">Kết quả xét nghiệm</Nav.Link>
            <Nav.Link href="/profile">Thông tin cá nhân</Nav.Link>
        </Nav>
    </div>
);

export default Sidebar;
