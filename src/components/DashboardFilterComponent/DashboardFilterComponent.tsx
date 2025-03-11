import {
  FloatingLabel,
  Button,
  Dropdown,
  Form,
  DropdownButton,
  InputGroup,
} from "react-bootstrap";
import "./DashboardFilterComponent.css";
import { dashboardFilterTypes } from "../../types/dashboardTypes";
const DashboardFilterComponent = ({
  dateValues,
  dateChangeHandler,
  submitDatesHandler,
  donationModalHandler,
  bulkUploadActionHandler,
  exportToExcelHandler,
  changeMenuHandler,
}: dashboardFilterTypes) => {
  return (
    <div id="dashboard-action-container">
      <InputGroup>
        <Dropdown onSelect={changeMenuHandler}>
          <Dropdown.Toggle variant="danger">Sort Date By</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item key="booked_on" eventKey="booked_on">
              Booking Date
            </Dropdown.Item>
            <Dropdown.Item key="performance_date" eventKey="performance_date">
              Performance Date
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
        <Button
          variant="danger"
          id="button-addon1"
          onClick={submitDatesHandler}
        >
          SUBMIT DATES
        </Button>
      </InputGroup>
      <InputGroup>
        <DropdownButton variant="danger" title="Seach By">
          <div id="dashboard-search-dropdown">
            <Dropdown.Item key="devotee" eventKey="devotee">
              Devotee
            </Dropdown.Item>
            <Dropdown.Item key="phone" eventKey="phone">
              Phone
            </Dropdown.Item>
            <Dropdown.Item key="performance_date" eventKey="performance_date">
              Performance Date
            </Dropdown.Item>
            <Dropdown.Item key="transaction_id" eventKey="transaction_id">
              Transaction ID
            </Dropdown.Item>
            <Dropdown.Item key="recept_no" eventKey="recept_no">
              Receipt No
            </Dropdown.Item>
            <Dropdown.Item key="booking_id" eventKey="booking_id">
              Booking ID
            </Dropdown.Item>
            <Dropdown.Item key="in_behalf_of" eventKey="in_behalf_of">
              In Behalf Of
            </Dropdown.Item>
            <Dropdown.Item key="amount" eventKey="amount">
              Amount
            </Dropdown.Item>
            <Dropdown.Item key="booked_on" eventKey="booked_on">
              Booked On
            </Dropdown.Item>
            <Dropdown.Item key="id_proof_number" eventKey="id_proof_number">
              ID Proof Number
            </Dropdown.Item>
            <Dropdown.Item key="occasion" eventKey="occasion">
              Occasion
            </Dropdown.Item>
            <Dropdown.Item key="email" eventKey="email">
              Email
            </Dropdown.Item>
            <Dropdown.Item key="gothram" eventKey="gothram">
              Gothram
            </Dropdown.Item>
            <Dropdown.Item key="pincode" eventKey="pincode">
              Pincode
            </Dropdown.Item>
            <Dropdown.Item key="state" eventKey="state">
              State
            </Dropdown.Item>
            <Dropdown.Item key="country" eventKey="country">
              Country
            </Dropdown.Item>
            <Dropdown.Item key="paksham" eventKey="paksham">
              Paksham
            </Dropdown.Item>
            <Dropdown.Item key="telugu_month" eventKey="telugu_month">
              Telugu Month
            </Dropdown.Item>
            <Dropdown.Item key="sub_tidi" eventKey="sub_tidi">
              Sub Tidi
            </Dropdown.Item>
            <Dropdown.Item key="payment_mode" eventKey="payment_mode">
              Payment Mode
            </Dropdown.Item>
          </div>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
        <Button variant="danger" id="button-addon1">
          SEARCH
        </Button>
      </InputGroup>
      <Dropdown onSelect={changeMenuHandler} id="dashboard-options-dropdown">
        <Dropdown.Toggle variant="outline-danger" id="dashboard-options">
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
      <span id="dashboard-actions">
        <Button
          className="btn-danger dashboard-action-button"
          onClick={donationModalHandler}
        >
          ADD NEW DONATION
        </Button>
        <Button
          className="btn-danger dashboard-action-button"
          onClick={() => bulkUploadActionHandler("close")}
        >
          BULK UPLOAD FROM EXCEL
        </Button>
        <Button
          className="btn-danger dashboard-action-button"
          onClick={exportToExcelHandler}
        >
          EXPORT TO EXCEL
        </Button>
      </span>
    </div>
  );
};

export default DashboardFilterComponent;
