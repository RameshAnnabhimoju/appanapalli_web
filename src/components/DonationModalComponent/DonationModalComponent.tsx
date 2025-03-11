import { Button, Form, Modal } from "react-bootstrap";
import { donationModalTypes } from "../../types/dashboardTypes";
import "./DonationModalComponent.css";
const DonationModalComponent = ({
  showModal,
  donationChangeHandler,
  donationData,
  donationModalhandler,
  donationSavehandler,
  pincodeHandler,
}: donationModalTypes) => {
  return (
    <div>
      <Modal
        centered
        show={showModal}
        onHide={donationModalhandler}
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
              <Form.Label>Recept No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter recept number"
                autoFocus
                name="recept_no"
                onChange={donationChangeHandler}
                value={donationData.recept_no}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Booked On</Form.Label>
              <Form.Control
                type="date"
                placeholder="Select Booked On Date"
                name="booked_on"
                onChange={donationChangeHandler}
                value={
                  donationData?.booked_on
                    ? new Date(donationData?.booked_on)
                        .toISOString()
                        .split("T")[0]
                    : ""
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Devotee</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter devotee name"
                name="devotee"
                onChange={donationChangeHandler}
                value={donationData.devotee}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Amount"
                name="amount"
                onChange={donationChangeHandler}
                value={donationData.amount}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gothram</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Gothram"
                name="gothram"
                onChange={donationChangeHandler}
                value={donationData.gothram}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Performance Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Select Performance Date"
                name="performance_date"
                onChange={donationChangeHandler}
                value={
                  donationData?.performance_date
                    ? new Date(donationData?.performance_date)
                        .toISOString()
                        .split("T")[0]
                    : ""
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>On Behalf Of</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter On Behalf Of"
                name="in_behalf_of"
                onChange={donationChangeHandler}
                value={donationData.in_behalf_of}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Occasion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Occasion"
                name="occasion"
                onChange={donationChangeHandler}
                value={donationData.occasion}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phone"
                onChange={donationChangeHandler}
                value={donationData.phone}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                name="email"
                onChange={donationChangeHandler}
                value={donationData.email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Payment Mode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Payment Mode"
                name="payment_mode"
                onChange={donationChangeHandler}
                value={donationData.payment_mode}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Donation</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="donation"
                onChange={donationChangeHandler}
                value={donationData.donation}
              >
                <option selected>Select Donation</option>
                <option value="అన్నదాన లఘు విరాళాలు">
                  అన్నదాన లఘు విరాళాలు
                </option>
                <option value="అన్నదాన లఘు విరాళాలు">
                  అన్నదాన లఘు విరాళాలు
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Booking ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter booking ID"
                name="booking_id"
                onChange={donationChangeHandler}
                value={donationData.booking_id}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Transaction ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter transaction iD"
                name="transaction_id"
                onChange={donationChangeHandler}
                value={donationData.transaction_id}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID Proof Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ID Proof Type"
                name="id_proof_type"
                onChange={donationChangeHandler}
                value={donationData.id_proof_type}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID Proof Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ID Proof Number"
                name="id_proof_number"
                onChange={donationChangeHandler}
                value={donationData.id_proof_number}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID Proof</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ID Proof"
                name="id_proof"
                onChange={donationChangeHandler}
                value={donationData.id_proof}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Pincode"
                name="pincode"
                onChange={donationChangeHandler}
                onBlur={pincodeHandler}
                value={donationData.pincode}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                name="address"
                onChange={donationChangeHandler}
                value={donationData.address}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Region</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Region"
                name="region"
                onChange={donationChangeHandler}
                value={donationData.region}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                name="city"
                onChange={donationChangeHandler}
                value={donationData.city}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter State"
                name="state"
                onChange={donationChangeHandler}
                value={donationData.state}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Country"
                name="country"
                onChange={donationChangeHandler}
                value={donationData.country}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Paksham</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Paksham"
                name="paksham"
                onChange={donationChangeHandler}
                value={donationData.paksham}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Telugu Month</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Telugu Month"
                name="telugu_month"
                onChange={donationChangeHandler}
                value={donationData.telugu_month}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Sub Tidi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Sub Tidi"
                name="sub_tidi"
                onChange={donationChangeHandler}
                value={donationData.tidi}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={donationModalhandler}>
            Close
          </Button>
          <Button variant="danger" onClick={donationSavehandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DonationModalComponent;
