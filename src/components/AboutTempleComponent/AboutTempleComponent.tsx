import "./AboutTempleStyles.css";
// import logoImage from "../../assets/images/login_banner_image.png";
import templeImage from "../../assets/images/Appanapalli-Temple.png";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useContext } from "react";
const AboutTempleComponent = () => {
  const { language } = useContext(LanguageContext);
  const teluguData = `శ్రీ వేంకటేశ్వరుడు బాలకృష్ణుని శ్రీ వకదలభ్యుని చూచి తరింపచేసిన స్థలమే
          “అప్పనపల్లి వైకుంఠము” పురాణగాథలయిన భాగవత ఇతిహాసమునందు గల మహర్షులమధ్యలో
          అప్పనపల్లి శ్రీమన్నారాయణుడి ప్రత్యక్ష దర్శనము కలిగినట్లు తెలియబడును.
          శ్రీ కృష్ణప్రత్యక్షితమైన క్షేత్రము, ఎన్నడూ చూడని దైవ దర్శన క్షేత్రం.
          చింతలపూడి పల్లె నుండి సాకుమా తుకుమా నడిచిచేరిన కాశిపట్నం
          జీవనసంధ్యలొనందె విద్యార్ధి చక్రపాణి అల్లబోయిన. జీవనసంధ్యలొనందె
          దేవపూజకుని ప్రత్యక్షము కని “తేనెగూటి” అని పేరుగొందింది. అదే క్షేత్రము
          అప్పనపల్లి అనయనది విశ్వాసమై తెలియవచ్చును. జీవనసంధ్యలొన కొరుకొన కృష్ణ
          ప్రత్యక్షతల సాక్షిగా వైష్ణవము నాస్తికయు నాస్తికులును నమ్మిన కధలు
          కలిగియున్నందున అప్పనపల్లి “చిన్న తిరుపతి” గా ప్రసిద్ధి చెందినది.
          (ప్రత్యక్షసాక్షిగా, అతని వైశిష్ట్యము తెలియవలెను) ఇతడు అతితక్కువ
          వయస్సులో అప్పనపల్లిలో భక్తి పటిష్టత కలిగిన బలరామునిగా నిత్యసేవలతో
          విరాజిల్లినట్టుగా. వెంకటేశ్వరుడు బాలరూపస్వామిగా, బాలకృష్ణునిగా
          దర్శనమిచ్చిన క్షేత్రముగా పరిగణింప బడుతుంది. వైష్ణవకుల నమ్మకముల ప్రకారం
          ఈ క్షేత్రము చిన్న తిరుపతిగా గుర్తింపు పొందింది. మహాశక్తి గల ఈ
          క్షేత్రమునందు భక్తులు తమ కోరికలతో వచ్చి నిఖార్సైన దైవ అనుభూతిని
          పొందుతారు. భక్తులు కోరికల నెరవేరతాయని నమ్ముతారు. అందుకే దీనిని చిన్న
          తిరుపతి అంటారు. బహుళభక్తులు నిత్యముగా విచ్చేసి తామేకాదు తమ
          కుటుంబసభ్యులతోను భక్తితో దర్శించుకుంటారు. ఈ దివ్య క్షేత్రము పచ్చని
          ప్రకృతి మద్యలొ గల గోదావరి తీరమందు ఉంటుంది. భక్తులు ఇక్కడికి వచ్చినపుడు
          ఆధ్యాత్మిక అనుభూతిని పొందుతారు. శ్రీ బాలాజీ స్వామివారి పుణ్యధామముగా
          వెలుగొందుతున్న శ్రీవారిక్షేత్రము. దివ్య దివ్యముగా సేవను అందించు
          స్థలమిది.`;
  const englishData = `The divine location where Lord Venkateswara incarnated as Bala Krishna and gave darshan to Sage Vakadalabhya is called:

“Appanapalli Vaikuntham”
As per the great epic Bhagavatam, Appanapalli is mentioned as a sacred place where the Lord appeared in child form and blessed the sage Vakadalabhya with divine darshan.

Sri Krishna performed many divine plays (leelas) during His childhood. Among them, Appanapalli holds a significant place. In ancient times, a scholar named Shankhadacharyulu, who was a great devotee and a scholar in Jyotisha (astrology), built a small temple and named it “Appanapalli.” This is the first historical mention of Appanapalli as a sacred place.

Later, a local landlord, Koppaka Krishnayya, with immense devotion, expanded this place into a proper temple, constructing gopurams (temple towers) and mandapams (halls). He also conducted regular pujas, religious events, and utsavams (festivals). Eventually, Appanapalli became widely renowned as a sacred Vaishnavite pilgrimage center.

Lord Venkateswara Swamy, appearing as Bala Krishna, gave darshan at this very place, fulfilling the desire of devotees to see the Lord in child form. Even today, devotees feel a divine vibration and joy when visiting. This sacred temple has become the "Chinna Tirupati" (Little Tirupati) of Andhra Pradesh.

Devotees strongly believe that those who sincerely pray at the feet of Bala Balaji will have their wishes fulfilled, and their difficulties removed. Devotees from various regions regularly visit and perform special pujas. Every year, during festivals like Brahmotsavam, Vaikunta Ekadasi, Ugadi, Sriramanavami, and others, thousands of devotees gather here and celebrate with divine fervor.

This temple, situated in lush greenery and on the banks of the Godavari river, is a spiritually uplifting destination for devotees. Regular Annadanam (food distribution), special services, and seva programs are held for the benefit of devotees.

Let all be blessed by Lord Sri Bala Balaji Swamy,`;
  let currentData = "";
  if (language == "en") {
    currentData = englishData;
  } else {
    currentData = teluguData;
  }
  return (
    <div id="about-temple-container">
      {/* <img src={logoImage} alt="about-temple-image" id="about-temple-image" /> */}
      <img src={templeImage} alt="about-temple-image" id="about-temple-image" />
      <div id="about-temple-text-container">
        <div id="about-temple-title">Temple History</div>
        <div id="about-temple-text">{currentData}</div>
      </div>
    </div>
  );
};

export default AboutTempleComponent;
