import "./SpinnerComponent.css";
import { Spinner } from "react-bootstrap";
const SpinnerComponent = ({ loading }: { loading: boolean }) => {
  if (loading) {
    document.body.classList.add("no-activity");
  } else {
    document.body.classList.remove("no-activity");
  }
  return (
    <>
      {loading ? (
        <div id="spinner-container">
          <Spinner id="spinner" />
        </div>
      ) : (
        <div />
      )}
    </>
  );
};

export default SpinnerComponent;
