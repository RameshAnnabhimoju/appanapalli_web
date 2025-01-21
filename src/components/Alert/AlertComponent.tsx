import { Alert, Button } from "react-bootstrap";
import "./AlertComponent.css";
type alertPropsTypes = {
  show: boolean;
  setShow: React.Dispatch<
    React.SetStateAction<{
      show: boolean;
      heading: string;
      message: string;
    }>
  >;
  alertHeading: string;
  alertMessage: string;
};
const AlertComponent = ({
  show,
  setShow,
  alertHeading,
  alertMessage,
}: alertPropsTypes) => {
  if (show) {
    document.body.classList.add("alert-no-activity");
  } else {
    document.body.classList.remove("alert-no-activity");
  }
  return (
    <>
      {show && (
        <div id="alert-container">
          <Alert
            show={show}
            variant="light"
            onClose={() => setShow({ show: false, heading: "", message: "" })}
            id="alert"
          >
            <Alert.Heading>{alertHeading}</Alert.Heading>
            <p>{alertMessage}</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button
                onClick={() =>
                  setShow({ show: false, heading: "", message: "" })
                }
                variant="outline-danger"
              >
                Ok
              </Button>
            </div>
          </Alert>
        </div>
      )}
    </>
  );
};

export default AlertComponent;
