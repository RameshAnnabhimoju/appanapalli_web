import "./TempleTimingsStyles.css";
const TempleTimings = () => {
  return (
    <div id="temple-timings-container">
      <div id="temple-timings-title">Temple Timings</div>
      <div id="temple-timings">
        <div className="temple-card-timings">
          <div className="temple-card-timings-title">
            Pratishta (Main) Temple Darshan Timings
          </div>
          <div className="temple-card-timings-data">
            <div className="temple-card-timings-item-title">Every Friday:</div>
            <div className="temple-card-timings-item">
              6:00 AM to 10:00 AM – Panchamrutabhishekam
            </div>
            <div className="temple-card-timings-item">
              From 10:00 AM onwards – General Darshan
            </div>
          </div>
          <div className="temple-card-timings-data">
            <div className="temple-card-timings-item-title">
              Every Saturday:
            </div>
            <div className="temple-card-timings-item">
              6:00 AM to 12:30 PM – General Darshan
            </div>
            <div className="temple-card-timings-item">
              2:30 PM to 7:00 PM – General Darshan
            </div>
          </div>
          <div className="temple-card-timings-data">
            <div className="temple-card-timings-item-title">Every Day:</div>
            <div className="temple-card-timings-item">
              6:00 AM to 12:30 PM – General Darshan
            </div>
            <div className="temple-card-timings-item">
              2:30 PM to 7:00 PM – General Darshan
            </div>
          </div>
        </div>
        <div className="temple-card-timings">
          <div className="temple-card-timings-title">
            Velisina Temple Darshan Timings
          </div>
          <div className="temple-card-timings-data">
            <div className="temple-card-timings-item-title">
              Every Saturday & Sunday:
            </div>
            <div className="temple-card-timings-item">
              5:30 AM to 12:00 PM – General Darshan
            </div>
            <div className="temple-card-timings-item">
              12:30 PM to 7:00 PM – General Darshan
            </div>
          </div>
          <div className="temple-card-timings-data">
            <div className="temple-card-timings-item-title">Every Day:</div>
            <div className="temple-card-timings-item">
              6:00 AM to 12:00 PM – General Darshan
            </div>
            <div className="temple-card-timings-item">
              12:30 PM to 7:00 PM – General Darshan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleTimings;
