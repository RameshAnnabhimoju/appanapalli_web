import { Table } from "react-bootstrap";
import {
  dashboardTableTypes,
  donationDataTypes,
} from "../../types/dashboardTypes";
import "./DashboardTableComponent.css";
const DashboardTableComponent = ({
  donationsData,
  editActionHandler,
}: dashboardTableTypes) => {
  return (
    <div id="dashboard-table">
      <Table striped hover id="dashboard-table" responsive="sm">
        <thead>
          <tr>
            <th>Recept No</th>
            <th>Booking Date</th>
            <th>Performance Date</th>
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
                  <td>{data?.recept_no}</td>
                  <td>{data?.booked_on?.split("T")[0]}</td>
                  <td>{data?.performance_date?.split("T")[0]}</td>
                  <td>{data?.devotee}</td>
                  <td>{data?.phone}</td>
                  <td>{data?.donation}</td>
                  <td>{data?.booking_id}</td>
                  <td>{data?.transaction_id}</td>
                  <td>{data?.amount}</td>
                  <td
                    className="dashboard-table-data-action"
                    onClick={() => data._id && editActionHandler(data._id)}
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
  );
};

export default DashboardTableComponent;
