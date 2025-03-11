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
import { appUtils } from "../../utils/appUtils";
const DashboardFilterComponent = ({
  dateValues,
  sortdateBy,
  searchBy,
  searchValue,
  dateChangeHandler,
  submitDatesHandler,
  donationModalHandler,
  bulkUploadActionHandler,
  exportToExcelHandler,
  changeMenuHandler,
  searchChangeHandler,
  changeSearchHandler,
  changeDateHandler,
  searchhandler,
  resetFiltersHandler,
}: dashboardFilterTypes) => {
  const searchkeys = [
    { key: "devotee", value: "Devotee" },
    { key: "phone", value: "Phone" },
    { key: "performance_date", value: "Performance Date" },
    { key: "transaction_id", value: "Transaction ID" },
    { key: "recept_no", value: "Receipt No" },
    { key: "booking_id", value: "Booking ID" },
    { key: "in_behalf_of", value: "In Behalf Of" },
    { key: "amount", value: "Amount" },
    { key: "booked_on", value: "Booked On" },
    { key: "id_proof_number", value: "ID Proof Number" },
    { key: "occasion", value: "Occasion" },
    { key: "email", value: "Email" },
    { key: "gothram", value: "Gothram" },
    { key: "pincode", value: "Pincode" },
    { key: "state", value: "State" },
    { key: "city", value: "City" },
    { key: "district", value: "District" },
    { key: "region", value: "Region" },
    { key: "country", value: "Country" },
    { key: "paksham", value: "Paksham" },
    { key: "telugu_month", value: "Telugu Month" },
    { key: "tidi", value: "Tidi" },
    { key: "payment_mode", value: "Payment Mode" },
  ];

  return (
    <div id="dashboard-action-container">
      <InputGroup>
        <Dropdown onSelect={changeDateHandler}>
          <Dropdown.Toggle variant="danger" id="dashboard-sort-dropdown">
            {appUtils.capitalize(sortdateBy) || "Sort Date By"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item key="booked_on" eventKey="booked_on">
              Booked On
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
        <DropdownButton
          variant="danger"
          title={appUtils.capitalize(searchBy) || "Search By"}
          onSelect={changeSearchHandler}
          id="dashboard-search-dropdown"
        >
          <div id="dashboard-search-dropdown">
            {searchkeys.map((key) => (
              <Dropdown.Item key={key.key} eventKey={key.key}>
                {key.value}
              </Dropdown.Item>
            ))}
          </div>
        </DropdownButton>
        <Form.Control
          name="search-input"
          placeholder={
            searchBy != "Search By"
              ? "Search by " + appUtils.capitalize(searchBy)
              : "select key to search by and type here to search"
          }
          onChange={searchChangeHandler}
          value={searchValue}
        />
        <Button variant="danger" id="button-addon1" onClick={searchhandler}>
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
        <Button
          className="btn-danger dashboard-action-button"
          onClick={resetFiltersHandler}
        >
          RESET ALL FILTERS
        </Button>
      </span>
    </div>
  );
};

export default DashboardFilterComponent;
