import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./TravelFacilitiesStyles.css";
const TravelFacilities = () => {
  const context = useContext(LanguageContext);
  const { language } = context;
  type travelDataTypes = {
    title: string;
    description: string;
  };
  const englishData: travelDataTypes = {
    title: "Travel facilities for pilgrims",
    description: `Sri Bala Balaji Devasthanam, Appanapalle Kshetra is located 39 km from
          Palakollu Railway Station on the Vijayawada-Narasapuram railway route.
          Every train to Narasapuram stops at Palakollu Station. From there,
          take a bus from Palakollu to Amalapuram (via Bodasakuru Bridge) and
          get down at Pasarlapudi (Kondalammachinta). From there, Appanapalli
          Kshetra is 3 km away. It can be reached by bus or auto. People from
          Srikakulam, Vizianagaram and Visakhapatnam districts should get down
          at Rajahmundry railway station and take the Amalapuram bus to get down
          at Amalapuram and from there take the Rajolu, Palakollu & Bhimavaram
          buses (via Bodasakuru Bridge) and get down at Pasarlapudi (Kondalamma
          Chintha). From there, Appanapalli Kshetra is 3 km away. It can be
          reached by bus or auto.`,
  };
  const teluguData: travelDataTypes = {
    title: "యాత్రికులకు ప్రయాణ సదుపాయములు",
    description: `శ్రీ బాలబాలాజీ దేవస్థానం, అప్పనపల్లి క్షేత్రము విజయవాడ నుండి నరసాపురం వెళ్ళు రైలు మార్గమున పాలకొల్లు రైల్వే స్టేషన్ నుండి 39 కి. మీ. దూరమున కలదు. నరసాపురం వెళ్ళు ప్రతి రైలు పాలకొల్లు స్టేషను నందు ఆగును. అచ్చట నుండి పాలకొల్లు నుండి అమలాపురం వెళ్ళు బస్సు (వయా బోడసకుర్రు బ్రిడ్జి) ఎక్కి పాశర్లపూడి (కొండాలమ్మచింత) వద్ద దిగవలెను. అచ్చట నుండి అప్పనపల్లి క్షేత్రమునకు 3 కి.మీ. దూరము కలదు. బస్సు ద్వారా కాని ఆటో ద్వారా కాని చేరుకోవచ్చును. శ్రీకాకుళం, విజయనగరం, విశాఖ జిల్లాలవారు రాజమండ్రి రైల్వేస్టేషనులో దిగి అమలాపురం బస్సులో అమలాపురం నందు దిగి అచ్చట నుండి రాజోలు, పాలకొల్లు & భీమవరం బస్సులలో బయలుదేరి (వయా బోడసకుర్రు బ్రిడ్జి) ఎక్కి పాశర్లపూడి (కొండాలమ్మ చింత) వద్ద దిగవలెను. అచ్చట నుండి అప్పనపల్లి క్షేత్రమునకు 3 కి. మీ. దూరము కలదు. బస్సు ద్వారా కాని ఆటోద్వారా కాని చేరుకోవచ్చును`,
  };
  let currentData = {} as travelDataTypes;
  if (language == "en") {
    currentData = englishData;
  } else {
    currentData = teluguData;
  }
  return (
    <div id="travel-facilities-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d680.3669140839228!2d81.9227403351011!3d16.53056867242905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37e65ac2d4c9b7%3A0xe2d13952b5b89849!2sSri%20Visweswara%20Swamy%20Temple!5e1!3m2!1sen!2sin!4v1746996813249!5m2!1sen!2sin"
        width="600"
        height="350"
        loading="lazy"
      ></iframe>

      <div id="travel-facilities-text">
        <div id="travel-facilities-heading">{currentData.title}</div>
        <div id="travel-facilities">{currentData.description}</div>
      </div>
    </div>
  );
};

export default TravelFacilities;
