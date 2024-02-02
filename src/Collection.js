function Collection(volt) {
  return (
    <div className="voltContainer">
      {volt.voltCollection.map((item, index) => (
        <div key={index} className="voltCard">
          {item.image}
          <p className="voltTitle text-overlay">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Collection;
