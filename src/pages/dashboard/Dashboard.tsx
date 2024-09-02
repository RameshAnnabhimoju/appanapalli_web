import {
  Button,
  Dropdown,
  FloatingLabel,
  Form,
  Modal,
  Pagination,
  Spinner,
  Table,
} from "react-bootstrap";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./Dashboard.css";
import { useState, useEffect, ChangeEvent } from "react";
import { getDonations } from "../../services/appService";
import { donationDataTypes } from "../../types/dashboardTypes";
import { appUtils } from "../../utils/appUtils";
import { storageService } from "../../services/storageService";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const dateInitialValues = {
    fromDate: new Date(appUtils.getStartDate()).toISOString().split("T")[0],
    toDate: new Date(appUtils.getEndDate()).toISOString().split("T")[0],
  };
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [donationsData, setDonationsData] = useState([]);
  const [dateValues, setDateValues] = useState(dateInitialValues);
  const [loading, setLoading] = useState(false);
  const [menuSelectedValue, setMenuSelectedValue] = useState(
    "" as string | null
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (menuSelectedValue === "logout") {
      storageService.clearStorage();
      navigate("/login", { replace: true });
    }
  }, [menuSelectedValue, navigate]);
  const changeMenuHandler = (eventKey: string | null) => {
    setMenuSelectedValue(eventKey);
  };
  const getDonationData = (dates?: { fromDate: string; toDate: string }) => {
    try {
      setLoading(true);
      const params = { ...dates };
      getDonations(params).then((response) => {
        console.log(response);
        if (response?.type === "success" && response?.data?.length > 0) {
          setDonationsData(response?.data);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log("Error @ Dashboard > getDonationData ", error);
    }
  };
  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setDateValues({ ...dateValues, [name]: value });
  };
  useEffect(() => {
    getDonationData();
  }, []);
  const addActionHandler = () => {
    setShowModal(!showModal);
  };
  const editActionHandler = () => {
    setShowEditModal(!showEditModal);
  };
  const bulkUploadActionHandler = () => {
    setShowUploadModal(!showUploadModal);
  };
  return (
    <div id="dashboard-container">
      <HeaderComponent />
      <div id="dashboard-body">
        <div id="dashboard-action-container">
          <span id="dashboard-date-range">
            <FloatingLabel
              controlId="date"
              label="From"
              className="dashboard-action-input"
            >
              <Form.Control
                type="date"
                name="fromDate"
                value={dateValues.fromDate}
                onChange={dateChangeHandler}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="date"
              label="To"
              className="dashboard-action-input"
            >
              <Form.Control
                type="date"
                name="toDate"
                value={dateValues.toDate}
                onChange={dateChangeHandler}
              />
            </FloatingLabel>
          </span>
          <span id="dashboard-actions">
            <Button
              className="btn-danger"
              onClick={() => getDonationData(dateValues)}
            >
              SUBMIT DATES
            </Button>
            <Button className="btn-danger" onClick={addActionHandler}>
              ADD NEW DONATION
            </Button>
            <Button className="btn-danger" onClick={bulkUploadActionHandler}>
              BULK UPLOAD FROM EXCEL
            </Button>
            <Button className="btn-danger">EXPORT TO EXCEL</Button>
          </span>
          <Dropdown onSelect={changeMenuHandler}>
            <Dropdown.Toggle variant="" id="dashboard-options">
              Hi, User
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item key="profile" eventKey="profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Item key="changePassword" eventKey="changePassword">
                Change Password
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item key="logout" eventKey="logout">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div id="dashboard-table">
          <Table striped hover id="dashboard-table" responsive="sm">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Booking Date</th>
                <th>Devotee</th>
                <th>Phone</th>
                <th>Donation</th>
                <th>Booking ID</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {donationsData?.length > 0
                ? donationsData?.map((data: donationDataTypes) => {
                    return (
                      <tr>
                        <td>{data?.serial_no}</td>
                        <td>{data?.booked_on?.split("T")[0]}</td>
                        <td>{data?.devotee}</td>
                        <td>{data?.phone}</td>
                        <td>{data?.donation}</td>
                        <td>{data?.booking_id}</td>
                        <td>{data?.transaction_id}</td>
                        <td>{data?.amount}</td>
                        <td
                          className="dashboard-table-data-action"
                          onClick={editActionHandler}
                        >
                          Edit
                        </td>
                      </tr>
                    );
                  })
                : "No Donations Data For Selected Date Range."}
            </tbody>
          </Table>
        </div>
      </div>
      <Pagination id="dashboard-pagenation">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      <FooterComponent />
      <Modal centered show={showModal} onHide={addActionHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Serial No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter serial number"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Devotee</Form.Label>
              <Form.Control type="text" placeholder="Enter devotee name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>

            <Form.Label>Donation</Form.Label>
            <Form.Select aria-label="Default select example">
              <option selected>Select Donation</option>
              <option value="అన్నదాన లఘు విరాళాలు">అన్నదాన లఘు విరాళాలు</option>
              <option value="అన్నదాన లఘు విరాళాలు">అన్నదాన లఘు విరాళాలు</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Booking ID</Form.Label>
              <Form.Control type="text" placeholder="Enter booking ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Transaction ID</Form.Label>
              <Form.Control type="text" placeholder="Enter transaction iD" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="text" placeholder="Enter Amount" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={addActionHandler}>
            Close
          </Button>
          <Button variant="danger" onClick={addActionHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal centered show={showUploadModal} onHide={bulkUploadActionHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Bulk Upload from Excel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Choose Excel file</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter serial number"
              autoFocus
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={bulkUploadActionHandler}>
            Close
          </Button>
          <Button variant="danger" onClick={bulkUploadActionHandler}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      {loading ? <Spinner /> : ""}
    </div>
  );
};

export default Dashboard;
