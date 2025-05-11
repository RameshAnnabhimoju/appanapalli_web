import { useContext } from "react";
import "./TempleTimingsStyles.css";
import { LanguageContext } from "../../contexts/LanguageContext";
const TempleTimings = () => {
  const { language } = useContext(LanguageContext);
  type TempleDataType = {
    title: string;
    mainTemple: {
      title: string;
      timings: {
        title: string;
        timing1: string;
        timing2: string;
        timing3?: string;
      }[];
    };
    subTemple: {
      title: string;
      timings: {
        title: string;
        timing1: string;
        timing2: string;
      }[];
    };
  };
  const englishData: TempleDataType = {
    title: "Temple Timings",
    mainTemple: {
      title: "Pratishta (Main) Temple Darshan Timings",
      timings: [
        {
          title: "Every Friday:",
          timing1: "6:00 AM to 10:00 AM – Panchamrutabhishekam",
          timing2: "From 10:00 AM onwards – General Darshan",
        },
        {
          title: "Every Saturday:",
          timing1: "4:30 AM – Suprabhata Seva",
          timing2: "5:30 AM to 1:00 PM – General Darshan",
          timing3: "2:30 PM to 7:00 PM – General Darshan",
        },
        {
          title: "Every Day:",
          timing1: "6:00 AM to 12:30 PM – General Darshan",
          timing2: "2:30 PM to 7:00 PM – General Darshan",
        },
      ],
    },
    subTemple: {
      title: "Velisina Temple Darshan Timings",
      timings: [
        {
          title: "Every Saturday & Sunday:",
          timing1: "5:30 AM to 12:00 PM – General Darshan",
          timing2: "12:30 PM to 7:00 PM – General Darshan",
        },
        {
          title: "Every Day:",
          timing1: "6:00 AM to 12:00 PM – General Darshan",
          timing2: "12:30 PM to 7:00 PM – General Darshan",
        },
      ],
    },
  };
  const teluguData: TempleDataType = {
    title: "ఆలయ దర్శన సమయాలు",
    mainTemple: {
      title: "ప్రతిష్ట ఆలయం దర్శన సమయాలు",
      timings: [
        {
          title: "ప్రతి శుక్రవారం:",
          timing1: "ఉదయం 6:00 నుండి 10:00 – పంచామృతాభిషేకం",
          timing2: "ఉదయం 10:00 తర్వాత – సర్వదర్శనం",
        },
        {
          title: "ప్రతి శనివారం:",
          timing1: "ఉదయం 4:30 – సుప్రభాత సేవ",
          timing2: "ఉదయం 5:30 నుండి మధ్యాహ్నం 1:00 వరకు",
          timing3: "మధ్యాహ్నం 2:30 నుండి సాయంత్రం 7:00 వరకు – సర్వదర్శనం",
        },
        {
          title: "ప్రతి రోజు:",
          timing1: "ఉదయం 6:00 నుండి మధ్యాహ్నం 12:30 వరకు – సర్వదర్శనం",
          timing2: "మధ్యాహ్నం 2:30 నుండి సాయంత్రం 7:00 వరకు – సర్వదర్శనం",
        },
      ],
    },
    subTemple: {
      title: "వెలిసిన దేవాలయం దర్శన సమయాలు",
      timings: [
        {
          title: "ప్రతి శని, ఆదివారం:",
          timing1: "ఉదయం 5:30 నుండి 12:00 వరకు – సర్వదర్శనం",
          timing2: "మధ్యాహ్నం 12:30 నుండి సాయంత్రం 7:00 వరకు – సర్వదర్శనం",
        },
        {
          title: "ప్రతి రోజు:",
          timing1: "ఉదయం 6:00 నుండి మధ్యాహ్నం 12:00 వరకు – సర్వదర్శనం",
          timing2: "మధ్యాహ్నం 12:30 నుండి సాయంత్రం 7:00 వరకు – సర్వదర్శనం",
        },
      ],
    },
  };

  let currentData = {} as TempleDataType;
  if (language == "en") {
    currentData = englishData;
  } else {
    currentData = teluguData;
  }
  return (
    <div id="temple-timings-container">
      <div id="temple-timings-title">{currentData.title}</div>
      <div id="temple-timings">
        {/* Main Temple */}
        <div className="temple-card-timings">
          <div className="temple-card-timings-title">
            {currentData.mainTemple.title}
          </div>
          {currentData.mainTemple.timings.map((entry, index) => (
            <div className="temple-card-timings-data" key={`main-${index}`}>
              <div className="temple-card-timings-item-title">
                {entry.title}
              </div>
              <div className="temple-card-timings-item">{entry.timing1}</div>
              <div className="temple-card-timings-item">{entry.timing2}</div>
              <div className="temple-card-timings-item">{entry.timing3}</div>
            </div>
          ))}
        </div>

        {/* sub Temple */}
        <div className="temple-card-timings">
          <div className="temple-card-timings-title">
            {currentData.subTemple.title}
          </div>
          {currentData.subTemple.timings.map((entry, index) => (
            <div className="temple-card-timings-data" key={`sub-${index}`}>
              <div className="temple-card-timings-item-title">
                {entry.title}
              </div>
              <div className="temple-card-timings-item">{entry.timing1}</div>
              <div className="temple-card-timings-item">{entry.timing2}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TempleTimings;
