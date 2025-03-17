import { ChangeEvent } from "react";

export type donationDataTypes = {
  fromDate?: string;
  toDate?: string;
  _id?: string;
  devotee?: string;
  phone?: string;
  address?: string;
  donation?: string;
  performance_date?: string;
  recept_no?: string;
  in_behalf_of?: string;
  amount?: number;
  booked_on?: string;
  occasion?: string;
  email?: string;
  gothram?: string;
  pincode?: string;
  state?: string;
  city?: string;
  district?: string;
  region?: string;
  country?: string;
  paksham?: string;
  telugu_month?: string;
  tidi?: string;
  createdAt?: string;
  updatedAt?: string;
};
export type addDonationTypes = {
  _id?: string;
  devotee?: string;
  phone?: string;
  address?: string;
  donation?: string;
  performance_date?: string;
  recept_no?: string;
  in_behalf_of?: string;
  amount?: number;
  booked_on?: string;
  occasion?: string;
  email?: string;
  gothram?: string;
  pincode?: string;
  state?: string;
  city?: string;
  region?: string;
  district?: string;
  country?: string;
  paksham?: string;
  telugu_month?: string;
  tidi?: string;
};

export type donationModalTypes = {
  showModal: boolean;
  donationChangeHandler: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  donationData: donationDataTypes;
  donationModalhandler: () => void;
  donationSavehandler: () => void;
  pincodeHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
};
export type BulkImportModalTypes = {
  showUploadModal: boolean;
  bulkUploadActionHandler: (action: string) => void;
  uploadExcelChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};
export type dashboardFilterTypes = {
  dateValues: { fromDate: string; toDate: string };
  sortdateBy: string;
  searchBy: string;
  searchValue: string;
  dateChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  submitDatesHandler: () => void;
  donationModalHandler: () => void;
  bulkUploadActionHandler: (button: string) => void;
  exportToExcelHandler: () => void;
  changeMenuHandler: (eventKey: string | null) => void;
  searchChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  changeSearchHandler: (eventKey: string | null) => void;
  changeDateHandler: (eventKey: string | null) => void;
  searchhandler: () => void;
  resetFiltersHandler: () => void;
};
export type pagenationTypes = {
  donationsData: donationDataTypes[];
  handlePageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
};
export type dashboardTableTypes = {
  editActionHandler: (id: string) => void;
  donationsData: donationDataTypes[];
};
