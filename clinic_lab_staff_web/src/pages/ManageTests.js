import React from "react";
import { Table } from "react-bootstrap";

const ManageTests = () => (
    <div>
        <h1>Quản lý xét nghiệm</h1>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Tên xét nghiệm</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Xét nghiệm máu</td>
                <td>Hoàn thành</td>
                <td>2024-12-21</td>
            </tr>
            {/* Thêm nhiều dòng khác */}
            </tbody>
        </Table>
    </div>
);

export default ManageTests;
