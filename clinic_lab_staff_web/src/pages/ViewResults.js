import React, { useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";

const ViewResults = () => {
    const [results] = useState([
        {
            id: 1,
            patientName: "Nguyen Van A",
            testName: "Xét nghiệm máu",
            status: "Hoàn thành",
            date: "2024-12-21",
            details: "Kết quả: Hồng cầu, bạch cầu bình thường.",
        },
        {
            id: 2,
            patientName: "Tran Thi B",
            testName: "Xét nghiệm nước tiểu",
            status: "Đang xử lý",
            date: "2024-12-20",
            details: "Chưa có kết quả.",
        },
        {
            id: 3,
            patientName: "Pham Van C",
            testName: "Xét nghiệm đường huyết",
            status: "Hoàn thành",
            date: "2024-12-19",
            details: "Kết quả: Đường huyết bình thường.",
        },
    ]);

    const [selectedResult, setSelectedResult] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleViewDetails = (result) => {
        setSelectedResult(result);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedResult(null);
    };

    return (
        <div>
            <h1>Danh sách kết quả xét nghiệm</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Tên bệnh nhân</th>
                    <th>Xét nghiệm</th>
                    <th>Trạng thái</th>
                    <th>Ngày thực hiện</th>
                    <th>Chi tiết</th>
                </tr>
                </thead>
                <tbody>
                {results.map((result) => (
                    <tr key={result.id}>
                        <td>{result.id}</td>
                        <td>{result.patientName}</td>
                        <td>{result.testName}</td>
                        <td>{result.status}</td>
                        <td>{result.date}</td>
                        <td>
                            <Button
                                variant="info"
                                size="sm"
                                onClick={() => handleViewDetails(result)}
                            >
                                Xem
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            {/* Modal xem chi tiết */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Chi tiết kết quả xét nghiệm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedResult ? (
                        <div>
                            <p>
                                <strong>Bệnh nhân:</strong> {selectedResult.patientName}
                            </p>
                            <p>
                                <strong>Xét nghiệm:</strong> {selectedResult.testName}
                            </p>
                            <p>
                                <strong>Kết quả:</strong> {selectedResult.details}
                            </p>
                            <p>
                                <strong>Ngày:</strong> {selectedResult.date}
                            </p>
                            <p>
                                <strong>Trạng thái:</strong> {selectedResult.status}
                            </p>
                        </div>
                    ) : (
                        <p>Không có thông tin chi tiết.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ViewResults;
