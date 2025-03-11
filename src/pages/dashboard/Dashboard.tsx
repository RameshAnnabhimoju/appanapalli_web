import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./Dashboard.css";
import { useState, useEffect, ChangeEvent } from "react";
import {
  saveDonation,
  getDonations,
  downloadDonationsExcel,
  uploadDonationsExcel,
  getAddressByPincode,
} from "../../services/appService";
import {
  donationDataTypes,
  addDonationTypes,
} from "../../types/dashboardTypes";
import { appUtils } from "../../utils/appUtils";
import { storageService } from "../../services/storageService";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/SpinnerComponent";
import AlertComponent from "../../components/Alert/AlertComponent";
import DonationModalComponent from "../../components/DonationModalComponent/DonationModalComponent";
import BulkImportModalComponent from "../../components/BulkImportModalComponent/BulkImportModalComponent";
import DashboardFilterComponent from "../../components/DashboardFilterComponent/DashboardFilterComponent";
import PagenationComponent from "../../components/PagenationComponent/PagenationComponent";
import DashboardTableComponent from "../../components/DashboardTableComponent/DashboardTableComponent";
const Dashboard = () => {
  const dateInitialValues = {
    fromDate: new Date(appUtils.getStartDate()).toISOString().split("T")[0],
    toDate: new Date(appUtils.getEndDate()).toISOString().split("T")[0],
  };
  const donationInitialValues = {
    recept_no: "",
    devotee: "",
    phone: "",
    address: "",
    donation: "",
    performance_date: "",
    transaction_id: "",
    booking_id: "",
    in_behalf_of: "",
    amount: 0,
    booked_on: "",
    id_proof_type: "",
    id_proof_number: "",
    occasion: "",
    email: "",
    gothram: "",
    id_proof: "",
    pincode: "",
    state: "",
    city: "",
    district: "",
    region: "",
    country: "",
    paksham: "",
    telugu_month: "",
    sub_tidi: "",
    payment_mode: "",
  } as addDonationTypes;
  const [showModal, setShowModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [donationsData, setDonationsData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dateValues, setDateValues] = useState(dateInitialValues);
  const [loading, setLoading] = useState(false);
  const [menuSelectedValue, setMenuSelectedValue] = useState(
    "" as string | null
  );
  const [donationData, setDonationData] = useState(donationInitialValues);
  const [alertData, setAlertData] = useState({
    show: false,
    heading: "",
    message: "",
  });
  const [excelFile, setExcelFile] = useState<File | null>(null);
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
          // console.log(response);
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

  const donationChangeHandler = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    setDonationData({ ...donationData, [name]: value });
  };

  const donationModalHandler = () => {
    setDonationData(donationInitialValues);
    setShowModal(!showModal);
  };

  const editActionHandler = (id: string) => {
    // setShowEditModal(!showEditModal);
    // console.log(donationsData);
    const data = donationsData.find(
      (item: donationDataTypes) => item._id === id
    );
    if (data) {
      setDonationData(data);
    }
    setShowModal(!showModal);
  };

  const bulkUploadActionHandler = (button: string) => {
    if (button === "upload") {
      setLoading(true);
      try {
        if (excelFile) {
          uploadDonationsExcel(excelFile).then((response) => {
            setLoading(false);
            setShowUploadModal(false);
            if (response?.type === "success") {
              console.log("Excel downloaded successfully");
              setTimeout(
                () =>
                  setAlertData({
                    show: true,
                    heading: "SUCCESS",
                    message: "Excel uploaded Successfully",
                  }),
                500
              );
            }
          });
        }
      } catch (error) {
        setLoading(false);
        setShowUploadModal(false);
        setTimeout(
          () =>
            setAlertData({
              show: true,
              heading: "FAILURE",
              message: "Excel upload failed",
            }),
          500
        );
        console.log("Error @ Dashboard > bulkUploadActionHandler ", error);
      }
    } else {
      setShowUploadModal(!showUploadModal);
    }
  };

  const donationSavehandler = () => {
    try {
      setLoading(true);
      saveDonation(donationData)
        .then((response) => {
          if (response?.type === "success") {
            console.log("Donation Added Successfully");
            // setTimeout(() => window.alert("Donation Added Successfully"), 500);
            setTimeout(
              () =>
                setAlertData({
                  show: true,
                  heading: "SUCCESS",
                  message: "Donation Saved Successfully",
                }),
              500
            );
            submitDatesHandler();
            setDonationData(donationInitialValues);
          }
        })
        .finally(() => {
          setLoading(false);
          setShowModal(false);
        });
    } catch (error) {
      setLoading(false);
      console.log("Error @ Dashboard > addActionHandler ", error);
    }
  };

  const submitDatesHandler = () => {
    getDonationData(dateValues.fromDate, dateValues.toDate, 1, LIMIT);
    setCurrentPage(1);
  };

  const exportToExcelHandler = () => {
    try {
      setLoading(true);
      const params = {
        fromDate: dateValues.fromDate,
        toDate: dateValues.toDate,
      };
      downloadDonationsExcel(params)
        .then((response) => {
          if (response?.type === "success") {
            console.log("Excel downloaded successfully");
          }
        })
        .finally(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      setTimeout(
        () =>
          setAlertData({
            show: true,
            heading: "FAILURE",
            message: "Excel download failed",
          }),
        500
      );
      console.log("Error @ Dashboard > exportToExcelHandler ", error);
    }
  };

  const uploadExcelChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = event?.target?.files?.[0];
      if (file) {
        setExcelFile(file);
      }
    } catch (error) {
      console.log("Error @ Dashboard > uploadExcelChangeHandler ", error);
    }
  };

  const pincodeHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    const pincode = name == "pincode" ? value : "";
    if (pincode.length === 6) {
      try {
        getAddressByPincode(pincode).then((response) => {
          if (response?.active === 1) {
            console.log("Address fetched successfully");
            const regionName = response?.records[0]?.officename || "";

            // Remove variations of HO, H.O, BO, B.O, S.O, SO
            const cleanedRegionName = regionName
              .replace(/\b(H\.?O|B\.?O|S\.?O)\b/gi, "")
              .trim();

            const cityName = response?.records[0]?.divisionname || "";

            // Remove "division", "east", "west", "north", "south" (case insensitive)
            const cleanedCityName = cityName
              .replace(/\b(division|east|west|north|south)\b/gi, "")
              .trim();

            setDonationData({
              ...donationData,
              state: response?.records[0]?.statename,
              country: response?.records[0]?.country || "India",
              district: response?.records[0]?.district,
              region: cleanedRegionName,
              city: cleanedCityName,
            });
          }
        });
      } catch (error) {
        console.log("Error @ Dashboard > pincodeHandler ", error);
      }
    }
  };

  return (
    <div id="dashboard-container">
      <Spinner loading={loading} />
      <AlertComponent
        show={alertData.show}
        setShow={setAlertData}
        alertHeading={alertData.heading}
        alertMessage={alertData.message}
      />
      <HeaderComponent />
      <div id="dashboard-body">
        <DashboardFilterComponent
          dateValues={dateValues}
          dateChangeHandler={dateChangeHandler}
          submitDatesHandler={submitDatesHandler}
          donationModalHandler={donationModalHandler}
          bulkUploadActionHandler={bulkUploadActionHandler}
          exportToExcelHandler={exportToExcelHandler}
          changeMenuHandler={changeMenuHandler}
        />
        <DashboardTableComponent
          donationsData={donationsData}
          editActionHandler={editActionHandler}
        />
      </div>
      <PagenationComponent
        donationsData={donationsData}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <FooterComponent />
      <DonationModalComponent
        showModal={showModal}
        donationChangeHandler={donationChangeHandler}
        donationData={donationData}
        donationSavehandler={donationSavehandler}
        donationModalhandler={donationModalHandler}
        pincodeHandler={pincodeHandler}
      />
      <BulkImportModalComponent
        showUploadModal={showUploadModal}
        bulkUploadActionHandler={bulkUploadActionHandler}
        uploadExcelChangeHandler={uploadExcelChangeHandler}
      />
    </div>
  );
};

export default Dashboard;
