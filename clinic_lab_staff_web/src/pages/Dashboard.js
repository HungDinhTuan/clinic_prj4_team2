import React, { useState } from "react";
import { Row, Col, Card, ListGroup, Button, Modal, Form } from "react-bootstrap";

const Dashboard = () => {
    // State quản lý bệnh nhân và xét nghiệm
    const [patients, setPatients] = useState([
        {
            id: 1,
            name: "Nguyễn Văn A",
            tests: [
                { id: 101, name: "Xét nghiệm máu", status: "Hoàn thành" },
                { id: 102, name: "Xét nghiệm nước tiểu", status: "Đang xử lý" },
            ],
        },
        {
            id: 2,
            name: "Trần Thị B",
            tests: [
                { id: 201, name: "Xét nghiệm đường huyết", status: "Chờ xử lý" },
            ],
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [currentPatient, setCurrentPatient] = useState(null);
    const [currentTest, setCurrentTest] = useState(null);

    // Đánh dấu xét nghiệm là "Hoàn thành"
    const markAsComplete = (patientId, testId) => {
        setPatients((prevPatients) =>
            prevPatients.map((patient) =>
                patient.id === patientId
                    ? {
                        ...patient,
                        tests: patient.tests.map((test) =>
                            test.id === testId ? { ...test, status: "Hoàn thành" } : test
                        ),
                    }
                    : patient
            )
        );
    };

    // Xóa xét nghiệm
    const deleteTest = (patientId, testId) => {
        setPatients((prevPatients) =>
            prevPatients.map((patient) =>
                patient.id === patientId
                    ? { ...patient, tests: patient.tests.filter((test) => test.id !== testId) }
                    : patient
            )
        );
    };

    // Mở modal chỉnh sửa
    const handleEdit = (patient, test) => {
        setCurrentPatient(patient);
        setCurrentTest(test);
        setShowModal(true);
    };

    // Lưu thay đổi trong modal
    const saveChanges = () => {
        setPatients((prevPatients) =>
            prevPatients.map((patient) =>
                patient.id === currentPatient.id
                    ? {
                        ...patient,
                        tests: patient.tests.map((test) =>
                            test.id === currentTest.id ? { ...currentTest } : test
                        ),
                    }
                    : patient
            )
        );
        setShowModal(false);
    };

    return (
        <div className="p-4">
            <h1>Dashboard Nhân Viên Xét Nghiệm</h1>

            {/* Danh sách bệnh nhân và xét nghiệm */}
            <Row>
                {patients.map((patient) => (
                    <Col md={6} key={patient.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <h5>Bệnh nhân: {patient.name}</h5>
                                <ListGroup>
                                    {patient.tests.map((test) => (
                                        <ListGroup.Item
                                            key={test.id}
                                            className="d-flex justify-content-between align-items-center"
                                        >
                                            <div>
                                                <strong>{test.name}</strong> -{" "}
                                                <span
                                                    className={
                                                        test.status === "Hoàn thành"
                                                            ? "text-success"
                                                            : test.status === "Đang xử lý"
                                                                ? "text-warning"
                                                                : "text-secondary"
                                                    }
                                                >
                          {test.status}
                        </span>
                                            </div>
                                            <div>
                                                {test.status !== "Hoàn thành" && (
                                                    <Button
                                                        variant="success"
                                                        size="sm"
                                                        className="me-2"
                                                        onClick={() => markAsComplete(patient.id, test.id)}
                                                    >
                                                        Hoàn thành
                                                    </Button>
                                                )}
                                                <Button
                                                    variant="primary"
                                                    size="sm"
                                                    className="me-2"
                                                    onClick={() => handleEdit(patient, test)}
                                                >
                                                    Chỉnh sửa
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => deleteTest(patient.id, test.id)}
                                                >
                                                    Xóa
                                                </Button>
                                            </div>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Modal chỉnh sửa */}
            {currentTest && (
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Chỉnh sửa xét nghiệm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Tên xét nghiệm</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={currentTest.name}
                                    onChange={(e) =>
                                        setCurrentTest({ ...currentTest, name: e.target.value })
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label>Trạng thái</Form.Label>
                                <Form.Select
                                    value={currentTest.status}
                                    onChange={(e) =>
                                        setCurrentTest({ ...currentTest, status: e.target.value })
                                    }
                                >
                                    <option value="Hoàn thành">Hoàn thành</option>
                                    <option value="Đang xử lý">Đang xử lý</option>
                                    <option value="Chờ xử lý">Chờ xử lý</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Hủy
                        </Button>
                        <Button variant="primary" onClick={saveChanges}>
                            Lưu
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default Dashboard;
