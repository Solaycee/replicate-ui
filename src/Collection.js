function Collection(volt) {
  return (
    <div className="voltContainer">
      {volt.voltCollection.map((item, index) => (
        <div key={index} className="voltCard">
          {item.image}
          <p
            className={
              item.stock === 0
                ? "voltTitle text-overlay unavailable"
                : "voltTitle text-overlay"
            }
          >
            {item.stock === 0 ? `${item.text} (Unavailable)` : item.text}
          </p>
          {item.exclusive === "yes" && (
            <img src="images/star.png" alt="exclusive" className="Location" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Collection;
