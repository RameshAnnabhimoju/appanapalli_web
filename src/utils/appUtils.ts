export const appUtils = {
  getStartDate: (fromDate?: string) => {
    const currentDate = new Date();
    return fromDate
      ? new Date(fromDate).setHours(0, 0, 0, 0)
      : new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() > 0
            ? currentDate.getMonth() - 1
            : currentDate.getMonth(),
          currentDate.getDate()
        ).setHours(0, 0, 0, 0);
  },
  getEndDate: (ToDate?: string) => {
    return ToDate
      ? new Date(ToDate).setHours(23, 59, 59, 999)
      : new Date().setHours(23, 59, 59, 999);
  },
};
