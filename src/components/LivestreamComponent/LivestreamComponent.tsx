import "./LivestreamStyles.css";

const LivestreamComponent = () => {
  return (
    <div id="livestream-container">
      <div id="livestream-text-container">
        <div id="livestream-text-title">
          Sri Balabalaji Devastanam Live stream
        </div>
        <div id="livestream-text">
          Sri Appanapalli Temple YouTube Channel is a devotional channel in
          Telugu. Those who cannot visit Appanapalli Temple can now watch Sri
          Appanapalli bala balaji Swamy on this youtube channel. It is to
          provide blessings of Sri Appanapalli Bala Balaji Swamy through digital
          media. You can watch indirect Homas, Poojas and Abhishekams from your
          home on this YouTube channel.
        </div>
      </div>
      <iframe
        src="https://youtube.com/@balatirupati_appanapalli?si=uGH9IulKT4qhHNB1?autoplay=1"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          width: "40%",
          height: "400px",
          borderRadius: "15px",
          border: "4px solid #cd2f2f",
        }}
      ></iframe>
    </div>
  );
};

export default LivestreamComponent;
