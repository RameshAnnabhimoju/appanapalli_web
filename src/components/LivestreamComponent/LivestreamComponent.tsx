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
        width="560"
        height="315"
        src="https://www.youtube.com/embed/l1W4aUmaAL4?si=RfnE0MVNVBVZ_tpo&amp;controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LivestreamComponent;
