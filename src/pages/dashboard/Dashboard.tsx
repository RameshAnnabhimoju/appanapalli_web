import {
  Button,
  Dropdown,
  FloatingLabel,
  Form,
  Modal,
  Pagination,
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
import Spinner from "../../components/Spinner/SpinnerComponent";
const Dashboard = () => {
  const dateInitialValues = {
    fromDate: new Date(appUtils.getStartDate()).toISOString().split("T")[0],
    toDate: new Date(appUtils.getEndDate()).toISOString().split("T")[0],
  };
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [donationsData, setDonationsData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dateValues, setDateValues] = useState(dateInitialValues);
  const [loading, setLoading] = useState(false);
  const [menuSelectedValue, setMenuSelectedValue] = useState(
    "" as string | null
  );
  const LIMIT = 10;
  const navigate = useNavigate();
  const totalPages = Math.ceil(totalCount / LIMIT);

  useEffect(() => {
    getDonationData(dateValues.fromDate, dateValues.toDate, currentPage, LIMIT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  useEffect(() => {
    if (menuSelectedValue === "logout") {
      storageService.clearStorage();
      navigate("/login", { replace: true });
    }
  }, [menuSelectedValue, navigate]);
  const changeMenuHandler = (eventKey: string | null) => {
    setMenuSelectedValue(eventKey);
  };
  const getDonationData = (
    fromDate?: string,
    toDate?: string,
    page?: number,
    limit?: number
  ) => {
    try {
      setLoading(true);
      const params = { fromDate, toDate, page, limit };
      getDonations(params)
        .then((response) => {
          console.log(response);
          if (response?.type === "success" && response?.data?.length > 0) {
            setDonationsData(response?.data);
            setTotalCount(response?.totalCount);
          } else {
            setDonationsData([]);
          }
        })
        .finally(() => setLoading(false));
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
      <Spinner loading={loading} />
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
              onClick={() =>
                getDonationData(
                  dateValues.fromDate,
                  dateValues.toDate,
                  currentPage,
                  LIMIT
                )
              }
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
              {donationsData?.length > 0 ? (
                donationsData?.map((data: donationDataTypes) => {
                  return (
                    <tr key={data._id}>
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
              ) : (
                <tr>
                  <td colSpan={9} style={{ textAlign: "center" }}>
                    No Donations Data For Selected Date Range.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
      {donationsData?.length > 0 && (
        <Pagination id="dashboard-pagination">
          <Pagination.First
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />

          {currentPage > 3 && <Pagination.Ellipsis />}

          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            if (
              pageNumber >= currentPage - 2 &&
              pageNumber <= currentPage + 2
            ) {
              return (
                <Pagination.Item
                  key={pageNumber}
                  active={pageNumber === currentPage}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            }
            return null;
          })}

          {currentPage < totalPages - 2 && <Pagination.Ellipsis />}

          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      )}
      <FooterComponent />
      <Modal
        centered
        show={showModal}
        onHide={addActionHandler}
        size="lg"
        fullscreen
        scrollable
        style={{ padding: "100px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="dashboard-add-donation-form">
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Performance Date</Form.Label>
              <Form.Control type="date" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>On Behalf Of</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>On Behalf Of</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Booked On</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID Proof Type</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID Proof Number</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Occasion</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gothram</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID Proof</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Paksham</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Telugu Month</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Sub Tidi</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Payment Mode</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Select Date" />
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
    </div>
  );
};

export default Dashboard;
