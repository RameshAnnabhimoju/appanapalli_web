import { Modal, Button, Form } from "react-bootstrap";
import { BulkImportModalTypes } from "../../types/dashboardTypes";

const BulkImportModalComponent = ({
  showUploadModal,
  bulkUploadActionHandler,
  uploadExcelChangeHandler,
}: BulkImportModalTypes) => {
  return (
    <div>
      <Modal
        centered
        show={showUploadModal}
        onHide={() => bulkUploadActionHandler("close")}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bulk Upload from Excel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Choose Excel file</Form.Label>
            <Form.Control
              type="file"
              placeholder="Choose Excel file"
              accept=".xlsx, .xls"
              onChange={uploadExcelChangeHandler}
              autoFocus
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => bulkUploadActionHandler("close")}
          >
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => bulkUploadActionHandler("upload")}
          >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BulkImportModalComponent;
