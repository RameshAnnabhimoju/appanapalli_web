import "./LivestreamStyles.css";

const LivestreamComponent = () => {
  return (
    <div id="livestream-container">
      <div id="livestream-text-container">
        <div id="livestream-text-title">
          Sri Balabalaji Devastanam Live stream
        </div>
        <div id="livestream-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          officia cupiditate harum quae reiciendis accusantium quod,
          perspiciatis dolor sapiente eveniet voluptas, possimus distinctio
          similique nemo asperiores. Vero repudiandae, suscipit numquam
          exercitationem labore quod at assumenda iusto, itaque omnis nesciunt
          possimus inventore veritatis ipsum cumque minus error odio, ullam
          laborum iure ducimus doloremque nihil? Cupiditate, laboriosam?
        </div>
      </div>
      <iframe
        src="https://www.youtube.com/embed/cuGuTJPg_I8?autoplay=1"
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
